module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FFC107',
        accent: '#FF5722',
        background: '#1E1E1E',
        text: '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};