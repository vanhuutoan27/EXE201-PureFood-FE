import { useMutation } from "react-query"
import { toast } from "sonner"

import pureAPI from "@/lib/pureAPI"

interface VNPayRequest {
  orderType?: string
  amount: number
  orderDescription: string
  name?: string
}

export const useVNPay = () => {
  return useMutation(
    async (paymentData: VNPayRequest) => {
      const response = await pureAPI.post<string>("/VnPay", paymentData)
      return response.data
    },
    {
      onSuccess: (data) => {
        if (data) {
          window.location.href = data
        } else {
          toast.error("Failed to retrieve payment URL!")
        }
      },
      onError: (error: any) => {
        // Handle error logic
        toast.error("Payment failed!")
        console.error("Payment error:", error)
      }
    }
  )
}
