const site = require("./src/_data/site.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Absolute URL for canonical / Open Graph tags.
  eleventyConfig.addFilter("absoluteUrl", (path) => new URL(path, site.url).href);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
