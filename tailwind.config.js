/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  media: false,
  theme: {
    extend: {
      colors: {
        // castanho
        primary: "#2A110D",

        // black
        textColor: "#000000",
        // grays
        formBg: "#F7F7F7",
        borderBg: "#EDEDF1",

        // yellow
        custom: "#F8971C",
      },
    },
  },
  plugins: [],
};
