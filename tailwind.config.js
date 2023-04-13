/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./lib/posts.js",
    "./pages/**/*.js",
    "./components/*.{js,css}",
    "./posts/*.md",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

