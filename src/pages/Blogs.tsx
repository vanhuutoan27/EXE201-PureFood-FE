import { sampleBlogData } from "@/constants/blogs"

import Bread from "@/components/global/molecules/bread"
import BlogList from "@/components/local/default/blog/blog-list"

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

      <BlogList blogsData={blogsData} />
    </div>
  )
}

export default Blogs
