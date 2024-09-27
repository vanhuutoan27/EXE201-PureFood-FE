import { ReviewType } from "@/schemas/reviewSchema"

import ReviewCard from "@/components/global/molecules/review-card"

interface ProductReviewsProps {
  reviews: ReviewType[]
}

function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold">Đánh giá của khách hàng</h3>

      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.reviewId} review={review} />
        ))}
      </div>
    </div>
  )
}

export default ProductReviews
