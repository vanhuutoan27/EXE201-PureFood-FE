import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import { CartItemType } from "@/schemas/cartItemSchema"
import { CreateCartType } from "@/schemas/cartSchema"

import pureAPI from "@/lib/pureAPI"

interface CartItemsResponse {
  totalPages: number
  totalItems: number
  cartItems: CartItemType[]
}

export const useGetAllCartItems = (
  userId: string | undefined,
  page: number,
  limit: number | null
) => {
  return useQuery<CartItemsResponse, Error>({
    queryKey: ["cartItems", userId, page, limit],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/cart-items/${userId}`, {
          params: { page, limit }
        })
        const { success, message, data: cartItems } = response.data

        if (success) {
          return cartItems
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

export const useCreateCart = () => {
  const queryClient = useQueryClient()

  return useMutation<CreateCartType, Error, CreateCartType>(
    async (newCart) => {
      try {
        const response = await pureAPI.post("/carts", newCart)
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
    {
      onSuccess: () => {
        queryClient.invalidateQueries("carts")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}

export const useUpdateQuantityCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, { cartItemId: string; quantity: number }>(
    async ({ cartItemId, quantity }) => {
      try {
        const response = await pureAPI.put(`/cart-items/${cartItemId}`, {
          params: { quantity }
        })
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
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cartItems")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, { cartItemId: string }>(
    async ({ cartItemId }) => {
      try {
        const response = await pureAPI.delete(`/cart-items/${cartItemId}`)
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
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cartItems")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}
