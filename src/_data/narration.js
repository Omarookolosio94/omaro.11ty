// Spoken scripts for the "Listen" player, keyed by page URL.
//
// Each part is told in first person, like a short conversation rather than a
// reading of the page. `target` names what the part is about, so the player
// can highlight it: a section (data-section) or a single row (data-narrate).
// Keep every fact in step with src/_data/cv.js.
module.exports = {
  "/": [
    {
      target: "intro",
      text:
        "Hi, I'm Oghenemaro, Maro for short. I'm a software engineer in Lagos, " +
        "and for a little over six years I've been building software for banks and the products that grow around them. " +
        "Almost everything I've built ends up in front of someone. A merchant at checkout. A customer halfway through opening an account. " +
        "A parent watching a school bus move across a map. And the thing I care about most is the moment that person stops waiting.",
    },
    {
      target: "experience-0",
      text:
        "Right now, I lead engineering on Alero at Union Bank of Nigeria. It's the platform the bank uses to measure how its businesses are performing, " +
        "and my job is to make sure the numbers people see are numbers they can actually trust.",
    },
    {
      target: "experience-1",
      text:
        "Before that, I spent five years at Stanbic IBTC Bank, building payments, lending and onboarding systems that real customers used every day.",
    },
    {
      target: "experience-2",
      text: "And I started out at ITab Solutions, working on portfolio and asset management software.",
    },
    {
      target: "work-bnpl",
      text:
        "A few pieces of work I'm proud of. At Stanbic, I built the Buy Now Pay Later platform from the ground up. " +
        "The merchant gets paid in full straight away, the customer pays over time, and everyone sees the same status the moment it changes.",
    },
    {
      target: "work-ezcash",
      text:
        "On EZ Cash, the bank's instant loan product, there was a bulk upload job that took more than twenty-five minutes. I got it under six.",
    },
    {
      target: "work-campusrunz",
      text:
        "Outside the bank, I build CampusRunz, which puts rides, deliveries, food and housing for students into one app. " +
        "I built its web applications, and I look after where the platform is heading technically.",
    },
    {
      target: "work-busbuzzer",
      text:
        "And with BusBuzzer, I worked alongside a team in the United States on an admin panel and live tracking for electric school buses, " +
        "because parents want to know exactly where the bus is.",
    },
    {
      target: "contact",
      text:
        "If any of that sounds close to what you're working on, I'd love to hear from you. " +
        "Email is the quickest way to reach me, or you can book a call right from this page. Thanks for listening.",
    },
  ],

  "/about/": [
    {
      target: "intro",
      text: "Let me tell you how I got here, because it isn't quite the straight line you might expect.",
    },
    {
      target: "education",
      text:
        "I didn't start out in software at all. I studied geology, at the Federal University of Petroleum Resources, and graduated in 2017.",
    },
    {
      target: "experience-2",
      text:
        "I started writing software professionally in 2019, in a few early roles that were mostly about learning the craft. " +
        "The first one that really shaped how I work came in 2020, at a company called ITab Solutions. We were building software that helps firms manage investment portfolios. " +
        "Some of the valuation jobs took a long time to run, and people would just sit there, looking at a screen, with no idea whether anything was happening. " +
        "So I added live progress updates. It sounds like a small thing. But it's the same thread that runs through everything I've done since: don't leave people waiting in the dark.",
    },
    {
      target: "experience-1",
      text:
        "Later that year I joined Stanbic IBTC Bank, and I stayed for five years. The project I'm proudest of from that time is Buy Now Pay Later. " +
        "Think about it from both sides. A customer wants something today, and wants to pay for it over six months. The merchant selling it can't wait six months to be paid. " +
        "So the bank steps in, pays the merchant in full at checkout, and the customer pays the bank back over time. " +
        "I built the whole thing, the system underneath and the portal merchants use, and made sure that whenever anything changed, everyone saw it at the same moment. " +
        "I also wrote the guide that merchants' developers used to connect to it, worked with them directly, and changed parts of the design because of what they told me.",
    },
    {
      target: "experience-1",
      text:
        "Not all of it was that visible. On EZ Cash, the bank's instant loan product, there was a bulk upload that took more than twenty-five minutes. I got it down to under six, " +
        "and lifted the loan application success rate by twenty-four percent. " +
        "I built the bank's rewards engine, too, and reworked account opening so that when something went wrong, customers were told exactly what to do next, instead of hitting a dead end.",
    },
    {
      target: "experience-0",
      text:
        "At the end of 2025, I moved to Union Bank of Nigeria, to lead a team of four on a platform called Alero. It's how the bank measures the performance of its businesses. " +
        "And here's the thing about a performance number: it's only useful if people believe it. " +
        "So a big part of my job is making sure the figure on the screen matches the figure in the systems it came from. " +
        "I also run our code reviews, and help the team get better at testing and documentation.",
    },
    {
      target: "part-time-0",
      text:
        "Outside of my day job, there's CampusRunz. It's an app for students: rides, deliveries, food, somewhere to live, and a lot more besides. " +
        "I've been part of it since 2022, part-time, and I built its web applications myself, the app students use and the portal the team runs everything from. " +
        "When we rebuilt that portal, pages started loading more than ten seconds faster. " +
        "I also set its technical direction, and I'm leading four engineers as we move everything onto a new foundation, without ever switching the service off.",
    },
    {
      target: "part-time-1",
      text:
        "And in 2024, I worked with BusBuzzer, an electric school bus company in the United States. " +
        "I built the panel operators use to manage their buses, with a live map of where each one is, because when it's your child on board, you want to know exactly where they are.",
    },
    {
      target: "skills",
      text:
        "If you're wondering about tools: most days I'm writing TypeScript or C sharp. React and Next.js on the front end, Node.js and dot net behind them, " +
        "with Postgres or SQL Server underneath, and AWS or Azure to run it all.",
    },
    {
      target: "intro",
      text:
        "As for how I like to work, I'd rather own something from start to finish: the first conversation with product, the design, the code, the testing, " +
        "and then watching it run in production. And I'm happiest in small teams, where people review each other's work and shape the architecture together. " +
        "Thanks for listening. If any of this sounds like a fit, the contact page has everything you need.",
    },
  ],

  "/contact/": [
    {
      target: "intro",
      text:
        "Thanks for stopping by. Whether it's a role, a system that needs untangling, or a product you're trying to get off the ground, I'm glad to hear about it. " +
        "I'm based in Lagos, and I work remotely, with plenty of overlap with United States working hours.",
    },
    {
      target: "reach",
      text:
        "The best way to reach me is email. You'll also find me on LinkedIn and GitHub, " +
        "and if you'd rather just talk, you can book a call straight from this page. I look forward to hearing from you.",
    },
  ],
};
