// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        beige: "#efefef",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "slow-pulse": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
