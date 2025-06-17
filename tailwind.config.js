module.exports = {
  content: ['./**/*.{html,njk,md}', './certifications/**/*.{html,njk,md}', './_includes/**/*.{html,njk,md}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
