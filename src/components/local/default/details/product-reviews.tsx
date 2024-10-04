import { useState } from "react"

import { defaultAvatar } from "@/configs/config"

import { useAuthContext } from "@/contexts/auth-context"

import { ReviewType } from "@/schemas/reviewSchema"

import { Button } from "@/components/global/atoms/button"
import { Textarea } from "@/components/global/atoms/textarea"
import LazyImage from "@/components/global/molecules/lazy-image"
import ReviewCard from "@/components/global/molecules/review-card"

interface ProductReviewsProps {
  reviews: ReviewType[]
}

function ProductReviews({ reviews }: ProductReviewsProps) {
  const { user } = useAuthContext()

  const [rating, setRating] = useState<number>(0)
  const [content, setContent] = useState<string>("")

  const handleStarClick = (i: number) => {
    setRating(i + 1)
  }

  const handleReviewSubmit = () => {
    console.log("Submitted review:", {
      rating,
      content
    })
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="flex gap-4">
        <LazyImage
          src={user?.avatar || defaultAvatar}
          alt={user?.fullName || "User Avatar"}
          className="size-12 rounded-full"
        />

        <div className="w-full space-y-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 cursor-pointer ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                onClick={() => handleStarClick(i)}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <Textarea
            rows={4}
            placeholder="Nhập đánh giá của bạn tại đây."
            className="w-full resize-none rounded-xl"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex w-full justify-end">
            <Button
              type="button"
              variant="default"
              className="mt-4"
              onClick={handleReviewSubmit}
            >
              Gửi đánh giá
            </Button>
          </div>
        </div>
      </div>

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
