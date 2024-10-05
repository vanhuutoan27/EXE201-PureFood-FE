import { BlogType } from "@/schemas/blogSchema"

import { Button } from "@/components/global/atoms/button"

import BlogCard from "./blog-card"

interface BlogListProps {
  blogsData: BlogType[]
}

function BlogList({ blogsData }: BlogListProps) {
  return (
    <div className="space-y-10">
      <div className="grid justify-between gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((blog) => (
          <BlogCard blogData={blog} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button type="button" variant="default">
          Xem thêm
        </Button>
      </div>
    </div>
  )
}

export default BlogList
