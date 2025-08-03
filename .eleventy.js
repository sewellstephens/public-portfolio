module.exports = function(eleventyConfig) {

    const { DateTime } = require("luxon");
    const dotenv = require("dotenv");
    dotenv.config();

    eleventyConfig.addPassthroughCopy("./media");
    eleventyConfig.addPassthroughCopy("./styles/input.css");
    eleventyConfig.addPassthroughCopy("./admin");
    eleventyConfig.addPassthroughCopy("./dist/styles.css");
    eleventyConfig.addPassthroughCopy("./js");
    eleventyConfig.addPassthroughCopy("./certifications/cert-1.njk");
    eleventyConfig.addPassthroughCopy("./_includes/base-2.njk");
    eleventyConfig.addPassthroughCopy("./_includes/article-snippet.njk");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addCollection("post", (collection) => {
        const items = collection.getAll().filter(item => 
            item.data.layout === 'article.njk' && 
            (!item.data.tags || !(item.data.tags).includes("archived"))
        ).sort((a, b) => {
            return b.date - a.date;
        });
        console.log("Active Posts:", items.map(i => ({ 
            path: i.inputPath, 
            title: i.data.title, 
            tags: i.data.tags 
        })));
        return items;
    });

    eleventyConfig.addCollection("archived", (collection) => {
        return collection.getAll().filter(item => 
            item.data.layout === 'article.njk' && 
            (item.data.tags || !(item.data.tags).includes("post"))
        ).sort((a, b) => {
            return b.date - a.date;
        });
    });

  return {
    dir: {
      input: ".",
      output: "public"
    }
  };
};