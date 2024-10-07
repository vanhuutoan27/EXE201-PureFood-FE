import { z } from "zod"

export const orderItemSchema = z.object({
  product: z.string().nonempty({ message: "Mã sản phẩm là bắt buộc" }),
  productName: z.string().nonempty({ message: "Vui lòng nhập tên sản phẩm" }),
  image: z.string().nonempty({ message: "Vui lòng thêm ảnh sản phẩm" }),
  quantity: z.coerce
    .number()
    .int({ message: "Số lượng phải là số nguyên" })
    .positive({ message: "Số lượng phải lớn hơn 0" }),
  price: z.coerce
    .number()
    .int({ message: "Giá phải là số nguyên" })
    .positive({ message: "Giá phải lớn hơn 0" })
})

export const createOrderItemSchema = orderItemSchema.omit({
  productName: true,
  image: true,
  price: true
})

export const orderSchema = z.object({
  orderId: z.string().nonempty({ message: "Mã đơn hàng là bắt buộc" }),
  user: z.string().nonempty({ message: "Mã người dùng là bắt buộc" }),
  fullName: z.string().nonempty({ message: "Vui lòng nhập họ và tên" }),
  phoneNumber: z.string().nonempty({ message: "Vui lòng nhập số điện thoại" }),
  email: z
    .string()
    .nonempty({ message: "Vui lòng nhập email" })
    .email({ message: "Email không hợp lệ" }),
  address: z.string().nonempty({ message: "Vui lòng nhập địa chỉ" }),
  commune: z.string().nonempty({ message: "Vui lòng chọn phường / xã" }),
  district: z.string().nonempty({ message: "Vui lòng chọn quận / huyện" }),
  province: z.string().nonempty({ message: "Vui lòng chọn tỉnh / thành phố" }),
  paymentMethod: z
    .string()
    .nonempty({ message: "Vui lòng chọn phương thức thanh toán" }),
  voucher: z.string().optional(),
  totalAmount: z.coerce
    .number()
    .int({ message: "Tổng số tiền phải là số nguyên" })
    .positive({ message: "Tổng số tiền phải lớn hơn 0" }),
  orderSummary: z.array(orderItemSchema),
  orderStatus: z
    .string()
    .nonempty({ message: "Trạng thái đơn hàng là bắt buộc" }),
  createdAt: z.string().nonempty({ message: "Ngày tạo là bắt buộc" }),
  updatedAt: z.string().nonempty({ message: "Ngày cập nhật là bắt buộc" })
})

export const createOrderSchema = z.object({
  fullName: z.string().nonempty({ message: "Vui lòng nhập họ và tên" }),
  phoneNumber: z.string().nonempty({ message: "Vui lòng nhập số điện thoại" }),
  email: z
    .string()
    .nonempty({ message: "Vui lòng nhập email" })
    .email({ message: "Email không hợp lệ" }),
  address: z.string().nonempty({ message: "Vui lòng nhập địa chỉ" }),
  commune: z.string().nonempty({ message: "Vui lòng chọn phường / xã" }),
  district: z.string().nonempty({ message: "Vui lòng chọn quận / huyện" }),
  province: z.string().nonempty({ message: "Vui lòng chọn tỉnh / thành phố" }),
  totalAmount: z.coerce
    .number()
    .int({ message: "Tổng số tiền phải là số nguyên" })
    .positive({ message: "Tổng số tiền phải lớn hơn 0" }),
  orderSummary: z.array(createOrderItemSchema),
  paymentMethod: z
    .string()
    .nonempty({ message: "Vui lòng chọn phương thức thanh toán" })
})

export type OrderItemType = z.infer<typeof orderItemSchema>
export type CreateOrderItemType = z.infer<typeof createOrderItemSchema>
export type OrderType = z.infer<typeof orderSchema>
export type CreateOrderType = z.infer<typeof createOrderSchema>
