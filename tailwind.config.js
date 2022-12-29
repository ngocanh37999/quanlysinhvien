/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      // ----------custom colors----------
      colors: {
        orange: '#ee4d2d'
      },
      // ----------custom keyframes và animation----------
      keyframes: {
        textAnimationKeyframesCustomOne: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '400%' }
        },
        textAnimationKeyframesCustomTwo: {
          to: { backgroundPosition: '100%' }
        },
        textAnimationKeyframesCustomThree: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' }
        }
      },
      animation: {
        textAnimationCustomOne: 'textAnimationKeyframesCustomOne 10s linear infinite',
        textAnimationCustomTwo: 'textAnimationKeyframesCustomTwo 2s infinite alternate forwards',
        textAnimationCustomThree: 'textAnimationKeyframesCustomThree 1s linear infinite'
      }
      // ----------custom keyframes và animation----------
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        },
        '.textAnimationOne': {
          background: 'linear-gradient(90deg, #ff0000, #ffff00, #ff00f3, #0033ff, #ff00c4, #ff0000)',
          backgroundSize: '400%',
          fontSize: '27px',
          fontWeight: '600',
          wordSpacing: '5px',
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text'
          // dùng như sau: className='textAnimationOne animate-textAnimationCustomOne'
        },
        '.textAnimationTwo': {
          textTransform: 'uppercase',
          backgroundImage: 'linear-gradient(to right, #00f260, #f79d00, #0575e6, #64f38c)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundSize: '300%',
          backgroundPosition: '0%'
          // dùng như sau: className='textAnimationTwo animate-textAnimationCustomTwo'
        },
        '.textAnimationThree': {
          width: '100%',
          lineHeight: '1',
          textTransform: 'capitalize',
          fontSize: '130px',
          textAlign: 'center',
          background: 'linear-gradient(to right top, red, yellow, blue)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
          // dùng như sau: className='textAnimationThree animate-textAnimationCustomThree'
        }
      })
    })
  ]
}
