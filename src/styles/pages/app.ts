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
    position: "relative",
    maxHeight: "4.8rem",

    "&:hover": {
      opacity: 0.8
    },

    span: {
      backgroundColor: '$green',
      color: '$white',

      width: "2.7rem",
      height: "2.7rem",
      borderRadius: "100%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: "1.4rem",
      fontWeight: "bold",
      border: "3px solid $gray900",

      position: "absolute",
      top: "-16%",
      right: "-20%",
    }
  }
})