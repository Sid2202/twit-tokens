module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    colors: {
      'blue': '#1D9BF0'
    },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
