import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import { CreatePaymentType, PaymentType } from "@/schemas/paymentSchema"

import pureAPI from "@/lib/pureAPI"

interface PaymentResponse {
  totalPages: number
  totalItems: number
  payments: PaymentType[]
}

export const useGetAllPayments = (page: number, limit: number) => {
  return useQuery<PaymentResponse, Error>({
    queryKey: ["payments", page, limit],
    queryFn: async () => {
      try {
        const response = await pureAPI.get("/payments", {
          params: { page, limit }
        })
        const { success, message, data } = response.data
        const { totalPages, totalItems, items: payments } = data

        if (success) {
          return { totalPages, totalItems, payments }
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

export const useGetPaymentsByOrderId = (orderId: string | undefined) => {
  return useQuery<PaymentType[], Error>({
    queryKey: ["payments", orderId],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/payments/order/${orderId}`)
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
    enabled: !!orderId,
    keepPreviousData: true,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useCreatePayment = () => {
  const queryClient = useQueryClient()

  return useMutation<CreatePaymentType, Error, CreatePaymentType>(
    async (newPaymentData) => {
      const response = await pureAPI.post("/payments", newPaymentData)
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
        queryClient.invalidateQueries("payments")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}
