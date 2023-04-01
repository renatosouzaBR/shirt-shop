import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "@/lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const product_id = req.query.product_id as string;

  if (!product_id) {
    return res.status(400).json({ error: "product_id is required" });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const product = await stripe.products.retrieve(product_id, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price;
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price.unit_amount! / 100)

  return res.status(200).json({ product: {
    id: product.id,
    name: product.name,
    imageURL: product.images[0],
    price: price.unit_amount! / 100,
    priceId: price.id,
    formattedPrice
  }})
}