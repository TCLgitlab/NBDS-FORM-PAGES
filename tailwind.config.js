/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A6B1F',
          dark: '#085315',
          light: '#8DB89A',
        },
        sage: {
          DEFAULT: '#8DB89A',
          light: '#C5D7C8',
        },
        mint: {
          DEFAULT: '#C5D7C8',
        },
        charcoal: '#3A3738',
        offwhite: '#F2F3F1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(58, 55, 56, 0.08)',
        'card': '0 8px 32px -8px rgba(58, 55, 56, 0.12)',
        'elevated': '0 12px 48px -12px rgba(58, 55, 56, 0.16)',
      },
    },
  },
  plugins: [],
}
