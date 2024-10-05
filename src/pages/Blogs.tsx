import { sampleBlogData } from "@/constants/blogs"

import Bread from "@/components/global/molecules/bread"
import BlogCard from "@/components/local/default/blog/blog-card"

function Blogs() {
  const blogsData = sampleBlogData

  return (
    <div className="space-y-10">
      <Bread
        lastPage={{ name: "Trang chủ", url: "/" }}
        currentPage={{
          name: "Kiến Thức",
          url: "/kien-thuc"
        }}
      />

      <div className="grid grid-cols-3 justify-between gap-x-10 gap-y-12">
        {blogsData.map((blog) => (
          <BlogCard key={blog.blogId} blogData={blog} />
        ))}
      </div>
    </div>
  )
}

export default Blogs
