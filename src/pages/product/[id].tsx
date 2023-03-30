import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import axios from 'axios'
import Image from "next/image";

import { stripe } from "@/lib/stripe";
import { DetailsContainer, ImageContainer, ProductContainer } from "@/styles/pages/product";
import Head from "next/head";

interface ProductProps {
  product: {
    id: string
    name: string
    imageURL: string
    price: number,
    formattedPrice: string,
    priceId: string,
    description: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCheckoutingProcessing, setIsCheckoutingProcessing] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCheckoutingProcessing(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.priceId,
      })

      const { checkoutURL } = response.data
      window.location.href = checkoutURL
    } catch (error) {
      setIsCheckoutingProcessing(false)
      alert('Não foi possível concluir o pagamento')
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
            onClick={handleBuyProduct}
            >
              Comprar agora
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
        imageURL: product.images[0],
        price: price.unit_amount! / 100,
        priceId: price.id,
        formattedPrice,
        description: product.description
      }
    },
    revalidate: 60 * 60 * 1 // 1hour
  }
}