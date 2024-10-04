import { sampleBlogData } from "@/constants/blogs"
import { sampleProductData } from "@/constants/products"
import { sampleReviewData } from "@/constants/reviews"

import CustomerFeedback from "@/components/local/default/home/customer-feedback"
import FeaturedProducts from "@/components/local/default/home/featured-products"
import HomeHero from "@/components/local/default/home/home-hero"
import LatestBlogs from "@/components/local/default/home/latest-blogs"

function Index() {
  const productsData = sampleProductData
  const reviewsData = sampleReviewData
  const blogsData = sampleBlogData

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
