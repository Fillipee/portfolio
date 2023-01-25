/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      extend: {
          colors: {
              "main-yellow": "#fce300",
          },
      },
  },
  plugins: [],
};
