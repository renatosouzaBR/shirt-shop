import { styled } from "@/styles/stitches.config";

export const ProductContainer = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  gap: '7.2rem',

  maxWidth: '1168px',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  width: "100%",
  minWidth: 576,
  height: 656,
  padding: "0.4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover"
  }
})

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',

  h1: {
    fontSize: "3.2rem",
    fontWeight: 700,
    color: "$gray500",
    marginTop: "2.6rem"
  },

  strong: {
    fontSize: "3.2rem",
    fontWeight: 400,
    color: "$greenLight",
    marginTop: '1.6rem'
  },

  span: {
    fontSize: "1.8rem",
    fontWeight: 400,
    color: "$gray500",
    marginTop: "4rem",
    lineHeight: "1.6"
  },

  button: {
    marginTop: "auto",
    width: "100%",
    borderRadius: 8,
    border: 0,
    backgroundColor: "$green",
    padding: "2rem 3.2rem",

    fontSize: "1.8rem",
    fontWeight: 700,
    color: "$white",
    cursor: "pointer",
    transition: "background-color 0.2s",

    '&:disabled': {
      opacity: 0.6,
      cursor: "not-allowed"
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$greenLight",
    }
  }
})