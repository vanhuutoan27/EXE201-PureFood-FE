import { Bookmark, Heart, MessageCircle, Share } from "lucide-react"
import { useParams } from "react-router-dom"

import { formatDateDMY } from "@/lib/utils"

import { sampleBlogData } from "@/constants/blogs"

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/global/atoms/avatar"
import { Button } from "@/components/global/atoms/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/global/atoms/card"
import { Separator } from "@/components/global/atoms/separator"

import Loading from "./Loading"

function BlogDetails() {
  const { blogSlug } = useParams<{ blogSlug: string }>()
  const blogData = sampleBlogData.find((blog) => blog.slug === blogSlug)

  if (!blogData) return <Loading />

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">{blogData.title}</h2>
            <p className="text-sm text-muted-foreground">
              By {blogData.authorName} • Published on{" "}
              {formatDateDMY(blogData.createdAt)}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">
          Artificial Intelligence is revolutionizing the way we approach web
          development. From automated coding assistants to intelligent design
          systems, AI is reshaping the landscape of web creation...
        </p>
        <Button variant="link" className="px-0">
          Read more
        </Button>
      </CardContent>

      <Separator />

      <CardFooter className="justify-between">
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-5 w-5 text-muted-foreground" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default BlogDetails
