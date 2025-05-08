/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A2342',
          50: '#E6EDF5',
          100: '#CDDCEB',
          200: '#9BB9D8',
          300: '#6997C4',
          400: '#3774B0',
          500: '#0A2342',
          600: '#091D36',
          700: '#07172B',
          800: '#05111F',
          900: '#030B14',
        },
        accent: {
          DEFAULT: '#E6C79C',
          50: '#FCF9F5',
          100: '#F9F3EB',
          200: '#F3E7D7',
          300: '#EDDBC3',
          400: '#E6C79C',
          500: '#DCB272',
          600: '#D29D49',
          700: '#BD8730',
          800: '#9A6F27',
          900: '#77561E',
        },
        tertiary: {
          DEFAULT: '#F7D4C0',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FEF7F4',
          400: '#F7D4C0',
          500: '#F1B18C',
          600: '#EB8E58',
          700: '#E56B24',
          800: '#BF5315',
          900: '#8C3D10',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  
  plugins: [
    
  ]
};