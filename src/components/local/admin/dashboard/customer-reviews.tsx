import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/global/atoms/card"
import { Progress } from "@/components/global/atoms/progress"

interface CustomerReviewsProps {
  averageRating: number
  totalReviews: number
  ratingCounts: number[]
}

function CustomerReviews({
  averageRating,
  totalReviews,
  ratingCounts
}: CustomerReviewsProps) {
  return (
    <Card className="col-span-3 h-fit">
      <CardHeader className="p-0 pb-6">
        <CardTitle className="font-semibold">Đánh giá của khách hàng</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-none">Average Rating</p>
            <p className="text-sm font-medium leading-none">
              {averageRating.toFixed(1)} / 5.0
            </p>
          </div>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{star} Stars</p>
              </div>
              <Progress
                value={
                  totalReviews > 0
                    ? (ratingCounts[star - 1] / totalReviews) * 100
                    : 0
                }
                className="w-[60%]"
              />
              <p className="ml-2 text-sm text-muted-foreground">
                {totalReviews > 0
                  ? ((ratingCounts[star - 1] / totalReviews) * 100).toFixed(1)
                  : "0.0"}
                %
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerReviews
