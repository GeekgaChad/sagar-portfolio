/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Targets your page.js and layout.js
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // For future project components
  ],
  theme: {
    extend: {
      colors: {
        'sagar-dark': '#121212', 
        'sagar-accent': '#FFFFFF',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'], 
      },
    },
  },
  plugins: [],
}