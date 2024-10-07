import { useMutation, useQuery, useQueryClient } from "react-query"
import { toast } from "sonner"

import {
  CreateProductType,
  ProductType,
  UpdateProductType
} from "@/schemas/productSchema"

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
        const response = await pureAPI.get("/products", {
          params: { page, limit, search, category, status }
        })
        const { success, message, data } = response.data
        const { totalPages, totalItems, items: products } = data

        if (success) {
          return { totalPages, totalItems, products }
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

export const useGetProductsByCategory = (
  category: string,
  page?: number,
  limit?: number
) => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["products", category, page, limit],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/products/category/${category}`, {
          params: { page, limit }
        })
        const { success, message, data } = response.data
        const { totalPages, totalItems, items: products } = data

        if (success) {
          return { totalPages, totalItems, products }
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
    enabled: !!category,
    keepPreviousData: true,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useGetProductsBySupplier = (
  supplier: string,
  page?: number,
  limit?: number
) => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["products", supplier, page, limit],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/products/supplier/${supplier}`, {
          params: { page, limit }
        })
        const { success, message, data } = response.data
        const { totalPages, totalItems, items: products } = data

        if (success) {
          return { totalPages, totalItems, products }
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
    enabled: !!supplier,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useGetProductBySlug = (slug: string | undefined) => {
  return useQuery<ProductType, Error>({
    queryKey: ["product", slug],
    queryFn: async () => {
      try {
        const response = await pureAPI.get(`/products/${slug}`)
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
    enabled: !!slug,
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}

export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation<CreateProductType, Error, CreateProductType>(
    async (product) => {
      const response = await pureAPI.post("/products", product)
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
      const response = await pureAPI.patch(`/products/${productId}/status`, {
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
        queryClient.invalidateQueries("products")
      },
      onError: (error: Error) => {
        toast.error(error.message)
      }
    }
  )
}

export const useUpdateProduct = (productId: string) => {
  const queryClient = useQueryClient()

  return useMutation<UpdateProductType, Error, UpdateProductType>({
    mutationFn: async (updatedProduct: UpdateProductType) => {
      try {
        const response = await pureAPI.put(
          `/products/${productId}`,
          updatedProduct
        )
        const { success, message, data } = response.data

        if (success) {
          toast.success(message)
          return data
        } else {
          toast.error(message)
          throw new Error(message)
        }
      } catch (error: any) {
        throw new Error(error.response.data.message)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries("products")
    },
    onError: (error: Error) => {
      toast.error(error.message)
    }
  })
}
