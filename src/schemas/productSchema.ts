import { z } from "zod"

export const productSchema = z.object({
  productId: z.string().nonempty({ message: "Product Id is required" }),
  category: z.string().nonempty({ message: "Category is required" }),
  supplier: z.string().nonempty({ message: "Supplier is required" }),
  productName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name can't exceed 50 characters" })
    .nonempty({ message: "Name is required" }),
  slug: z.string().nonempty({ message: "Slug is required" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters long" }),
  price: z.number().min(10000, { message: "Price must be at least 10000" }),
  stock: z
    .number()
    .min(1, { message: "Stock must be at least 1" })
    .max(1000, { message: "Stock can't exceed 1000 units" }),
  weight: z
    .number()
    .min(0.1, { message: "Weight must be at least 0.1 kg" })
    .max(100, { message: "Weight can't exceed 100 kg" }),
  unit: z.string().refine((val) => ["kg", "gr", "lb", "oz"].includes(val), {
    message: "Unit must be one of the following: kg, gr, lb, oz"
  }),
  origin: z.string().nonempty({ message: "Origin is required" }),
  organic: z.boolean(),
  images: z
    .array(z.string().url({ message: "Invalid image URL format" }))
    .nonempty({ message: "At least one image is required" }),
  status: z.boolean(),
  entryDate: z.string().nonempty({ message: "Entry date is required" }),
  expiryDate: z.string().nonempty({ message: "Expiry date is required" }),
  createdAt: z.string().nonempty({ message: "Created at is required" }),
  createdBy: z.string().nonempty({ message: "Created by is required" }),
  updatedAt: z.string().nonempty({ message: "Updated at is required" }),
  updatedBy: z.string().nonempty({ message: "Updated by is required" })
})

export const createUpdateProductSchema = productSchema.omit({
  productId: true,
  slug: true,
  status: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true
})

export type ProductType = z.infer<typeof productSchema>
export type CreateUpdateProductType = z.infer<typeof createUpdateProductSchema>
