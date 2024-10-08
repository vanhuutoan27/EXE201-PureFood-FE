import { z } from "zod"

export const paymentSchema = z.object({
  paymentId: z.string(),
  order: z.string().nonempty({ message: "Mã đơn hàng là bắt buộc" }),
  customer: z.string().nonempty({ message: "Mã người dùng là bắt buộc" }),
  customerName: z.string().nonempty({ message: "Tên người dùng là bắt buộc" }),
  amount: z
    .number()
    .int()
    .positive({ message: "Số tiền phải là số nguyên dương" }),
  createdAt: z.string(),
  updatedAt: z.string()
})

export const createPaymentSchema = paymentSchema.omit({
  paymentId: true,
  createdAt: true,
  updatedAt: true
})

export type PaymentType = z.infer<typeof paymentSchema>
export type CreatePaymentType = z.infer<typeof createPaymentSchema>
