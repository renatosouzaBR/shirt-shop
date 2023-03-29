import { globalCss } from "@/styles/stitches.config";

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  'html' : {
    fontSize: '62.5%'
  },

  'body' : {
    backgroundColor: '$gray900',
    color: '$gray400',
    '--webkit-font-smoothing': 'antialiased',
  },

  'body, input, text-area, button' : {
    fontFamily: 'Robot, sans-serif',
    fontSize: '1.6rem',
    fontWeight: 400,
  },

  ':focus' : {
    outline: 'transparent !important',
    boxShadow: '0 0 0 1px $green'
  }
})