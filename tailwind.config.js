/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: '#E74040',
        text: '#252B42',
        primary: '#96BB7C',
        faded_secondary: '#FFF2F3',
        second_text: '#737373',
        
      }
    },
  },
  plugins: [],
}