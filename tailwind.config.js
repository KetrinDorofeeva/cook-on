/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts}',
    './src/views/**/*.{vue,store,ts}',
    './src/components/**/*.{vue,store,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Orelega One']
      },
      boxShadow: {
        'header': '0 5px 20px rgba(0,0,0,.07)'
      },
      scale: {
        'opposite-side': '-1'
      },
      spacing: {
        'login-arrow': '23px'
      }
    },
  },
  plugins: [],
}

