import { GetServerSideProps } from 'next';
import Link from 'next/link'
import Image from 'next/image';
import Stripe from 'stripe';

import { stripe } from '@/lib/stripe';
import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import Head from 'next/head';

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageURL: string
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Shirt Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <SuccessContainer>
        <h1>Compra Efetuada</h1>

        <ImageContainer>
          <Image src={product.imageURL} width={114} height={106} alt="" />
        </ImageContainer>

        <span>Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa. </span>

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
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageURL: product.images[0]
      }
    },
  }
}