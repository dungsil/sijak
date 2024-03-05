import { dungsilPreset } from '@dungsil/tailwind'
import forms from '@tailwindcss/forms'

export default dungsilPreset({
  plugins: [
    forms({ strategy: 'base' }),
  ],
})
