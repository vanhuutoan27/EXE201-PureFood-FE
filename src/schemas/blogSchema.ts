import { z } from "zod"

export const blogSchema = z.object({
  type: z.string().nonempty({ message: "Type is required" }),
  title: z.string().nonempty({ message: "Title is required" }),
  content: z.string().nonempty({ message: "Content is required" }),
  createdAt: z.string().nonempty({ message: "Created at is required" }),
  author: z.string().nonempty({ message: "Author is required" }),
  image: z.string().nonempty({ message: "Image is required" })
})

export type BlogType = z.infer<typeof blogSchema>
