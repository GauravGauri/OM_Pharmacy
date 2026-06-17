/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#0a6e4f',
          light: '#12a06e',
          pale: '#e8f7f2',
        },
        teal: {
          DEFAULT: '#0d8f75',
        },
        gold: {
          DEFAULT: '#c9a84c',
        },
        dark: {
          DEFAULT: '#0d1f1a',
        },
        gray: {
          DEFAULT: '#6b7c76',
        },
        offWhite: '#f7fbf9',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
