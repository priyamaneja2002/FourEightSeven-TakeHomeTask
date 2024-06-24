/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        itc: ['ITC Garamond Book Condensed', 'sans-serif'], // Add your custom font here
        gtalpina: ['GT Alpina Typewriter', 'sans-serif'],
        apercu: ['Apercu', 'sans-serif'],
      },
    },
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