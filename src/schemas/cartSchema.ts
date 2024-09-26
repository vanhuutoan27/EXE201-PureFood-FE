import { z } from "zod"

import { cartItemSchema } from "./cartItemSchema"

export const cartSchema = z.object({
  cartId: z.string().nonempty({ message: "Cart Id is required" }),
  user: z.string().nonempty({ message: "User is required" }),
  cartItems: z.array(cartItemSchema)
})

export const createCartSchema = cartSchema.omit({
  cartId: true
})

export type CartType = z.infer<typeof cartSchema>
export type CreateCartType = z.infer<typeof createCartSchema>
