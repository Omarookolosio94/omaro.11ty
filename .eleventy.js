const { format } = require("date-fns");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("articles", function (collection) {
    return collection.getFilteredByGlob("./src/articles/*.md").reverse();
  });

  eleventyConfig.addFilter("divide", (num, divisor) => {
    return num / divisor;
  });

  eleventyConfig.addFilter("date", (date, formatStr) => {
    return format(new Date(date), formatStr);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
