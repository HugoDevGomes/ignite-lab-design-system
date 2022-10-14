/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },


    colors:{

      transparent: 'transparent',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#c4c4cc',      
        100: '#E1E1E6',
      },

      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB',
      },

      green: {
        500: '#00D1B2',
        300: '#8FEDDF'
      },

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#c4c4cc',      
      'gray-100': '#E1E1E6',

      'cyan-500': '#81D8F7',
      'cyan-300': '#9BE1FB',

      'green-500': '#00D1B2',
      'green-300': '#8FEDDF',
      
      'black': '#000000',
      'white': '#FFFFFF'
    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
