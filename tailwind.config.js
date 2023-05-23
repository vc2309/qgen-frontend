/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],

    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
      Cabin: ["Cabin, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
    },
  },
  plugins: [],
};

