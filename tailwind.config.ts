/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          coal: "#0c0c0c",
          graphite: "#141414",
          ash: "#1d1d1d",
          smoke: "#262626",
          line: "#302f2c",
          bone: "#f3ede2",
          cream: "#e8dfcf",
          muted: "#a89e90",
          gold: "#c9a15e",
          goldLight: "#ddbc82",
          goldDeep: "#a8843f",
        },
        fontFamily: {
          sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
          display: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        },
      },
    },
    plugins: [],
  }