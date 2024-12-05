/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  variants: {
    extend: {
      scrollBehavior: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
};
