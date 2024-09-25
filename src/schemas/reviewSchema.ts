import { z } from "zod"

export const reviewSchema = z.object({
  reviewId: z.string().nonempty({ message: "Review ID is required" }),
  product: z.string().nonempty({ message: "Product ID is required" }),
  user: z.string().nonempty({ message: "User ID is required" }),
  author: z.string().nonempty({ message: "Author is required" }),
  rating: z.coerce
    .number()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating cannot be greater than 5" }),
  content: z.string().nonempty({ message: "Content is required" }),
  flag: z.boolean().default(false),
  createdAt: z.string().nonempty({ message: "Created date is required" }),
  updatedAt: z.string().nonempty({ message: "Updated date is required" })
})

export const createUpdateReviewSchema = reviewSchema.omit({
  reviewId: true,
  createdAt: true,
  updatedAt: true
})

export type ReviewType = z.infer<typeof reviewSchema>
export type CreateUpdateReviewType = z.infer<typeof createUpdateReviewSchema>
