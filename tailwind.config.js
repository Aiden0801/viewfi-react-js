/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF2F80',
        clightblue: '#00398C',
        cblue: '#00277A',
        cpink: '#EF5BFF',
        cdark: '#02172E',
        clightdark: '#BCC5CF',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        // Define your custom sizes
        h0: ['36px', { lineHeight: '1.1' }],
        h1: ['30px', { lineHeight: '1.2' }],
        h2: ['24px', { lineHeight: '1.4' }],
        h3: ['16px', { lineHeight: '1.5' }],
        h4: ['12px', { lineHeight: '1.6' }],
        h5: ['10px', { lineHeight: '1.7' }],
      }
    },
  },
  plugins: [],
}