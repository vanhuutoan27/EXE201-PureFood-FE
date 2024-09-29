import { defaultAvatar } from "@/configs/config"

import { ReviewType } from "@/schemas/reviewSchema"

import LazyImage from "./lazy-image"

interface ReviewCardProps {
  review: ReviewType
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="border-b pb-4">
      <div className="mb-2 flex items-center gap-4">
        <LazyImage
          // src={review?.avatar || defaultAvatar}
          src={defaultAvatar}
          alt={review.author}
          className="size-12 rounded-full"
        />

        <div className="flex w-full justify-between">
          <div>
            <span className="cursor-pointer text-sm font-semibold">
              {review.author}
            </span>

            <div className="-ml-0.5 flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-sm"></p>
        </div>
      </div>

      <p className="text-gray-600">{review.content}</p>
    </div>
  )
}

export default ReviewCard
