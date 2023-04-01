import { GetServerSideProps } from 'next';
import Link from 'next/link'
import Image from 'next/image';
import Stripe from 'stripe';

import { stripe } from '@/lib/stripe';
import { SuccessContainer, ImageContainer, ImagesArea } from "@/styles/pages/success";
import Head from 'next/head';

interface SuccessProps {
  customerName: string
  products: {
    id: string
    imageURL: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Shirt Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <SuccessContainer>
        <ImagesArea>
          {products.map(product => 
            <ImageContainer key={product.id}>
              <Image src={product.imageURL} width={114} height={106} alt="" />
            </ImageContainer>
          )}
        </ImagesArea>
          

        <h1>Compra Efetuada</h1> 

        <span>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
        </span>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = query.session_id as string;
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })
  
  const customerName = session.customer_details?.name
  const products = session.line_items?.data.map(item => {
    const product = item.price?.product as Stripe.Product

    return {
      id: product.id,
      imageURL: product.images[0]
    }
  })

  return {
    props: {
      customerName,
      products
    },
  }
}