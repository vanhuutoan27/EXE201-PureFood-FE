import { z } from "zod"

export const paymentSchema = z.object({
  paymentId: z.string().nonempty({ message: "Mã thanh toán là bắt buộc" }),
  orderId: z.string().nonempty({ message: "Mã đơn hàng là bắt buộc" }),
  customerId: z.string().nonempty({ message: "Mã khách hàng là bắt buộc" }),
  customerName: z.string().nonempty({ message: "Tên khách hàng là bắt buộc" }),
  amount: z.coerce
    .number()
    .int({ message: "Giá phải là số nguyên" })
    .positive({ message: "Giá phải lớn hơn 0" }),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type PaymentType = z.infer<typeof paymentSchema>
