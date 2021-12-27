module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "520px",
      md: "720px",
      lg: "1024px",
      xl: "1165px",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
    },
    colors: {
      "my-black": "#191818",
      white: "#ffffff",
    },
  },
  plugins: [],
};
