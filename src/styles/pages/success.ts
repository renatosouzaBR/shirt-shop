import { styled } from "@/styles/stitches.config";

export const SuccessContainer = styled('main', {
  width: '100%',
  maxWidth: 1168,
  height: 656,
  margin: '0 auto',

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  h1: {
    fontSize: "3.2rem",
    fontWeight: 700,
    color: "$gray400"
  },

  span: {
    display: "block",
    marginTop: "3.2rem",
    fontSize: "2.4rem",
    fontWeight: 400,
    color: "$gray500",
    maxWidth: 590,
    textAlign: "center",

    strong: {
      fontWeight: 700
    }
  },

  a: {
    marginTop: "8.8rem",
    fontSize: "2rem",
    fontWeight: 700,
    color: "$green",
    textDecoration: "none",

    "&:hover": {
      color: "$greenLight",
    }
  }
})

export const ImageContainer = styled('div', {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  width: 127,
  height: 145,
  marginTop: "6.4rem",

  img: {
    objectFit: "cover"
  }
})