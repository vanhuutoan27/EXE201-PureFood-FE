import { useState } from "react"

import { useGetAllOrders } from "@/apis/orderApi"

import { Button } from "@/components/global/atoms/button"
import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/order/columns"
import { DataTable } from "@/components/local/admin/order/data-table"

import Loading from "../Loading"

const INITIAL_ORDER_COUNT = 10

function OrdersProcessed() {
  const [visibleOrders] = useState(INITIAL_ORDER_COUNT)
  const [currentPage, setCurrentPage] = useState(1)

  const { data: ordersData, isLoading } = useGetAllOrders(
    currentPage,
    visibleOrders
  )

  if (isLoading) {
    return <Loading />
  }

  const totalPages = ordersData?.totalPages || 1

  const filteredOrdersData = ordersData?.orders.filter(
    (order) =>
      order.orderStatus === "Shipping" || order.orderStatus === "Completed"
  )

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
      <AdminTitle title="Quản lý đơn hàng" />

      <DataTable columns={columns} data={filteredOrdersData || []} />

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default OrdersProcessed
