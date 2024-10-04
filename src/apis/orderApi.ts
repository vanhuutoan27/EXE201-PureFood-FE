import { useQuery } from "react-query"
import { toast } from "sonner"

import { OrderType } from "@/schemas/orderSchema"

import pureAPI from "@/lib/pureAPI"

interface OrderResponse {
  totalPages: number
  totalItems: number
  orders: OrderType[]
}

export const useGetAllOrders = (page: number, limit: number) => {
  return useQuery<OrderResponse, Error>({
    queryKey: ["orders", page, limit],
    queryFn: async () => {
      try {
        const response = await pureAPI.get("/orders", {
          params: { page, limit }
        })
        const { success, message, data } = response.data
        const { totalPages, totalItems, items: orders } = data

        if (success) {
          return { totalPages, totalItems, orders }
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
