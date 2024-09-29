import { z } from "zod"

export const cartItemSchema = z.object({
  cartItemId: z.string().nonempty({ message: "Cart ID is required" }),
  product: z.string().nonempty({ message: "Product is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  productName: z.string().nonempty({ message: "Product name is required" }),
  price: z.number().min(1, { message: "Price must be at least 1" }),
  stock: z.number().min(1, { message: "Stock must be at least 1" }),
  weight: z.number().min(1, { message: "Weight must be at least 1" }),
  unit: z.string().nonempty({ message: "Unit is required" }),
  origin: z.string().nonempty({ message: "Origin is required" }),
  organic: z.boolean(),
  status: z.boolean()
})

export const createCartItemSchema = cartItemSchema.pick({
  product: true,
  quantity: true
})

export type CartItemType = z.infer<typeof cartItemSchema>
export type CreateCartItemType = z.infer<typeof createCartItemSchema>
