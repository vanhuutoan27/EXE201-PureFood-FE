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
  const maxTagsToShow = 2
  const extraTagsCount = blog.tags.length - maxTagsToShow

  return (
    <div className="rounded-xl shadow-lg">
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="cursor-pointer select-none rounded-t-xl object-cover"
      />

      <div className="p-4">
        <Link
          to={`/blogs/${blog.slug}`}
          className="slow title-lens w-fit cursor-pointer text-lg font-semibold text-primary hover:text-secondary"
        >
          {blog.title}
        </Link>

        <p className="lens mt-1 text-sm font-medium text-secondary">
          {blog.summary}
        </p>

        <div className="mt-4 flex max-w-full flex-wrap gap-2 overflow-hidden">
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

        <div className="mt-4 flex items-center justify-between px-2">
          <p className="text-sm font-medium text-muted-foreground">
            Created at:{" "}
            <span className="font-semibold text-secondary">
              {formatDateDMY(blog.date)}
            </span>
          </p>

          <Link to={`/blogs/${blog.slug}`}>
            <Button type="button" variant="default">
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
