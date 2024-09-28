import { z } from "zod"

export const reviewSchema = z.object({
  reviewId: z.string().nonempty({ message: "Mã đánh giá là bắt buộc" }),
  product: z.string().nonempty({ message: "Mã sản phẩm là bắt buộc" }),
  user: z.string().nonempty({ message: "Mã người dùng là bắt buộc" }),
  author: z.string().nonempty({ message: "Tác giả là bắt buộc" }),
  rating: z.coerce
    .number()
    .min(1, { message: "Xếp hạng phải ít nhất là 1" })
    .max(5, { message: "Xếp hạng không được vượt quá 5" }),
  content: z.string().nonempty({ message: "Nội dung đánh giá là bắt buộc" }),
  flag: z.boolean().default(false),
  createdAt: z.string().nonempty({ message: "Ngày tạo là bắt buộc" }),
  updatedAt: z.string().nonempty({ message: "Ngày cập nhật là bắt buộc" })
})

export const createUpdateReviewSchema = reviewSchema.omit({
  reviewId: true,
  createdAt: true,
  updatedAt: true
})

export type ReviewType = z.infer<typeof reviewSchema>
export type CreateUpdateReviewType = z.infer<typeof createUpdateReviewSchema>
