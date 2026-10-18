const site = require("./src/_data/site.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Appended to CSS/JS URLs so browsers fetch fresh copies after each build.
  eleventyConfig.addGlobalData("buildId", Date.now().toString(36));

  // Absolute URL for canonical / Open Graph tags.
  eleventyConfig.addFilter("absoluteUrl", (path) => new URL(path, site.url).href);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
