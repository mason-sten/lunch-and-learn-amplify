module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.700"),
    }),
    extend: {
      colors: {
        primary: "#50B4E5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
