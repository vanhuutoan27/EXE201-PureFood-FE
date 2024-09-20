import { z } from "zod"

export const cartSchema = z.object({
  cartId: z.string().nonempty({ message: "Cart Id is required" }),
  userId: z.string().nonempty({ message: "User Id is required" }),
  productId: z.string().nonempty({ message: "Product Id is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  price: z.number().min(1000, { message: "Price must be at least 1000" })
})

export const createCartSchema = cartSchema.omit({
  cartId: true
})

export type CartType = z.infer<typeof cartSchema>
export type CreateCartType = z.infer<typeof createCartSchema>
