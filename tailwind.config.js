module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'mobile': '375px',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'], 
      },
      fontWeight: {
        extrabold: '800',
        semibold: '600',
        medium: '500',
        regular: '400',
      },
      fontSize: {
        h0: ['24px', { lineHeight: '36px', letterSpacing: '0' }],
        h1: ['20px', { lineHeight: '30px', letterSpacing: '-1.5%' }],
        title1: ['18px', { lineHeight: '27px', letterSpacing: '-1.5%' }],
        title2: ['18px', { lineHeight: '27px', letterSpacing: '-1.5%' }],
        label1: ['16px', { lineHeight: '24px', letterSpacing: '-1.5%' }],
        label2: ['16px', { lineHeight: '24px', letterSpacing: '-1.5%' }],
        body1: ['14px', { lineHeight: '21px', letterSpacing: '-1.5%' }],
        body2: ['14px', { lineHeight: '21px', letterSpacing: '-1.5%' }],
        caption1: ['12px', { lineHeight: '18px', letterSpacing: '-1.5%' }],
        caption2: ['12px', { lineHeight: '18px', letterSpacing: '-1.5%' }],
      },
      colors: {
        primary: {
          blue: '#1B7BE8',
          darkBlue: '#0E4E97',
        },
        secondary: {
          emerald: '#00D5C4',
        },
        greyscale: {
          black: '#121212',
          white: '#FFFFFF',
          grey900: '#191F28',
          grey800: '#333D4B',
          grey700: '#4E5968',
          grey600: '#6B7684',
          grey500: '#8B95A1',
          grey400: '#B0BBC1',
          grey300: '#D1D6DB',
          grey200: '#E5E8EB',
          grey100: '#F2F4F6',
          grey50: '#F9FAFB',
        },
      },
    spacing: {
        screenMargin: '20px',
      },
    },
  },
  plugins: [],
}
