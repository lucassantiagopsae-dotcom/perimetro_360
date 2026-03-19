/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        p: {
          100: '#F3E5F5', 200: '#E1BEE7', 300: '#CE93D8', 400: '#BA68C8',
          500: '#7F00B2', 600: '#8E24AA', 700: '#7B1FA2', 800: '#6A1B9A', 900: '#4A148C'
        },
        b: {
          100: '#E3F2FD', 200: '#BBDEFB', 300: '#2196F3', 400: '#42A5F5', 500: '#2196F3'
        }
      },
      animation: {
        'shimmer-slow': 'shimmer 4s linear infinite',
        'orb-drift': 'orb-drift 15s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'beam': 'spin 3s linear infinite',
      }
    }
  },
  plugins: [],
}
