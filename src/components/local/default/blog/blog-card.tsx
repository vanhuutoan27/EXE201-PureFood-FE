import { Link } from "react-router-dom"

import { BlogType } from "@/schemas/blogSchema"

import { formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"

interface BlogCardProps {
  blogsData: BlogType
}

function BlogCard({ blogsData }: BlogCardProps) {
  const maxTagsToShow = 1
  const extraTagsCount = blogsData.tags.length - maxTagsToShow

  return (
    <div className="space-y-4 rounded-xl border-2 p-4 shadow-lg">
      <img
        src={blogsData.images?.[0]}
        alt={blogsData.title}
        className="cursor-pointer select-none rounded-lg object-cover"
      />

      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-secondary">
            {formatDateDMY(blogsData.createdAt)}
          </p>
          <div className="flex max-w-full flex-wrap gap-2 overflow-hidden">
            {blogsData.tags.slice(0, maxTagsToShow).map((tag, index) => (
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
          to={`/kien-thuc/${blogsData.slug}`}
          className="title-lens mt-2 w-fit cursor-pointer text-lg font-semibold text-primary"
        >
          {blogsData.title}
        </Link>

        <p className="lens text-sm font-medium text-secondary">
          {blogsData.summary}
        </p>

        <Link
          to={`/kien-thuc/${blogsData.slug}`}
          className="mt-4 flex justify-end"
        >
          <Button type="button" variant="default">
            Đọc thêm
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
