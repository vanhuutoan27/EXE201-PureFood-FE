import { exampleBlogsData } from "@/constants/blogs"
import { exampleProductsData } from "@/constants/product"
import { exampleReviewsData } from "@/constants/reviews"

import CustomerFeedback from "@/components/local/home/customer-feedback"
import FeaturedProducts from "@/components/local/home/featured-products"
import HomeHero from "@/components/local/home/home-hero"
import LatestBlogs from "@/components/local/home/latest-blogs"

function Index() {
  const productsData = exampleProductsData
  const reviewsData = exampleReviewsData
  const blogsData = exampleBlogsData

  return (
    <div className="space-y-20">
      <HomeHero />
      <FeaturedProducts productsData={productsData} />
      <CustomerFeedback reviewsData={reviewsData} />
      <LatestBlogs blogsData={blogsData} />
    </div>
  )
}

export default Index
