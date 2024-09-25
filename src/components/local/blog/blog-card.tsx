import { Link } from "react-router-dom"

import { formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"

interface BlogCardProps {
  blog: {
    title: string
    slug: string
    author: string
    date: string
    thumbnail: string
    summary: string
    content: string
    category: string
    tags: string[]
  }
}

function BlogCard({ blog }: BlogCardProps) {
  const maxTagsToShow = 1
  const extraTagsCount = blog.tags.length - maxTagsToShow

  return (
    <div className="space-y-4 rounded-xl border-2 p-4 shadow-lg">
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="cursor-pointer select-none rounded-lg object-cover"
      />

      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-secondary">
            {formatDateDMY(blog.date)}
          </p>
          <div className="flex max-w-full flex-wrap gap-2 overflow-hidden">
            {blog.tags.slice(0, maxTagsToShow).map((tag, index) => (
              <span
                key={index}
                className="cursor-pointer rounded-md bg-secondary px-2 py-1 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}

            {extraTagsCount > 0 && (
              <span className="cursor-pointer rounded-md bg-secondary px-2 py-1 text-xs font-medium text-white">
                +{extraTagsCount}
              </span>
            )}
          </div>
        </div>

        <Link
          to={`/blogs/${blog.slug}`}
          className="slow title-lens mt-2 w-fit cursor-pointer text-lg font-semibold text-primary hover:text-secondary"
        >
          {blog.title}
        </Link>

        <p className="lens text-sm font-medium text-secondary">
          {blog.summary}
        </p>

        <Link to={`/blogs/${blog.slug}`} className="mt-4 flex justify-end">
          <Button type="button" variant="default">
            Đọc thêm
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
