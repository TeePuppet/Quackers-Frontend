/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#010409',
        'accent': '#7e5bef',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};