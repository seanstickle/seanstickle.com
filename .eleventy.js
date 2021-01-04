const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_tmp/style.css");

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addFilter("dateformat", function (dateIn) {
    return DateTime.fromISO(dateIn).toFormat("DDDD");
  });
};
