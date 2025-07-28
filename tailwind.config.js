/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'wave-slow': 'wave 7s linear infinite',
        'wave-medium': 'wave 5s linear infinite',
        'wave-fast': 'wave 3s linear infinite',
        'ripple': 'ripple 2s ease-out infinite',
        'ripple-delayed': 'ripple 2s ease-out infinite 1s',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};