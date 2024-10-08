import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import { CreatePromotionType, PromotionType } from "@/schemas/promotionSchema"

import pureAPI from "@/lib/pureAPI"

interface PromotionResponse {
  totalPages: number
  totalItems: number
  promotions: PromotionType[]
}

export const useGetAllPromotions = (page: number, limit?: number) => {
  return useQuery<PromotionResponse, Error>({
    queryKey: ["promotions", page, limit],
    queryFn: async () => {
      try {
        const response = await pureAPI.get("/promotions", {
          params: { page, limit }
        })
        const { success, message, data } = response.data
        const { totalPages, totalItems, items: promotions } = data

        if (success) {
          return { totalPages, totalItems, promotions }
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

export const useGetPromotionById = (promotionId: string | undefined) => {
  return useQuery<PromotionType, Error>({
    queryKey: ["promotion", promotionId],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/promotions/${promotionId}`)
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
    enabled: !!promotionId,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useGetPromotionsByProductId = (productId: string | undefined) => {
  return useQuery<PromotionType[], Error>({
    queryKey: ["promotions", productId],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/promotions/product/${productId}`)
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

export const useCreatePromotion = () => {
  const queryClient = useQueryClient()

  return useMutation<CreatePromotionType, Error, CreatePromotionType>(
    async (newPromotionData) => {
      const response = await pureAPI.post("/promotions", newPromotionData)
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
        queryClient.invalidateQueries("promotions")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}

export const useUpdatePromotion = (promotionId: string) => {
  const queryClient = useQueryClient()

  return useMutation<CreatePromotionType, Error, CreatePromotionType>(
    async (updatedPromotionData) => {
      const response = await pureAPI.put(
        `/promotions/${promotionId}`,
        updatedPromotionData
      )
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
        queryClient.invalidateQueries("promotions")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}

export const useUpdateStatusPromotion = (promotionId: string) => {
  const queryClient = useQueryClient()

  return useMutation<PromotionType, Error>(
    async () => {
      const response = await pureAPI.patch(`/promotions/${promotionId}/status`)
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
        queryClient.invalidateQueries("promotions")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}
