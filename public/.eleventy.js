module.exports = function(eleventyConfig) {

    const { DateTime } = require("luxon");

    eleventyConfig.addPassthroughCopy("./media");
    eleventyConfig.addPassthroughCopy("./styles/input.css");
    eleventyConfig.addPassthroughCopy("./admin");
    eleventyConfig.addPassthroughCopy("./dist/output.css");
    eleventyConfig.addPassthroughCopy("./js");
    eleventyConfig.addPassthroughCopy("./");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

  return {
    dir: {
      input: ".",
      output: "public"
    }
  };
};