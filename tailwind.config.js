/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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