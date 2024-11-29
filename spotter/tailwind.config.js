/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        flip: {
          '0%': { transform: 'perspective(600px) rotateY(0deg)' },
          '50%': { transform: 'perspective(600px) rotateY(180deg)' },
          '100%': { transform: 'perspective(600px) rotateY(360deg)' },
        },



      },
      animation: {
        'fade-in': 'fadeIn 3s ease-in-out',
        'flip': 'flip 20s infinite',

      },

    },

  },
  plugins: [],
}