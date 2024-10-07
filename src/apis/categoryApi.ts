import { useQuery } from "react-query"
import { toast } from "sonner"

import { CategoryType } from "@/schemas/categorySchema"

import pureAPI from "@/lib/pureAPI"

interface OrderResponse {
  totalPages: number
  totalItems: number
  categories: CategoryType[]
}

export const useGetAllOrders = () => {
  return useQuery<OrderResponse, Error>({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const response = await pureAPI.get("/categories")
        const { success, message, data } = response.data
        const { totalPages, totalItems, items: categories } = data

        if (success) {
          return { totalPages, totalItems, categories }
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
