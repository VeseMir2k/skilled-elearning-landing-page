/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    fontSize: {
      headingXL: ['56px', { lineHeight: '70px', fontWeight: '800' }],
      headingL: ['40px', { lineHeight: '51px', fontWeight: '800' }],
      headingM: ['32px', { lineHeight: '40px', fontWeight: '800' }],
      headingS: ['24px', { lineHeight: '28px', fontWeight: '800' }],
      bodyM: ['18px', { lineHeight: '28px', fontWeight: '400' }],
      bodyS: ['16px', { lineHeight: '28px', fontWeight: '700' }],
    },
    backgroundImage: () => ({
      gradient_1: 'linear-gradient(180deg, rgba(255,111,72,1) 0%, rgba(240,42,166,1) 100%)',
      gradientHover_1: 'linear-gradient(180deg, rgba(255,111,72,.5) 0%, rgba(240,42,166,.5) 100%)',
      gradient_2: 'linear-gradient(180deg, rgba(72,81,255,1) 0%, rgba(240,42,166,1) 100%)',
      gradientHover_2: 'linear-gradient(180deg, rgba(72,81,255,.5) 0%, rgba(240,42,166,.5) 100%)',
    }),
    extend: {},
  },
  plugins: [],
};
