/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts}',
    './src/views/**/*.{vue,store,ts}',
    './src/components/**/*.{vue,store,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

