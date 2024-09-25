import { z } from "zod"

export const promotionSchema = z.object({
  promotionId: z.string().nonempty({ message: "Promotion ID is required" }),
  promotionName: z
    .string()
    .min(5, { message: "Promotion name must be at least 5 characters long" })
    .nonempty({ message: "Promotion name is required" }),
  description: z.string().optional(),
  discountCode: z.string().nonempty({ message: "Discount code is required" }),
  discountPercentage: z.coerce
    .number()
    .min(1, { message: "Discount must be at least 1%" })
    .max(100, { message: "Discount cannot exceed 100%" }),
  startDate: z.string().nonempty({ message: "Start date is required" }),
  endDate: z.string().nonempty({ message: "End date is required" }),
  status: z.boolean(),
  createdAt: z.string().nonempty({ message: "Created at is required" }),
  createdBy: z.string().nonempty({ message: "Created by is required" }),
  updatedAt: z.string().nonempty({ message: "Updated at is required" }),
  updatedBy: z.string().nonempty({ message: "Updated by is required" })
})

export type PromotionType = z.infer<typeof promotionSchema>
