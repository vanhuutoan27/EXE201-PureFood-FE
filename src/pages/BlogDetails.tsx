import { useState } from "react"

import { useParams } from "react-router-dom"

import { formatDateDMY, scrollToTop } from "@/lib/utils"

import { sampleBlogData } from "@/constants/blogs"

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/global/atoms/avatar"
import { Button } from "@/components/global/atoms/button"
import { Card, CardContent, CardHeader } from "@/components/global/atoms/card"
import { Separator } from "@/components/global/atoms/separator"

import Loading from "./Loading"

function BlogDetails() {
  const { blogSlug } = useParams<{ blogSlug: string }>()
  const blogData = sampleBlogData.find((blog) => blog.slug === blogSlug)

  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
    scrollToTop()
  }

  if (!blogData) return <Loading />

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
            <AvatarFallback>
              {blogData.authorName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div>
            <h2 className="cursor-pointer text-xl font-bold text-secondary">
              {blogData.title}
            </h2>
            <p className="text-sm text-gray-500">
              Bởi {blogData.authorName} - Đăng vào ngày{" "}
              {formatDateDMY(blogData.createdAt)}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {isExpanded ? (
          <div className="space-y-8 text-gray-500">
            <p>{blogData.summary}</p>
            <img
              src={blogData.image}
              alt={blogData.blogId}
              className="h-[500px] w-full select-none rounded-xl object-cover shadow-lg"
            />
            <p
              dangerouslySetInnerHTML={{
                __html: blogData.content
              }}
            />
          </div>
        ) : (
          <>
            <p
              className="text-gray-500"
              dangerouslySetInnerHTML={{
                __html: blogData.summary
              }}
            />
          </>
        )}

        <Button variant="link" className="mt-4 px-0" onClick={handleExpand}>
          {isExpanded ? "Thu gọn" : "Xem thêm"}
        </Button>
      </CardContent>

      <Separator className="my-4" />
    </Card>
  )
}

export default BlogDetails
