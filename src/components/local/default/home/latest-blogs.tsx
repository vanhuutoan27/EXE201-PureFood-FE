import { Link } from "react-router-dom"

import { BlogType } from "@/schemas/blogSchema"

import { Button } from "@/components/global/atoms/button"
import LazyImage from "@/components/global/molecules/lazy-image"

interface LatestBlogsProps {
  blogsData: BlogType[]
}

function LatestBlogs({ blogsData }: LatestBlogsProps) {
  return (
    <>
      <h2 className="mb-12 text-center text-3xl font-bold">Blog mới nhất</h2>

      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-3">
        {blogsData.slice(0, 3).map((blog) => (
          <div
            key={blog.blogId}
            className="overflow-hidden rounded-xl bg-white shadow-md"
          >
            <LazyImage
              src={`/placeholder.svg?height=200&width=300`}
              alt={blog.title}
              width={300}
              height={200}
              className="h-48 w-full select-none object-cover"
            />

            <div className="px-4 py-6">
              <Link to={`/kien-thuc/${blog.slug}`}>
                <h3 className="slow mb-2 text-lg font-semibold hover:text-primary">
                  {blog.title}
                </h3>
              </Link>

              <p className="lens min-h-[72px] text-gray-600">{blog.summary}</p>

              <Link
                to={`/kien-thuc/${blog.slug}`}
                className="mt-4 flex justify-end"
              >
                <Button type="button" variant="default">
                  Đọc thêm
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default LatestBlogs
