import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      green: '#00875F',
      greenLight: '#00B37E',
      gray900: '#121214',
      gray800: '#202024',
      gray500: '#C4C4CC',
      gray400: '#E1E1E6',
      white: '#FFFFFF'
    }
  }
})