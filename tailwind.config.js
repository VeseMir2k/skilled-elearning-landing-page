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
      gradient_3: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,241,255,1) 100%)',
    }),
    colors: {
      white: 'rgba(256, 256, 256, 1)',
      indigo: 'rgba(102, 108, 163, 1)',
      navyBlue: 'rgba(19, 24, 63, 1)',
      grayishBlue: 'rgba(131, 134, 154, 1)',
      hotPink: 'rgba(247, 71, 128, 1)',
      lightPink: 'rgba(255, 167, 195, 1)',
    },
    extend: {
      flexBasis: {
        '1/2-minus-5': 'calc(50% - 5px)',
        '1/3-minus-15': 'calc(33.3333% - 15px)',
      },
    },
  },
  plugins: [],
};
