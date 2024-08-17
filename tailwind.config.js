/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ringColor: {
        customGrey: '#F3F3F3',
        customGreen: '#B9FF66',
        customDark: '#191A23'
      },
      borderColor: {
        customGrey: '#F3F3F3',
        customGreen: '#B9FF66',
        customDark: '#191A23'
      },
      backgroundColor: {
        customGrey: '#F3F3F3',
        customGreen: '#B9FF66',
        customDark: '#191A23'
      },
      textColor: {
        customGrey: '#F3F3F3',
        customGreen: '#B9FF66',
        customDark: '#191A23'
      },
      fontFamily: {
        spaceGrotesk: 'SpaceGrotesk'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

