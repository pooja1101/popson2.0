/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto','sans-serif'],
      },
      colors:{
        'primary':{
          '500': '#237BFF',
          '600': '#396BC6',
        },
        'secondary':{
          '100': '#A0A0A0',
          '500':'#333333',
        }
      },
      minHeight:{
        'custome': 'calc(100vh - 135px)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
