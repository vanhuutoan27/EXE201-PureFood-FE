import { Star } from "lucide-react"

import { ReviewType } from "@/schemas/reviewSchema"

interface CustomerFeedbackProps {
  reviewsData: ReviewType[]
}

function CustomerFeedback({ reviewsData }: CustomerFeedbackProps) {
  return (
    <div className="rounded-xl bg-green-50 px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Khách hàng của chúng tôi nói gì
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {reviewsData.slice(0, 3).map((review) => (
          <div
            key={review.reviewId}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <div className="mb-4 flex items-center">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-current text-yellow-400"
                />
              ))}
            </div>

            <p className="mb-4 text-gray-600">"{review.content}"</p>
            <p className="font-semibold">{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerFeedback
