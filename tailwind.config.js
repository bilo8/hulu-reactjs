module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus", "active", "group-hover"],
      animation: ["group-hover"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
