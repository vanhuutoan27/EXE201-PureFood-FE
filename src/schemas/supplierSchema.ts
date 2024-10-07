import { z } from "zod"

export const supplierSchema = z.object({
  supplierId: z.string().nonempty({ message: "Mã nhà cung cấp là bắt buộc" }),
  supplierName: z
    .string()
    .nonempty({ message: "Vui lòng nhập tên nhà cung cấp" }),
  description: z.string().nonempty({ message: "Vui lòng nhập mô tả" }),
  address: z
    .string()
    .nonempty({ message: "Vui lòng nhập địa chỉ" })
    .min(20, { message: "Địa chỉ phải chứa ít nhất 20 ký tự" }),
  phoneNumber: z
    .string()
    .nonempty({ message: "Số điện thoại là bắt buộc" })
    .min(10, { message: "Số điện thoại phải có ít nhất 10 ký tự" }),
  status: z.boolean(),
  createdAt: z.string().nonempty({ message: "Ngày tạo là bắt buộc" }),
  createdBy: z.string().nonempty({ message: "Người tạo là bắt buộc" }),
  updatedAt: z.string().nonempty({ message: "Ngày cập nhật là bắt buộc" }),
  updatedBy: z.string().nonempty({ message: "Người cập nhật là bắt buộc" })
})

export type SupplierType = z.infer<typeof supplierSchema>
