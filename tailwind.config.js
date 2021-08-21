module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        fond: "url('/images/fond.png')",
      }),
      textColor: {
        lba: "#00afe6",
        arche: "#00205a",
      },
    },
    flex: {
      50: "0 0 50%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
