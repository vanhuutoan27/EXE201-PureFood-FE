import { z } from "zod"

import { blogSchema } from "./blogSchema"

export const productSchema = z.object({
  productId: z.string().nonempty({ message: "Product Id is required" }),
  category: z.string().nonempty({ message: "Category is required" }),
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  price: z.number().min(1000, { message: "Price must be at least 1000" }),
  stock: z.number().min(1, { message: "Stock must be at least 1" }),
  weight: z.number().min(1, { message: "Weight must be at least 1" }),
  unit: z.string().nonempty({ message: "Unit is required" }),
  images: z.array(z.string()).nonempty({ message: "Images are required" }),
  blogs: z.array(blogSchema).optional(),
  origin: z.string().nonempty({ message: "Origin is required" }),
  organic: z.boolean(),
  status: z.boolean(),
  entryDate: z.string().nonempty({ message: "Entry date is required" }),
  expiryDate: z.string().nonempty({ message: "Expiry date is required" }),
  createdAt: z.string().nonempty({ message: "Created at is required" }),
  createdBy: z.string().nonempty({ message: "Created by is required" }),
  updatedAt: z.string().nonempty({ message: "Updated at is required" }),
  updatedBy: z.string().nonempty({ message: "Updated by is required" })
})

export const createProductSchema = productSchema.omit({
  productId: true,
  blogs: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true
})

export type ProductType = z.infer<typeof productSchema>
export type CreateProductType = z.infer<typeof createProductSchema>
