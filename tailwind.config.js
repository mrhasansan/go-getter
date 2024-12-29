/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1B357", // Replace with your desired primary color
        secondary: "#333333",
        logyel: "#4DABE9",
        logblue: "#00aeef",
      },
    },
  },
  plugins: [],
};
