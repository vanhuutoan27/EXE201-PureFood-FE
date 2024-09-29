import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import { CartItemType } from "@/schemas/cartItemSchema"
import { CreateCartType } from "@/schemas/cartSchema"

import pureAPI from "@/lib/pureAPI"

export const useGetAllCartItems = (userId: string) => {
  return useQuery<CartItemType[], Error>({
    queryKey: ["cartItems", userId],
    queryFn: async () => {
      try {
        const { data } = await pureAPI.get(`/carts/${userId}`)

        if (data.success) {
          return data.data
        } else {
          toast.error(data.message)
          throw new Error(data.message)
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

export const useCreateCart = () => {
  const queryClient = useQueryClient()

  return useMutation<CreateCartType, Error, CreateCartType>(
    async (newCart) => {
      try {
        const { data } = await pureAPI.post("/carts", newCart)

        if (data.success) {
          return data.data
        } else {
          toast.error(data.message)
          throw new Error(data.message)
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

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, { cartItemId: string }>(
    async ({ cartItemId }) => {
      try {
        const { data } = await pureAPI.delete(`/cart-items/${cartItemId}`)

        if (data.success) {
          return
        } else {
          toast.error(data.message)
          throw new Error(data.message)
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
