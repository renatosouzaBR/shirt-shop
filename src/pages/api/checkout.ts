import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "@/lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceIds } = req.body

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (priceIds?.length <= 0) {
    return res.status(400).json({ message: 'PriceIds not found' })
  }

  const successURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelURL = `${process.env.NEXT_URL}/`

  const lineItems = priceIds.map((id: string) => ({
    price: id,
    quantity: 1
  }))

  const stripeCheckout = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: successURL,
    cancel_url: cancelURL
  })

  return res.status(201).json({ checkoutURL: stripeCheckout.url })
}