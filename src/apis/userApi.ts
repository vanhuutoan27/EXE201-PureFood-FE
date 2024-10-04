import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import { CreateUserType, UserType } from "@/schemas/userSchema"

import pureAPI from "@/lib/pureAPI"

interface UsersResponse {
  totalPages: number
  totalItems: number
  users: UserType[]
}

export const useGetAllUsers = (
  page: number,
  limit: number,
  search?: string,
  status?: boolean
) => {
  return useQuery<UsersResponse, Error>({
    queryKey: ["users", page, limit, search, status],
    queryFn: async () => {
      try {
        const response = await pureAPI.get("/users", {
          params: { page, limit, search, status }
        })

        const { success, message, data } = response.data
        const { totalPages, totalItems, items: users } = data

        if (success) {
          return { totalPages, totalItems, users }
        } else {
          toast.error(message)
          throw new Error(message)
        }
      } catch (error: any) {
        const errorMessage = error.response.message
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

export const useGetUserById = (userId: string | undefined) => {
  return useQuery<UserType, Error>({
    queryKey: ["user", userId],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/users/${userId}`)
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
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation<CreateUserType, Error, CreateUserType>(
    async (newUser) => {
      try {
        const response = await pureAPI.post("/users", newUser)
        const { success, message, data } = response.data

        if (success) {
          toast.success(message)
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
        queryClient.invalidateQueries("users")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}


export const useChangeStatusUser = (userId: string) => {
  const queryClient = useQueryClient()

  return useMutation<UserType, Error, { status: boolean }>(
    async ({ status }) => {
      const response = await pureAPI.patch(`/users/${userId}/status`, {
        status
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
        queryClient.invalidateQueries("users")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}