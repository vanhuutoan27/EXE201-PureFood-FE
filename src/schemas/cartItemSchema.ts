import { z } from "zod"

export const cartItemSchema = z.object({
  cartItemId: z.string().nonempty({ message: "Không được bỏ trống" }),
  productId: z.array(z.string().nonempty({ message: "Không được bỏ trống" })),
  quantity: z.number().min(0, { message: "Số lượng phải lớn hơn 0" }),
  price: z.number().min(0, { message: "Giá phải lớn hơn 0" }),
  createdAt: z.string().nonempty({ message: "Không được bỏ trống" }),
  updatedAt: z.string().nonempty({ message: "Không được bỏ trống" })
})

export type CartItemType = z.infer<typeof cartItemSchema>
