import { useQuery } from "react-query"
import { toast } from "sonner"

import { SupplierType } from "@/schemas/supplierSchema"

import pureAPI from "@/lib/pureAPI"

interface UsersResponse {
  totalPages: number
  totalItems: number
  suppliers: SupplierType[]
}

export const useGetAllUsers = (
  page: number,
  limit: number,
  search?: string,
  status?: boolean
) => {
  return useQuery<UsersResponse, Error>({
    queryKey: ["suppliers", page, limit, search, status],
    queryFn: async () => {
      try {
        const { data } = await pureAPI.get("/suppliers", {
          params: { page, limit, search, status }
        })

        if (data.success) {
          const { totalPages, totalItems, items: suppliers } = data.data
          return { totalPages, totalItems, suppliers }
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
