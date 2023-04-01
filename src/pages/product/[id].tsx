import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import Image from "next/image";

import { stripe } from "@/lib/stripe";
import { DetailsContainer, ImageContainer, ProductContainer } from "@/styles/pages/product";
import Head from "next/head";
import { useShoppingCart } from "@/contexts/shoppingCart";
import { useRouter } from "next/router";

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    imageURL: string
    price: number
    priceId: string,
    formattedPrice: string
  }
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();
  const { addProductToShippingCart } = useShoppingCart();
  const [isCheckoutingProcessing, setIsCheckoutingProcessing] = useState(false)

  async function handleAddProductToShoppingCart() {
    try {
      setIsCheckoutingProcessing(true)
      addProductToShippingCart(product)
      router.push('/')
    } catch (error) {
      setIsCheckoutingProcessing(false)
      alert('Não foi adicionar o produto no carrinho')
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Shirt Shop</title>
      </Head>
      
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageURL} width={520} height={480} alt="" />
        </ImageContainer>

        <DetailsContainer>
          <h1>{product.name}</h1>
          <strong>{product.formattedPrice}</strong>
          <span>{product.description}</span>

          <button
            disabled={isCheckoutingProcessing} 
            onClick={handleAddProductToShoppingCart}
            >
              Colocar na sacola
          </button>
        </DetailsContainer>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  // Buscar os produtos mais acessados
  return {
    paths: [
      { params: { id: 'prod_NcEI7OVpgsxpJc' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id as string;
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price;
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price.unit_amount! / 100)

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageURL: product.images[0],
        price: price.unit_amount! / 100,
        priceId: price.id,
        formattedPrice
      }
    },
    revalidate: 60 * 60 * 1 // 1hour
  }
}