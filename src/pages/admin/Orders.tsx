import { useState } from "react"

import { useLocation } from "react-router-dom"

import { useGetAllOrders } from "@/apis/orderApi"

import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/order/columns"
import { DataTable } from "@/components/local/admin/order/data-table"

import Loading from "../Loading"

const INITIAL_ORDER_COUNT = 10

function Orders() {
  const orderStatusUrl = useLocation().pathname.split("/")[3]
  // console.log("🚀 ~ Orders ~ orderStatusUrl:", orderStatusUrl)

  let orderStatus: string | null
  switch (orderStatusUrl) {
    case "tat-ca":
      orderStatus = null
      break
    case "moi":
      orderStatus = "new"
      break
    case "da-xu-ly":
      orderStatus = "processed"
      break
    default:
      orderStatus = null
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [visibleOrders] = useState(INITIAL_ORDER_COUNT)

  const { data: ordersData, isLoading } = useGetAllOrders(
    currentPage,
    visibleOrders,
    orderStatus
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
    <>
      <AdminTitle title="Quản lý đơn hàng" />

      <DataTable
        columns={columns}
        data={ordersData.orders || []}
        currentPage={currentPage}
        totalOrders={ordersData.totalItems || 0}
        visibleOrders={visibleOrders}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </>
  )
}

export default Orders
