/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:
    {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      rubik: ["Rubik Burned", "system-ui"]
    }
  },
  daisyui: {
    themes: ["light",],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

