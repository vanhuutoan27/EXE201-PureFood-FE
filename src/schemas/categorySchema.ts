import { z } from "zod"

export const categorySchema = z.object({
  categoryId: z.string().nonempty({ message: "Mã danh mục là bắt buộc" }),
  categoryName: z.string().nonempty({ message: "Vui lòng nhập tên danh mục" }),
  description: z.string().nonempty({ message: "Vui lòng nhập mô tả" }),
  createdAt: z.string().nonempty({ message: "Ngày tạo là bắt buộc" }),
  createdBy: z.string().nonempty({ message: "Người tạo là bắt buộc" }),
  updatedAt: z.string().nonempty({ message: "Ngày cập nhật là bắt buộc" }),
  updatedBy: z.string().nonempty({ message: "Người cập nhật là bắt buộc" })
})

export type CategoryType = z.infer<typeof categorySchema>
