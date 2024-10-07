import { useState } from "react"

import { useGetAllOrders } from "@/apis/orderApi"

import { DataTable } from "@/components/local/admin/order/data-table"
import { columns } from "@/components/local/user/order/columns"

import Loading from "../Loading"

const INITIAL_ORDER_COUNT = 10

function UserOrder() {
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleOrders] = useState(INITIAL_ORDER_COUNT)

  const { data: ordersData, isLoading } = useGetAllOrders(
    currentPage,
    visibleOrders,
    null
  )

  const maxPage = Math.ceil((ordersData?.totalItems || 1) / visibleOrders)

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

  if (!ordersData || isLoading) return <Loading />

  return (
    <div>
      <div className="mb-4 min-h-14">
        <h3 className="text-2xl font-bold text-primary">Đơn hàng</h3>

        <DataTable
          columns={columns}
          data={ordersData.orders || []}
          currentPage={currentPage}
          totalOrders={ordersData.totalItems || 0}
          visibleOrders={visibleOrders}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </div>
    </div>
  )
}

export default UserOrder
