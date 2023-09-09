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
        header: ["Orelega One", "sans-serif"],
      },
      boxShadow: {
        'header': '0 5px 20px rgba(0,0,0,.07)',
        'card-main': '0 5px 20px rgba(0,0,0,.07)'
      },
      colors: {
        'orange': '#F68B31',
        'category': '#FEDD6C',
        'category-hashtag': 'rgba(0,0,0,.5)',
        'more': 'rgba(0,0,0,.7)',
        'hr': 'rgba(237,237,237,.5)',
        'empty-field': '#F8F8F8',
        'inactive-button': '#F8F8F8'
      },
    },
  },
  plugins: [
      require("@tailwindcss/forms")
  ],
}