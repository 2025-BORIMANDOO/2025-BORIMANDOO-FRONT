module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
        h0: ['24px', '36px'],
        h1: ['20px', '30px'],
        title1: ['18px', '27px'],
        title2: ['18px', '27px'],
        label1: ['16px', '24px'],
        label2: ['16px', '24px'],
        body1: ['14px', '21px'],
        body2: ['14px', '21px'],
        caption1: ['12px', '18px'],
        caption2: ['12px', '18px'],
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
    },
  },
  plugins: [],
}
