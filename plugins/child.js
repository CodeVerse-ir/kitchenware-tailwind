// customVariant.js

const plugin = require('tailwindcss/plugin');
const { e } = require('tailwindcss/lib/util/escapeClassName');

module.exports = plugin(function ({ addVariant, e }) {
  addVariant('child', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`child${separator}${className}`)} > *`;
    });
  });

  addVariant('child-hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`child-hover${separator}${className}`)} > *:hover`;
    });
  });
});