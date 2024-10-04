import { useState } from "react"

import { useLocation } from "react-router-dom"

import { useGetAllProducts } from "@/apis/productApi"

import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/product/columns"
import { DataTable } from "@/components/local/admin/product/data-table"

import Loading from "../Loading"

const INITIAL_PRODUCT_COUNT = 10

function Products() {
  const categoryUrl = useLocation().pathname.split("/")[3]
  const [visibleProducts] = useState(INITIAL_PRODUCT_COUNT)
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useGetAllProducts(
    currentPage,
    visibleProducts,
    undefined,
    categoryUrl,
    true
  )

  if (isLoading) {
    return <Loading />
  }

  const products = data?.products || []
  const totalPages = data?.totalPages || 1

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  return (
    <div>
      <AdminTitle
        title={categoryUrl === "rau-cu" ? "Quản lý Rau củ" : "Quản lý Trái cây"}
      />

      <DataTable columns={columns} data={products} />
    </div>
  )
}

export default Products
