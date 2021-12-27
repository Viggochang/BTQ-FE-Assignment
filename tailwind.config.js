module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "501px",
      sm: "521px",
      md: "721px",
      lg: "1025px",
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
      primary: "#e41f3a",
    },
  },
  plugins: [],
};
