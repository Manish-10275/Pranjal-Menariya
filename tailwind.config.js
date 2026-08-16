/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070707',
          card: '#111111',
          cardHover: '#181818',
          border: '#242424',
          yellow: '#FFC400',
          yellowHover: '#E6B000',
          purple: '#7C3AED',
          purpleDark: '#4C1D95',
          magenta: '#C026D3',
          gray: '#A7A7A7',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'Bebas Neue', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(124, 58, 237, 0.25) 0%, rgba(7, 7, 7, 0.95) 75%)',
        'cta-gradient': 'linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(7, 7, 7, 0.95) 50%, rgba(255, 196, 0, 0.2) 100%)',
      },
      boxShadow: {
        'yellow-glow': '0 0 25px rgba(255, 196, 0, 0.3)',
        'purple-glow': '0 0 30px rgba(124, 58, 237, 0.3)',
      }
    },
  },
  plugins: [],
};
