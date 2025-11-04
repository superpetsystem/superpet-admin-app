/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        superpet: {
          primary: '#0E6A6B',
          'primary-dark': '#0A5152',
          'primary-light': '#12888A',
          secondary: '#E47B24',
          'secondary-dark': '#C26619',
          'secondary-light': '#F89042',
          light: '#F8F5EE',
          background: '#F2EBDD',
          dark: '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
}

