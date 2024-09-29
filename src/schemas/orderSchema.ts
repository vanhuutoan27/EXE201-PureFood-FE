import { z } from "zod"

export const customerInfoSchema = z.object({
  firstName: z.string().nonempty({ message: "Họ là bắt buộc" }),
  lastName: z.string().nonempty({ message: "Tên là bắt buộc" }),
  phoneNumber: z.string().nonempty({ message: "Số điện thoại là bắt buộc" }),
  email: z
    .string()
    .nonempty({ message: "Email là bắt buộc" })
    .email({ message: "Email không hợp lệ" })
})

export const shippingAddressSchema = z.object({
  address: z.string().nonempty({ message: "Địa chỉ là bắt buộc" }),
  commune: z.string().nonempty({ message: "Phường/Xã là bắt buộc" }),
  district: z.string().nonempty({ message: "Quận/Huyện là bắt buộc" }),
  province: z.string().nonempty({ message: "Thành phố/Tỉnh là bắt buộc" })
})

export const OrderSummarySchema = z.object({
  items: z.array(
    z.object({
      productName: z.string().nonempty({ message: "Tên sản phẩm là bắt buộc" }),
      quantity: z.coerce
        .number()
        .int({ message: "Số lượng phải là số nguyên" })
        .positive({ message: "Số lượng phải lớn hơn 0" }),
      price: z.coerce
        .number()
        .int({ message: "Giá phải là số nguyên" })
        .positive({ message: "Giá phải lớn hơn 0" })
    })
  ),
  totalAmount: z.coerce
    .number()
    .int({ message: "Tổng số tiền phải là số nguyên" })
    .positive({ message: "Tổng số tiền phải lớn hơn 0" })
})

export const orderSchema = z.object({
  orderId: z.string().nonempty({ message: "Mã đơn hàng là bắt buộc" }),
  customerInfo: customerInfoSchema,
  shippingAddress: shippingAddressSchema,
  paymentMethod: z
    .string()
    .nonempty({ message: "Phương thức thanh toán là bắt buộc" }),
  orderSummary: OrderSummarySchema,
  orderStatus: z
    .string()
    .nonempty({ message: "Trạng thái đơn hàng là bắt buộc" }),
  createdAt: z.string().nonempty({ message: "Ngày tạo là bắt buộc" }),
  createdBy: z.string().nonempty({ message: "Người tạo là bắt buộc" }),
  updatedAt: z.string().nonempty({ message: "Ngày cập nhật là bắt buộc" }),
  updatedBy: z.string().nonempty({ message: "Người cập nhật là bắt buộc" })
})

export const createOrderSchema = orderSchema.omit({
  orderId: true,
  orderStatus: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true
})

export type CustomerInfoType = z.infer<typeof customerInfoSchema>
export type ShippingAddressType = z.infer<typeof shippingAddressSchema>
export type OrderSummaryType = z.infer<typeof OrderSummarySchema>
export type OrderType = z.infer<typeof orderSchema>
export type CreateOrderType = z.infer<typeof createOrderSchema>
