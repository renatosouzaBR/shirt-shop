import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from "stripe";

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

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product =>
        <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
          <ProductContainer className="keen-slider__slide">
            <Image src={product.imageURL} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.formattedPrice}</span>
            </footer>
          </ProductContainer>
        </Link>
      )}
      
    </HomeContainer>
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