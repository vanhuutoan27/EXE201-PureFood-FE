import { useState } from "react"

import { defaultAvatar } from "@/configs/config"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ClipLoader } from "react-spinners"

import { useAuthContext } from "@/contexts/auth-context"

import {
  CreateUpdateReviewType,
  createUpdateReviewSchema
} from "@/schemas/reviewSchema"

import { useCreateReview, useGetReviewsByProductId } from "@/apis/reviewApi"

import { Button } from "@/components/global/atoms/button"
import { Textarea } from "@/components/global/atoms/textarea"
import LazyImage from "@/components/global/molecules/lazy-image"
import ReviewCard from "@/components/global/molecules/review-card"

interface ProductReviewsProps {
  product: string
}

function ProductReviews({ product }: ProductReviewsProps) {
  const { user } = useAuthContext()

  const { data: reviewsData, isLoading } = useGetReviewsByProductId(product)

  const createReview = useCreateReview()

  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors }
  } = useForm<CreateUpdateReviewType>({
    resolver: zodResolver(createUpdateReviewSchema),
    defaultValues: {
      product: product,
      user: user?.userId,
      author: user?.fullName,
      rating: 0,
      comment: ""
    }
  })

  const onSubmit = async (data: CreateUpdateReviewType) => {
    setLoading(true)

    // console.log(JSON.stringify(data, null, 2))

    createReview.mutate(data, {
      onSettled: () => {
        setLoading(false)
      }
    })
  }

  // console.log(errors)

  const handleStarClick = (i: number) => {
    setValue("rating", i + 1)
  }

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <ClipLoader color="#00000" size={70} />
      </div>
    )
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
                  i < watch("rating") ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                onClick={() => handleStarClick(i)}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {errors.rating && (
            <p className="error-lens">{errors.rating.message}</p>
          )}

          <Textarea
            rows={4}
            placeholder="Nhập đánh giá của bạn tại đây."
            className="w-full resize-none rounded-xl"
            {...register("comment")}
          />

          {errors.comment && (
            <p className="error-lens">{errors.comment.message}</p>
          )}

          <div className="flex w-full justify-end">
            <Button
              disabled={loading}
              type="button"
              variant="default"
              className="mt-4"
              onClick={handleSubmit(onSubmit)}
            >
              {loading ? "Đang gửi..." : "Gửi đánh giá"}
            </Button>
          </div>
        </div>
      </div>

      <h3 className="mb-4 text-xl font-semibold">Đánh giá của khách hàng</h3>

      <div className="space-y-4">
        {!reviewsData?.length ? (
          <p className="mb-2 mt-6 font-semibold text-primary">
            Chưa có đánh giá nào cho sản phẩm này.
          </p>
        ) : (
          reviewsData?.map((review) => (
            <ReviewCard key={review.reviewId} review={review} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProductReviews
