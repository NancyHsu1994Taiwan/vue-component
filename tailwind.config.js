// tailwind.config.js
module.exports = {
  content: [
    // Example content paths...
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#64C3BF',
        secondary: '#00807E',
        text: '#818A91'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
