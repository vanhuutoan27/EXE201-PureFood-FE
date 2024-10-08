import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import { CreateOrderType, OrderType } from "@/schemas/orderSchema"

import pureAPI from "@/lib/pureAPI"

interface OrderResponse {
  totalPages: number
  totalItems: number
  orders: OrderType[]
}

export const useGetAllOrders = (
  page: number,
  limit: number,
  orderStatus?: string | null
) => {
  return useQuery<OrderResponse, Error>({
    queryKey: ["orders", page, limit, orderStatus],
    queryFn: async () => {
      try {
        const response = await pureAPI.get("/orders", {
          params: { page, limit, orderStatus }
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

export const useGetOrdersByUserId = (
  userId: string | undefined,
  page: number,
  limit: number
) => {
  return useQuery<OrderResponse, Error>({
    queryKey: ["orders", userId, page, limit],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/orders/user/${userId}`)
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
    enabled: !!userId,
    keepPreviousData: true,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useCreateOrder = () => {
  return useMutation<CreateOrderType, Error, CreateOrderType>(
    async (newOrderData) => {
      const response = await pureAPI.post("/orders", newOrderData)
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
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}

export const useCancelStatusOrder = (orderId: string) => {
  const queryClient = useQueryClient()

  return useMutation<OrderType, Error, { orderStatus: boolean }>(
    async ({ orderStatus }) => {
      const response = await pureAPI.patch(`/orders/${orderId}/cancel`, {
        orderStatus
      })
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
        queryClient.invalidateQueries("orders")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}
