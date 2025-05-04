/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A9D8F',
          light: '#40916C',
          dark: '#1E6F65',
        },
        secondary: {
          DEFAULT: '#FF8A5C',
          light: '#FFB088',
          dark: '#E07A50',
        },
        neutral: {
          light: '#F8EDEB',
          dark: '#264653',
        },
        accent: '#F9C74F',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'leaf-pattern': "url('https://images.pexels.com/photos/4239043/pexels-photo-4239043.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};