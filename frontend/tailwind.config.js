module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        nav:         
            {
              50: '#edf6fa',
              100: '#d1dbe1',
              200: '#b4c1ca',
              300: '#96a8b5',
              400: '#788da0',
              500: '#5e7386',
              600: '#495869',
              700: '#343e4b',
              800: '#1e252e',
              900: '#060d14',
            }
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
