import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "@/lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!priceId) {
    return res.status(400).json({ message: 'Price not found' })
  }

  const successURL = `${process.env.NEXT_URL}/success`
  const cancelURL = `${process.env.NEXT_URL}/`

  const stripeCheckout = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: successURL,
    cancel_url: cancelURL
  })

  return res.status(201).json({ checkoutURL: stripeCheckout.url })
}