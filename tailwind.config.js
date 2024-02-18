module.exports = {
content: ['./**/*.{html,njk,md}'],
theme: {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          a: {
            color: '#299fff',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
},
plugins: [
  require('@tailwindcss/typography')
],
};
