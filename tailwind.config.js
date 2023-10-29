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
        backgroundCol: "rgb(114, 139, 119);",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      height: {
        "screen-minus-footer": "calc(100vh - 200px)",
        "screen-minus-portfolio": "calc(100vh - 65px)",
      },
    },
  },
  plugins: [],
};
