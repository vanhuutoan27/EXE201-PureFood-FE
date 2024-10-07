import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import { CreateUpdateReviewType, ReviewType } from "@/schemas/reviewSchema"

import pureAPI from "@/lib/pureAPI"

interface ReviewResponse {
  totalPages: number
  totalItems: number
  reviews: ReviewType[]
}

export const useGetAllReviews = (page: number, limit: number) => {
  return useQuery<ReviewResponse, Error>({
    queryKey: ["reviews", page, limit],
    queryFn: async () => {
      try {
        const response = await pureAPI.get("/reviews", {
          params: { page, limit }
        })
        const { success, message, data } = response.data
        const { totalPages, totalItems, items: reviews } = data

        if (success) {
          return { totalPages, totalItems, reviews }
        } else {
          toast.error(message)
          throw new Error(message)
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message
        toast.error(errorMessage)
        throw new Error(errorMessage)
      }
    },
    keepPreviousData: true,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useGetReviewsByProductId = (productId: string | undefined) => {
  return useQuery<ReviewType[], Error>({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/reviews/product/${productId}`)
        const { success, message, data } = response.data

        if (success) {
          return data
        } else {
          toast.error(message)
          throw new Error(message)
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message
        toast.error(errorMessage)
        throw new Error(errorMessage)
      }
    },
    enabled: !!productId,
    keepPreviousData: true,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useCreateReview = () => {
  const queryClient = useQueryClient()

  return useMutation<CreateUpdateReviewType, Error, CreateUpdateReviewType>(
    async (newReviewData) => {
      const response = await pureAPI.post("/reviews", newReviewData)
      const { success, message, data } = response.data

      if (success) {
        toast.success(message)
        return data
      } else {
        toast.error(message)
        throw new Error(message)
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("reviews")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}
