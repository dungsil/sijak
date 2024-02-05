import forms from '@tailwindcss/forms'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  plugins: [
    forms({ strategy: 'base' }),
  ],
  theme: {
    fontFamily: {
      sans: ['"Pretendard Variable"', 'Pretendard', 'Pretendard fallback', ...fontFamily.sans],
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',
      current: 'currentColor',
      transparent: 'transparent',

      gray: {
        50: '#F9F9FA',
        100: '#F3F4F5',
        200: '#E5E7EA',
        300: '#D1D5DA',
        400: '#9CA4AF',
        500: '#677384',
        600: '#48566B',
        700: '#364150',
        800: '#222832',
        900: '#14181E',
        950: '#0C0E12',
      },
    },

    extend: {},
  },
} satisfies Partial<Config>
