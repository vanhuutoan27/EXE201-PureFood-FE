import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import { ProductType } from "@/schemas/productSchema"

import pureAPI from "@/lib/pureAPI"

interface ProductResponse {
  totalPages: number
  totalItems: number
  products: ProductType[]
}

export const useGetAllProducts = (
  page: number,
  limit: number,
  search?: string,
  category?: string,
  status?: boolean
) => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["products", page, limit, search, category, status],
    queryFn: async () => {
      try {
        const { data } = await pureAPI.get("/products", {
          params: { page, limit, search, status }
        })

        if (data.success) {
          const { totalPages, totalItems, items: products } = data.data
          return { totalPages, totalItems, products }
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

export const useGetProductsByCategory = (category: string) => {
  return useQuery<ProductType[], Error>({
    queryKey: ["products", category],
    queryFn: async () => {
      try {
        const { data } = await pureAPI.get("/products", {
          params: { category }
        })

        if (data.success) {
          return data.data.items
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
    enabled: !!category,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useGetProductsBySupplier = (supplierId: string) => {
  return useQuery<ProductType[], Error>({
    queryKey: ["products", supplierId],
    queryFn: async () => {
      try {
        const { data } = await pureAPI.get("/products", {
          params: { supplierId }
        })

        if (data.success) {
          return data.data.items
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
    enabled: !!supplierId,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useGetProductBySlug = (slug: string) => {
  return useQuery<ProductType, Error>({
    queryKey: ["product", slug],
    queryFn: async () => {
      try {
        const { data } = await pureAPI.get(`/products/${slug}`)

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
    enabled: !!slug,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation<ProductType, Error, ProductType>(
    async (product) => {
      const { data } = await pureAPI.post("/products", product)

      if (data.success) {
        return data.data
      } else {
        toast.error(data.message)
        throw new Error(data.message)
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}

export const useChangeStatusProduct = (productId: string) => {
  const queryClient = useQueryClient()

  return useMutation<ProductType, Error, { status: boolean }>(
    async ({ status }) => {
      const { data } = await pureAPI.patch(`/products/${productId}/status`, {
        status
      })

      if (data.success) {
        return data.data
      } else {
        toast.error(data.message)
        throw new Error(data.message)
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}
