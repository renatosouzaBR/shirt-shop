import { styled } from "@/styles/stitches.config";

export const AppContainer = styled('div', {
  width: '100%',
  height: '100vh'
})

export const Header = styled('header', {
  width: '100%',
  maxWidth: '1168px',
  padding: '4rem 1.6rem 3.2rem',
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',

  button: {
    padding: '1.2rem',
    borderRadius: 6,
    border: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray800',
    color: '$gray600',
    cursor: 'pointer',
    transition: "opacity 0.2s",

    "&:hover": {
      opacity: 0.8
    }
  }
})