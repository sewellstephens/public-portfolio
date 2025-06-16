module.exports = function(eleventyConfig) {

    const { DateTime } = require("luxon");

    eleventyConfig.addPassthroughCopy("./media");
    eleventyConfig.addPassthroughCopy("./styles/input.css");
    eleventyConfig.addPassthroughCopy("./admin");
    eleventyConfig.addPassthroughCopy("./dist/styles.css");
    eleventyConfig.addPassthroughCopy("./js");
    eleventyConfig.addPassthroughCopy("./certifications/cert-1.njk");

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