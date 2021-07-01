module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      animation: {
        bounce200: 'bounce 0.5s infinite 100ms',
        bounce400: 'bounce 0.5s infinite 200ms',
    },
    },
    colors: {
      'yellow-light': '#FFFF8A',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray':'#3C3C3C',
      'yellow-lighter':'#FAF0BC',
      'yellow':'#FFF367',
      'gray-dark':'#232323',
    },
    backgroundImage: theme => ({
      'anime': "url('https://i.imgur.com/fxNrawy.jpg')",
     })
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
