import { z } from "zod"

export const blogSchema = z.object({
  blogId: z.string().nonempty({ message: "Blog Id is required" }),
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title can't exceed 100 characters" })
    .nonempty({ message: "Title is required" }),
  slug: z.string().nonempty({ message: "Slug is required" }),
  summary: z.string().nonempty({ message: "Summary is required" }),
  content: z
    .string()
    .min(50, { message: "Content must be at least 50 characters long" })
    .nonempty({ message: "Content is required" }),
  author: z.string().nonempty({ message: "Author is required" }),
  tags: z
    .array(z.string())
    .nonempty({ message: "At least one tag is required" }),
  images: z
    .array(z.string().url({ message: "Invalid image URL format" }))
    .optional(),
  status: z.boolean(),
  createdAt: z.string().nonempty({ message: "Created at is required" }),
  createdBy: z.string().nonempty({ message: "Created by is required" }),
  updatedAt: z.string().nonempty({ message: "Updated at is required" }),
  updatedBy: z.string().nonempty({ message: "Updated by is required" })
})

export const createUpdateBlogSchema = blogSchema.omit({
  blogId: true,
  slug: true,
  status: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true
})

export type BlogType = z.infer<typeof blogSchema>
export type CreateUpdateBlogType = z.infer<typeof createUpdateBlogSchema>
