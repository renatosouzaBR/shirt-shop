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
})