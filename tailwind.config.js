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
        main: ["Niramit", "sans-serif"]
      },
      boxShadow: {
        'header': '0 5px 20px rgba(0,0,0,.07)',
        'card-main': '0 5px 20px rgba(0,0,0,.07)'
      },
      scale: {
        'opposite-side': '-1'
      },
      spacing: {
        'login-arrow': '23px'
      },
      colors: {
        'main': '#212121',
        'orange': '#F68B31',
        'category': '#FEDD6C',
        'category-hashtag': 'rgba(0,0,0,.5)',
        'more': 'rgba(33,33,33,.7)',
        'hr': 'rgba(237,237,237,.5)',
        'grade-star': 'rgba(33,33,33,.7)'
      },
      letterSpacing: {
        'main': '0.8px'
      },
      lineHeight: {
        'card-title': '26px',
        'card-text': '21px'
      },
      borderRadius: {
        'br-ten': '10px'
      },
      padding: {
        'category-hashtag-x': '9px',
        'category-hashtag-y': '6px'
      }
    },
  },
  plugins: [],
}

