import 'keen-slider/keen-slider.min.css'
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import { useKeenSlider } from 'keen-slider/react'
import { Handbag } from 'phosphor-react';

import { HomeContainer, ProductContainer } from "@/styles/pages/home";
import { stripe } from "@/lib/stripe";

interface HomeProps {
  products: {
    id: string
    name: string
    imageURL: string
    price: number,
    formattedPrice: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 1.8,
        spacing: 48,
      },
    }
  )

  function AddProductToShippingCart(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Home | Shirt Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product =>
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <ProductContainer className="keen-slider__slide">
              <Image src={product.imageURL} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.formattedPrice}</span>
                </div>

                <button onClick={AddProductToShippingCart}>
                  <Handbag size={32} />
                </button>
              </footer>
            </ProductContainer>
          </Link>
        )}
        
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount! / 100)

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: price.unit_amount! / 100,
      formattedPrice
    }
  })

  return {
    props: {
      products
    },
    revalidate: 20
  }
}