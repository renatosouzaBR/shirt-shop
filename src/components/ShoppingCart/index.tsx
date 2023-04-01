import { useState } from "react";
import { Handbag, X } from "phosphor-react";
import Image from "next/image";
import axios from "axios";

import { useShoppingCart } from "@/contexts/shoppingCart";

import {
  ShoppingCartButton, 
  ShoppingCartContainer, 
  ShoppingCartProduct, 
  ShoppingCartProductContainer, 
  ShoppingCartSummary 
} from "./styles";

export function ShoppingCart() {
  const { products, removeProductFromShippingCart } = useShoppingCart()

  const [isCheckoutingProcessing, setIsCheckoutingProcessing] = useState(false)
  const [showShoppingCartSummary, setShowShoppingCartSummary] = useState(false);
  const amount = products.reduce((acc, product) => acc += product.price, 0)
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)

  function handleOpenSummary() {
    setShowShoppingCartSummary(true);
  }

  function handleCloseSummary() {
    setShowShoppingCartSummary(false);
  }

  async function handleBuyProducts() {
    try {
      setIsCheckoutingProcessing(true)

      const response = await axios.post('/api/checkout', {
        priceIds: products.map(product => product.priceId),
      })

      const { checkoutURL } = response.data
      window.location.href = checkoutURL
    } catch (error) {
      setIsCheckoutingProcessing(false)
      alert('Não foi possível finalizar a compra. Tente novamente!')
    }
  }

  return (
    <ShoppingCartContainer>
      <ShoppingCartButton onClick={handleOpenSummary}>
        <Handbag size={22} />
        {products.length > 0 && <span>{products.length}</span>}
      </ShoppingCartButton>

      <ShoppingCartSummary show={showShoppingCartSummary}>
        <header>
          <button onClick={handleCloseSummary}>
            <X weight="bold" size={24} />
          </button>
        </header>

        {products.length <= 0 ?
          <h2>Sua sacola está vazia.</h2> :
          <>
            <h3>Sacola de compras</h3>

            <ShoppingCartProductContainer>
              {products.map(product => 
                <ShoppingCartProduct key={product.id}>
                  <Image src={product.imageURL} alt="" width={102} height={94} />

                  <div>
                    <span>{product.name}</span>
                    <strong>{product.formattedPrice}</strong>
                    <button onClick={() => removeProductFromShippingCart(product.id)}>
                      Remover
                    </button>
                  </div>
                </ShoppingCartProduct>
              )}
            </ShoppingCartProductContainer>

            <footer>
              <div>
                <span>Quantidade</span>
                <strong>{products.length} itens</strong>
              </div>

              <div>
                <span>Valor total</span>
                <strong>{formattedAmount}</strong>
              </div>

              <button onClick={handleBuyProducts} disabled={isCheckoutingProcessing}>
                Finalizar compra
              </button>
            </footer>
          </>
        }
      </ShoppingCartSummary>
    </ShoppingCartContainer>
  )
}