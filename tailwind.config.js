/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('unchecked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `input[type="radio"]:not(:checked) + .${e(`unchecked${separator}${className}`)}`;
        });
      });
    },
  ],
}