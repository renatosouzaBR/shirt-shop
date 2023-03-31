import { useState } from "react";
import { Handbag, X } from "phosphor-react";
import Image from "next/image";

import shirt1 from '@/assets/shirts/shirt1.png';

import {
  ShoppingCartButton, 
  ShoppingCartContainer, 
  ShoppingCartProduct, 
  ShoppingCartProductContainer, 
  ShoppingCartSummary 
} from "./styles";

export function ShoppingCart() {
  const [showShoppingCartSummary, setShowShoppingCartSummary] = useState(false);

  function handleOpenSummary() {
    setShowShoppingCartSummary(true);
  }

  function handleCloseSummary() {
    setShowShoppingCartSummary(false);
  }

  return (
    <ShoppingCartContainer>
      <ShoppingCartButton onClick={handleOpenSummary}>
        <Handbag size={22} />
        <span>1</span>
      </ShoppingCartButton>

      <ShoppingCartSummary show={showShoppingCartSummary}>
        <header>
          <button onClick={handleCloseSummary}>
            <X weight="bold" size={24} />
          </button>
        </header>

        <h3>Sacola de compras</h3>

        <ShoppingCartProductContainer>
          <ShoppingCartProduct>
            <Image src={shirt1} alt="" />

            <div>
              <span>Camiseta beyonds the limits</span>
              <strong>$ 79,90</strong>
              <button>Remover</button>
            </div>
          </ShoppingCartProduct>
          <ShoppingCartProduct>
            <Image src={shirt1} alt="" />

            <div>
              <span>Camiseta beyonds the limits</span>
              <strong>$ 79,90</strong>
              <button>Remover</button>
            </div>
          </ShoppingCartProduct>
          <ShoppingCartProduct>
            <Image src={shirt1} alt="" />

            <div>
              <span>Camiseta beyonds the limits</span>
              <strong>$ 79,90</strong>
              <button>Remover</button>
            </div>
          </ShoppingCartProduct>
        </ShoppingCartProductContainer>

        <footer>
          <div>
            <span>Quantidade</span>
            <strong>3 itens</strong>
          </div>

          <div>
            <span>Valor total</span>
            <strong>R$ 270</strong>
          </div>

          <button>Finalizar compra</button>
        </footer>
      </ShoppingCartSummary>
    </ShoppingCartContainer>
  )
}