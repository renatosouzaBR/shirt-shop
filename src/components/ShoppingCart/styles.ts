import { styled } from "@/styles/stitches.config";

export const ShoppingCartContainer = styled('div', {})

export const ShoppingCartButton = styled('button', {
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
})

export const ShoppingCartSummary = styled('div', {
  width: '100%',
  maxWidth: '48rem',
  backgroundColor: '$gray800',
  padding: '7.2rem 4.8rem 4.8rem',

  display: 'flex',
  flexDirection: 'column',

  zIndex: 1,
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  transition: "all 0.2s ease-in",

  header: {
    position: "absolute",
    top: '2.4rem',
    right: '2.4rem',

    button: {
      border: 0,
      lineHeight: 0,
      backgroundColor: 'transparent',
      color: '$gray600',
      cursor: 'pointer',

      '&:hover': {
        opacity: 0.8
      }
    }
  },

  h3: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '$gray400',
    marginBottom: '3.2rem'
  },

  footer: {
    div: {
      display: 'flex',
      justifyContent:'space-between',
      alignItems: 'center',
      padding: '1rem 0',

      span: {
        fontSize: '1.8rem',
        fontWeight: '400',
        color: '$gray400',
      },

      strong: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '$gray400',
      }
    },
    
    button: {
      marginTop: '5rem',
      backgroundColor: '$green',
      border: 0,
      width: '100%',
      borderRadius: 8,
      padding: '2rem 3.2rem',
      color: '$white',
      fontSize: '1.8rem',
      fontWeight: '700',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '$greenLight',
      }
    }
  },

  variants: {
    show: {
      true: { 
        transform: "translateX(0%)",
        opacity: 1,
      },
      false: {
        transform: "translateX(110%)",
        opacity: 0, },
    },
  },
})

export const ShoppingCartProductContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'auto'
})

export const ShoppingCartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '2rem',
  marginBottom: '2.4rem',

  img: {
    objectFit: 'cover',
    width: 102,
    height: 94,
    borderRadius: 8,
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  },
  
  div: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.2rem 0',

    span: {
      fontSize: '1.8rem',
      fontWeight: '400',
      color: '$gray500',
    },

    strong: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '$gray400',
      margin: '1rem 0'
    },

    button: {
      marginTop: 'auto',
      fontSize: '1.6rem',
      fontWeight: '700',
      color: '$green',
      width: 'fit-content',
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',

      '&:hover': {
        color: '$greenLight',
      }
    }
  }
})