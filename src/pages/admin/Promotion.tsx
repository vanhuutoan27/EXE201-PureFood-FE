import { useState } from "react"

import { useGetAllPromotions } from "@/apis/promotionApi"

import { columns } from "@/components/local/admin/promotion/columns"
import { DataTable } from "@/components/local/admin/promotion/data-table"

import Loading from "../Loading"

const INITIAL_PROMOTION_COUNT = 10

function AdminPromotion() {
  const [currentPage, setCurrentPage] = useState(1)
  const [visiblePromotions] = useState(INITIAL_PROMOTION_COUNT)

  const { data: promotionsData, isLoading } = useGetAllPromotions(1, undefined)

  const maxPage = Math.ceil(
    (promotionsData?.totalItems || 1) / visiblePromotions
  )

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

  if (!promotionsData || isLoading) return <Loading />

  return (
    <div>
      <DataTable
        columns={columns}
        data={promotionsData.promotions || []}
        currentPage={currentPage}
        totalPromotions={promotionsData?.totalItems || 0}
        visiblePromotions={visiblePromotions}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  )
}

export default AdminPromotion
