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
  createdAt: z.string(),
  createdBy: z.string(),
  updatedAt: z.string(),
  updatedBy: z.string()
})

export type SupplierType = z.infer<typeof supplierSchema>
