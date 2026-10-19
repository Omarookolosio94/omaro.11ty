// "Listen" — reads the page aloud with the browser's built-in speech synthesis.
//
// If the page has a narration script (src/_data/narration.js), that is what
// gets spoken: a first-person telling of the page, with each part pointing at
// the section or row it's about so it can be highlighted. Without a script it
// falls back to reading the page block by block.
//
// Speech is queued one sentence at a time, which avoids Chrome cutting off
// long utterances and lets pause/stop respond immediately.
(function () {
  var synth = window.speechSynthesis;
  var root = document.getElementById("read-root");
  var bar = document.getElementById("listen");
  if (!synth || !window.SpeechSynthesisUtterance || !root || !bar) return;

  // Words a speech engine tends to mangle. Order matters (ASP.NET before .NET).
  var SAY = [
    // Names: "o-ghe-ne-ma-ro".
    [/\bOghenemaro\b/g, "Oh-gheh-neh-mah-roh"],
    [/\bMaro\b/g, "Mah-roh"],
    [/\bITab\b/g, "eye-tab"],
    [/\bASP\.NET\b/g, "A S P dot net"],
    [/\.NET\b/g, "dot net"],
    [/\bC#/g, "C sharp"],
    [/\bPL\/SQL\b/g, "P L S Q L"],
    [/\bSaaS\b/g, "sass"],
    [/\bKYC\b/g, "K Y C"],
    [/\bBNPL\b/g, "B N P L"],
    [/\bUTC\+1\b/g, "U T C plus one"],
    [/\bNext\.js\b/g, "Next J S"],
    [/\bNode\.js\b/g, "Node J S"],
    [/\bB\.Sc\./g, "B S C"],
    [/\bUS\b/g, "U S"],
    [/(\d{4})\s*—\s*(\d{4}|Now)/g, "$1 to $2"],
    [/\s[—·]\s/g, ", "],
    [/↗/g, ""],
  ];

  function speakable(text) {
    return SAY.reduce(function (t, rule) {
      return t.replace(rule[0], rule[1]);
    }, text.replace(/\s+/g, " ").trim());
  }

  function sentences(text) {
    return (text.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) || [text])
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  // ---- Build the queue: [{ text, el }] -------------------------------------

  function fromNarration() {
    var data = document.getElementById("narration");
    if (!data) return null;
    var parts;
    try { parts = JSON.parse(data.textContent); } catch (e) { return null; }
    if (!Array.isArray(parts) || !parts.length) return null;

    var queue = [];
    parts.forEach(function (part) {
      var el =
        root.querySelector('[data-narrate="' + part.target + '"]') ||
        root.querySelector('[data-section="' + part.target + '"]');
      sentences(part.text).forEach(function (s) {
        queue.push({ text: s, el: el });
      });
    });
    return queue;
  }

  function fromPage() {
    var BLOCKS = "h1, h2, p, li, .aside, .row > a";
    var SKIP = ".stack, [data-no-read]";
    return Array.prototype.filter
      .call(root.querySelectorAll(BLOCKS), function (el) {
        return !el.matches(SKIP) && !el.closest(SKIP) && !el.querySelector(BLOCKS) && el.textContent.trim();
      })
      .map(function (el) {
        return { text: el.textContent, el: el };
      });
  }

  var queue = fromNarration() || fromPage();
  if (!queue.length) return;

  var words = queue.reduce(function (n, item) {
    return n + item.text.trim().split(/\s+/).length;
  }, 0);
  var minutes = Math.max(1, Math.round(words / 160)) + " min";

  // ---- Controls: the inline bar and the floating player share one state ----

  var floater = document.getElementById("listen-float");
  var controls = [bar, floater].filter(Boolean).map(function (container) {
    return {
      toggle: container.querySelector("[data-listen-toggle]"),
      label: container.querySelector("[data-listen-toggle] span"),
      stop: container.querySelector("[data-listen-stop]"),
      meta: container.querySelector("[data-listen-meta]"),
    };
  });

  controls.forEach(function (c) {
    if (c.meta) c.meta.textContent = minutes;
  });
  bar.hidden = false;
  if (floater) floater.hidden = false;

  // ---- Voice ---------------------------------------------------------------

  // Best-sounding English voice on this device: natural/neural voices first,
  // then US or UK accents, then the platform's better-known voices.
  function pickVoice() {
    var best = null;
    var bestScore = -1;
    synth.getVoices().forEach(function (v) {
      if (!/^en(-|_|$)/i.test(v.lang)) return;
      var score = 0;
      if (/natural|neural|premium|enhanced/i.test(v.name)) score += 8;
      else if (/online|google/i.test(v.name)) score += 4;
      if (/en[-_](US|GB)/i.test(v.lang)) score += 3;
      if (/samantha|daniel|serena|aria|jenny|guy|sonia|ryan/i.test(v.name)) score += 1;
      if (score > bestScore) {
        best = v;
        bestScore = score;
      }
    });
    return best;
  }

  var voice = pickVoice();
  if (synth.addEventListener) {
    synth.addEventListener("voiceschanged", function () {
      voice = pickVoice();
    });
  }

  // ---- Playback ------------------------------------------------------------

  var state = "idle"; // idle | playing | paused
  var run = 0; // bumps on every stop so callbacks from an old run are ignored
  var current = null;

  function highlight(el) {
    if (el === current) return;
    if (current) current.classList.remove("is-reading");
    if (el) el.classList.add("is-reading");
    current = el;
    follow();
  }

  // ---- Follow along: scroll to what's being narrated while the visitor is idle

  var IDLE_MS = 3000;
  var lastInput = 0;
  var idleTimer = null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var siteHeader = document.getElementById("site-header");

  function isIdle() {
    return Date.now() - lastInput >= IDLE_MS;
  }

  function follow() {
    if (state !== "playing" || !current || !isIdle()) return;
    var rect = current.getBoundingClientRect();
    var top = (siteHeader ? siteHeader.offsetHeight : 0) + 21.6;
    var bottom = window.innerHeight - 72; // keep clear of the floating player
    var fits = rect.height <= bottom - top;
    if (rect.top >= top && (rect.bottom <= bottom || !fits)) return; // already in view
    window.scrollTo({
      top: window.scrollY + rect.top - top,
      behavior: reduceMotion.matches ? "auto" : "smooth",
    });
  }

  function onInput(e) {
    // Chrome fires zero-distance mousemoves when content scrolls under the cursor.
    if (e.type === "mousemove" && !e.movementX && !e.movementY) return;
    lastInput = Date.now();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(follow, IDLE_MS);
  }

  ["wheel", "touchstart", "touchmove", "keydown", "pointerdown", "mousemove"].forEach(function (type) {
    window.addEventListener(type, onInput, { passive: true });
  });

  function render() {
    var label = state === "playing" ? "Pause" : state === "paused" ? "Resume" : "Listen";
    controls.forEach(function (c) {
      c.label.textContent = label;
      c.toggle.setAttribute("aria-pressed", state === "playing" ? "true" : "false");
      c.toggle.classList.toggle("is-playing", state === "playing");
      c.stop.hidden = state === "idle";
      if (c.meta) c.meta.hidden = state !== "idle";
    });
  }

  // We never rely on speechSynthesis.pause()/resume(): they're unreliable on
  // mobile (Android cancels, iOS can hang after the screen locks). Instead,
  // pausing cancels speech and remembers the sentence; resuming speaks that
  // sentence again from its start.
  var position = 0; // sentence currently being (or about to be) spoken
  var spokenAt = 0; // when the current sentence was handed to the engine

  function speakFrom(i) {
    if (i >= queue.length) return stop();
    var mine = ++run;
    position = i;
    spokenAt = Date.now();
    highlight(queue[i].el);

    var u = new SpeechSynthesisUtterance(speakable(queue[i].text));
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : "en-GB";
    u.onend = function () {
      if (mine === run && state === "playing") speakFrom(i + 1);
    };
    u.onerror = function (e) {
      if (mine !== run || e.error === "interrupted" || e.error === "canceled") return;
      // Blocked or failed: hold our place so the visitor can try again.
      halt("paused");
    };
    synth.speak(u);
  }

  // Cancel speech without losing the place (or clear it, for a full stop).
  function halt(next) {
    run++;
    state = next;
    synth.cancel();
    if (next === "idle") {
      position = 0;
      highlight(null);
    }
    render();
  }

  function play() {
    synth.cancel();
    state = "playing";
    render();
    speakFrom(position);
  }

  function pause() {
    halt("paused");
  }

  function stop() {
    halt("idle");
  }

  controls.forEach(function (c) {
    c.toggle.addEventListener("click", function () {
      if (state === "playing") pause();
      else play();
    });
    c.stop.addEventListener("click", stop);
  });

  // Phone locked or tab hidden: mobile browsers suspend speech, so pause
  // cleanly at the current sentence, then carry on from it when the visitor
  // comes back (unless they paused it themselves). If the browser won't allow
  // speech without a fresh tap, the error handler leaves it on "Resume".
  var pausedByHide = false;
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (state === "playing") {
        pausedByHide = true;
        pause();
      }
    } else if (pausedByHide) {
      pausedByHide = false;
      if (state === "paused") play();
    }
  });

  // Watchdog: if the engine silently dropped the sentence (seen after
  // unlocking a phone), say it again.
  setInterval(function () {
    if (state !== "playing" || document.hidden) return;
    if (!synth.speaking && !synth.pending && Date.now() - spokenAt > 2000) speakFrom(position);
  }, 1500);

  // Don't keep talking after the visitor leaves the page.
  window.addEventListener("pagehide", stop);

  // ---- Floating player: shown once the inline bar has scrolled out of view --

  if (floater && "IntersectionObserver" in window) {
    var header = document.getElementById("site-header");
    var offset = header ? header.offsetHeight : 0;
    new IntersectionObserver(
      function (entries) {
        var e = entries[0];
        var show = !e.isIntersecting && e.boundingClientRect.top < offset;
        floater.classList.toggle("is-visible", show);
        floater.setAttribute("aria-hidden", show ? "false" : "true");
        floater.inert = !show;
      },
      { rootMargin: "-" + offset + "px 0px 0px 0px" }
    ).observe(bar);
  }

  render();
})();
