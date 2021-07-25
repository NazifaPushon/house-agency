module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: "'Nunito', sans-serif",
        nav: "'Roboto', sans-serif",
        right: "'Righteous', cursive"
      },
      colors: {
        primary: {
          350: "#FFC839",
          150: "#FFF5DA"
        }
      },
      boxShadow: {
        '3xl': '0px 4px 35px rgba(196, 143, 7, 0.49)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}