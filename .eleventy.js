const { format } = require("date-fns");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("robots.txt");

  /*
  eleventyConfig.addCollection("articles", function (collection) {
    return collection.getFilteredByGlob("./src/articles/*.md").reverse();
  });*/

  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/articles/*.md").sort((a, b) => {
      return a.date - b.date; // Sort by date
    });
  });

  eleventyConfig.addFilter("indexOf", function (arr, value) {
    return arr.findIndex(item => item.inputPath === value.inputPath);
  });

  eleventyConfig.addFilter("divide", (num, divisor) => {
    return num / divisor;
  });

  eleventyConfig.addFilter("date", (date, formatStr) => {
    return format(new Date(date), formatStr);
  });

  eleventyConfig.addFilter("wordCount", (content) => {
    if (content && typeof content === "string") {
      return content.split(/\s+/).length;
    }
    return 0;
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
