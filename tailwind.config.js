module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      inner: '0px 1.5px 0px 0px #04165D',
      bottom: '0px 5px 30px 0px rgba(50, 50, 50, 0.04)'
    },
    variants: {
      extend: {
        fontFamily: {
          primary: ['Gilroy', 'sans-serif'],
        },
        borderColor: ['visited'],
      },
    },
  },
  plugins: [],
};