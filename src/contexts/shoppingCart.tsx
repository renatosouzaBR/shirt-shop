import React, { createContext, useContext, useReducer } from 'react'

type Product = {
  id: string
  name: string
  imageURL: string
  price: number
  priceId: string
  formattedPrice: string
}

interface ShoppingCartContextProps {
  products: Product[],
  addProductToShippingCart(product: Product): void
  removeProductFromShippingCart(productId: string): void
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

interface ShoppingCartProviderProps {
  children: React.ReactNode
}

enum ACTIONS_TYPE {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
}

interface ShoppingCartState {
  products: Product[]
}

function shoppingCartReducer(state: ShoppingCartState, action: any) {
  switch (action.type) {
    case ACTIONS_TYPE.ADD_PRODUCT_TO_CART: {
      const productAlreadyAdded = state.products.find(product => product.id === action.payload.product.id)

      if (productAlreadyAdded) {
        return state
      }

      const newProductsArray = [...state.products, action.payload.product]
      return {
        ...state,
        products: newProductsArray
      }
    }
    case ACTIONS_TYPE.REMOVE_PRODUCT_FROM_CART: {
      const arrayWithoutProduct = state.products.filter(product => product.id !== action.payload.productId)

      return {
        ...state,
        products: arrayWithoutProduct
      }
    }
    default:
      return state
  }
}

function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, {
    products: []
  })

  const { products } = shoppingCartState

  function addProductToShippingCart(product: Product) {
    dispatch({
      type: ACTIONS_TYPE.ADD_PRODUCT_TO_CART,
      payload: {
        product
      }
    })
  }

  function removeProductFromShippingCart(productId: string) {
    dispatch({
      type: ACTIONS_TYPE.REMOVE_PRODUCT_FROM_CART,
      payload: {
        productId
      }
    })
  }


  return (
    <ShoppingCartContext.Provider value={{ 
      products, 
      addProductToShippingCart,
      removeProductFromShippingCart
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export { ShoppingCartProvider, useShoppingCart }