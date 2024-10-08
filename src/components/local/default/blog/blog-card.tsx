import { Calendar } from "lucide-react"
import { Link } from "react-router-dom"

import { BlogType } from "@/schemas/blogSchema"

import { capitalize, formatDateDMY } from "@/lib/utils"

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/global/atoms/avatar"
import { Badge } from "@/components/global/atoms/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/global/atoms/card"
import LazyImage from "@/components/global/molecules/lazy-image"

interface BlogCardProps {
  blogData: BlogType
}

function BlogCard({ blogData }: BlogCardProps) {
  return (
    <Card key={blogData.blogId} className="flex flex-col p-4">
      <CardHeader className="p-0 mb-4">
        <LazyImage
          src={blogData.image}
          alt={blogData.title}
          className="h-48 w-full select-none rounded-lg object-cover shadow-lg"
        />
      </CardHeader>

      <CardContent className="flex-grow space-y-2 p-0">
        <div className="flex items-center gap-2 pb-4">
          {blogData.tags &&
            blogData.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-white">
                {capitalize(tag)}
              </Badge>
            ))}

          {blogData.tags && blogData.tags.length > 2 && (
            <Badge variant="secondary" className="text-white">
              +{blogData.tags.length - 2} more
            </Badge>
          )}
        </div>

        <Link
          to={`/kien-thuc/${blogData.slug}`}
          className="text-lg font-semibold"
        >
          {blogData.title}
        </Link>
        <p className="text-gray-500">{blogData.summary}</p>
      </CardContent>

      <CardFooter className="p-0 pt-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={blogData.authorAvatar} alt={blogData.author} />
              <AvatarFallback>
                {blogData.authorName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <h4 className="cursor-pointer text-sm font-semibold">
              {blogData.authorName}
            </h4>
          </div>

          <p className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-2 h-4 w-4" />
            {formatDateDMY(blogData.createdAt)}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default BlogCard
