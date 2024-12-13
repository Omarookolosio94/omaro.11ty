const { format } = require("date-fns");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("robots.txt");

  eleventyConfig.addCollection("articles", function (collection) {
    return collection.getFilteredByGlob("./src/articles/*.md").reverse();
  });

  eleventyConfig.addFilter("divide", (num, divisor) => {
    return num / divisor;
  });

  eleventyConfig.addFilter("date", (date, formatStr) => {
    return format(new Date(date), formatStr);
  });

  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://omaro.netlify.app",
    },
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
