export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("site");
    eleventyConfig.addPassthroughCopy("site/assets/css/*.css");
    eleventyConfig.addPassthroughCopy("site/assets/js/*.js");
    eleventyConfig.addPassthroughCopy("site/assets/webfonts/*");
    eleventyConfig.addPassthroughCopy("site/images/*");
};
