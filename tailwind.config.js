/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './src/modules/commons/components/**/*.{ts,tsx}',
    './src/modules/planets/components/**/*.{ts,tsx}',
    './src/modules/planet/components/**/*.{ts,tsx}',
    './src/modules/resident/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
