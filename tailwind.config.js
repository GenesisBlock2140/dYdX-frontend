/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,tsx}"
  ],
  theme: {
    fontFamily: {
      'Circular': ['Circular'],
      'SpaceMono': ['"Space Mono"']
    },
    extend: {
      colors: {
        'purpleTh': '#6966FF',
        'greyTh': '#C8C7D8'
      },
    },
  },
  plugins: [],
}
