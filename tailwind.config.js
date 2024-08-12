/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-image': "url('../src/Assets/bg-home.jpg')",
      })
    },
  },
  plugins: [],
}

