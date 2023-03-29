import { styled } from "@/styles/stitches.config";

export const HomeContainer = styled('div', {
  display: "flex",
  width: "100%",
  maxWidth: "calc(1168px + ((100vw - 1168px) / 2))",
  marginLeft: "auto",
  minHeight: "656px",
})

export const ProductContainer = styled('div', {
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.9)",
  borderRadius: 8,
  overflow: "hidden",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  cursor: "pointer",

  img : {
    objectFit: "cover"
  },

  footer: {
    background: "rgba(32, 32, 36, 0.9)",
    borderRadius: 6,
    padding: "3.2rem",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    position: "absolute",
    bottom: 4,
    left: 4,
    right: 4,

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong : {
      fontSize: "2rem",
      fontWeight: "700",
      color: "$gray400",
    },

    span : {
      fontSize: "2.4rem",
      fontWeight: "700",
      color: "$greenLight",
    }
  },

  "&:hover": { 
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    }
  }
})