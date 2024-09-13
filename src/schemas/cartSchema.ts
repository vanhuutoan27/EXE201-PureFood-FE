import { z } from "zod"

export const cartSchema = z.object({
  cartId: z.string().nonempty({ message: "Không được bỏ trống" }),
  userId: z.string().nonempty({ message: "Không được bỏ trống" }),
  productId: z.string().nonempty({ message: "Không được bỏ trống" }),
  createdAt: z.string().nonempty({ message: "Không được bỏ trống" }),
  updatedAt: z.string().nonempty({ message: "Không được bỏ trống" })
})

export type CartType = z.infer<typeof cartSchema>
