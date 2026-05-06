/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        lato: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FDF8F0',
        choco: {
          50:  '#FDF0E6',
          100: '#F5D5B8',
          200: '#E8B08A',
          300: '#D4845A',
          400: '#A0522D',
          500: '#6B3310',
          600: '#4D2209',
          700: '#2D1206',
          800: '#1A0B03',
        },
        rose: {
          brigadeiro: '#C9807A',
          light: '#E8C4C0',
        },
        gold: {
          brigadeiro: '#C4962A',
          light: '#E8C670',
          dark: '#A87820',
        },
      },
    },
  },
  plugins: [],
}
