import { exampleBlogsData } from "@/constants/blogs"

import BlogCard from "@/components/local/blog/blog-card"

function Blogs() {
  const data = exampleBlogsData

  return (
    <div className="grid grid-cols-3 justify-between gap-x-10 gap-y-12">
      {data.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  )
}

export default Blogs
