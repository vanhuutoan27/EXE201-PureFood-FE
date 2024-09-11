import { BlogType } from "@/schemas/blogSchema"

import { formatDateDMY } from "@/lib/utils"

import Section from "@/components/global/organisms/section"

interface ProductBlogsProps {
  blogs: BlogType[]
}

function ProductBlogs({ blogs }: ProductBlogsProps) {
  return (
    <div>
      <Section
        title="Bài viết liên quan"
        description="Sản phẩm rau hữu cơ sạch, tươi ngon, an toàn cho sức khỏe, đạt chuẩn canh tác bền vững."
        button="Xem thêm"
        url="/product"
      />

      <div className="flex gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="h-[42vh] w-[36vh] rounded-lg border p-4 shadow-sm"
          >
            <div className="flex w-full flex-col gap-2">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[20vh] w-full cursor-pointer select-none rounded-md object-cover"
              />

              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-accent">
                  {formatDateDMY(blog.createdAt)}
                </p>
                <div className="cursor-pointer rounded-md border bg-secondary px-2 py-1 text-xs font-semibold text-gray-100">
                  {blog.type}
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="slow cursor-pointer font-semibold text-primary hover:text-accent hover:duration-300">
                  {blog.title}
                </h4>
                <p className="text-sm font-medium text-accent">
                  {blog.content.length > 100
                    ? `${blog.content.substring(0, 85)}...`
                    : blog.content}
                </p>
              </div>
              <div className="mt-2 text-right text-sm font-medium text-gray-500">
                {blog.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductBlogs
