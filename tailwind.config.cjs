/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#05060f',
        'accent': '#7e5bef',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};