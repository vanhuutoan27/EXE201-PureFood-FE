import { BlogType } from "@/schemas/blogSchema"

import BlogCard from "../blog/blog-card"

interface LatestBlogsProps {
  blogsData: BlogType[]
}

function LatestBlogs({ blogsData }: LatestBlogsProps) {
  return (
    <>
      <h2 className="mb-12 text-center text-3xl font-bold">Blog mới nhất</h2>

      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-3">
        {blogsData.slice(0, 3).map((blog) => (
          <BlogCard blogData={blog} />
        ))}
      </div>
    </>
  )
}

export default LatestBlogs
