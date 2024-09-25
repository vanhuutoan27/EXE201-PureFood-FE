import { exampleBlogsData } from "@/constants/blogs"

import BlogCard from "@/components/local/blog/blog-card"

function Blogs() {
  const blogsData = exampleBlogsData

  return (
    <div className="grid grid-cols-3 justify-between gap-x-10 gap-y-12">
      {blogsData.map((blog, index) => (
        <BlogCard key={index} blogsData={blog} />
      ))}
    </div>
  )
}

export default Blogs
