import { useState } from "react"

import { useLocation } from "react-router-dom"

import { useGetProductsByCategory } from "@/apis/productApi"

import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/product/columns"
import { DataTable } from "@/components/local/admin/product/data-table"

import Loading from "../Loading"

const INITIAL_PRODUCT_COUNT = 10

function Products() {
  const categoryUrl = useLocation().pathname.split("/")[3]
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleProducts] = useState(INITIAL_PRODUCT_COUNT)

  const { data: productsData, isLoading } = useGetProductsByCategory(
    categoryUrl,
    currentPage,
    visibleProducts
  )

  const maxPage = Math.ceil((productsData?.totalItems || 1) / visibleProducts)

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  if (!productsData || isLoading) return <Loading />

  return (
    <>
      <AdminTitle
        title={categoryUrl === "rau-cu" ? "Quản lý Rau củ" : "Quản lý Trái cây"}
      />

      <DataTable
        columns={columns}
        data={productsData.products || []}
        currentPage={currentPage}
        totalProducts={productsData?.totalItems || 0}
        visibleProducts={visibleProducts}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </>
  )
}

export default Products
