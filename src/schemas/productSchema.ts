import { z } from "zod"

export const productSchema = z.object({
  productId: z.string().nonempty({ message: "Mã sản phẩm là bắt buộc" }),
  category: z.string().nonempty({ message: "Vui lòng chọn loại sản phẩm" }),
  supplier: z.string().nonempty({ message: "Vui lòng chọn nhà cung cấp" }),
  productName: z
    .string()
    .nonempty({ message: "Vui lòng chọn tên sản phẩm" })
    .min(3, { message: "Tên sản phẩm phải có ít nhất 3 ký tự" })
    .max(50, { message: "Tên sản phẩm không được vượt quá 50 ký tự" }),
  foodName: z
    .string()
    .nonempty({ message: "Vui lòng chọn tên sản phẩm tiếng anh" })
    .min(3, { message: "Tên thực phẩm phải có ít nhất 3 ký tự" })
    .max(50, { message: "Tên thực phẩm không được vượt quá 50 ký tự" }),
  slug: z.string().nonempty({ message: "Slug là bắt buộc" }),
  description: z
    .string()
    .min(20, { message: "Mô tả phải có ít nhất 20 ký tự" }),
  stock: z.coerce
    .number()
    .min(1, { message: "Số lượng tồn kho phải ít nhất là 1" })
    .max(1000, { message: "Số lượng tồn kho không được vượt quá 1.000" }),
  weight: z.coerce
    .number()
    .positive({ message: "Khối lượng phải là số dương" }),
  // .min(0.1, { message: "Khối lượng phải ít nhất là 0.1 kg" }),
  // .max(100, { message: "Khối lượng không được vượt quá 100 kg" }),
  unit: z.string().refine((val) => ["Kg", "Gr"].includes(val), {
    message: "Đơn vị phải là một trong các giá trị: Kg, Gr"
  }),
  price: z.coerce.number().min(5000, { message: "Giá phải ít nhất là 5.000" }),
  origin: z.string().nonempty({ message: "Vui lòng chọn nơi nhập" }),
  organic: z.boolean(),
  images: z
    .array(z.string().url({ message: "URL hình ảnh không hợp lệ" }))
    .optional(),
  status: z.boolean(),
  entryDate: z.string().nonempty({ message: "Vui lòng nhập ngày nhập" }),
  expiryDate: z.string().nonempty({ message: "Vui lòng nhập ngày hết hạn" }),
  createdAt: z.string().nonempty({ message: "Ngày tạo là bắt buộc" }),
  createdBy: z.string().nonempty({ message: "Người tạo là bắt buộc" }),
  updatedAt: z.string().nonempty({ message: "Ngày cập nhật là bắt buộc" }),
  updatedBy: z.string().nonempty({ message: "Người cập nhật là bắt buộc" })
})

export const createProductSchema = productSchema.omit({
  productId: true,
  slug: true,
  status: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true
})

export const updateProductSchema = productSchema.omit({
  productId: true,
  foodName: true,
  slug: true,
  images: true,
  status: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true
})

export type ProductType = z.infer<typeof productSchema>
export type CreateProductType = z.infer<typeof createProductSchema>
export type UpdateProductType = z.infer<typeof updateProductSchema>
