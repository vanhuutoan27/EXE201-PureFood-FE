import { useState } from "react"

import { useGetAllPayments } from "@/apis/paymentApi"

import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/payment/columns"
import { DataTable } from "@/components/local/admin/payment/data-table"

import Loading from "../Loading"

const INITIAL_ORDER_COUNT = 10

function AdminPayments() {
  const [currentPage, setCurrentPage] = useState(1)
  const [visiblePayments] = useState(INITIAL_ORDER_COUNT)

  const { data: paymentsData, isLoading } = useGetAllPayments(
    currentPage,
    visiblePayments
  )

  const maxPage = Math.ceil((paymentsData?.totalItems || 1) / visiblePayments)

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

  if (!paymentsData || isLoading) return <Loading />

  return (
    <>
      <AdminTitle title="Quản lý thanh toán" />
      <DataTable
        columns={columns}
        data={paymentsData?.payments || []}
        currentPage={currentPage}
        totalPayments={paymentsData.totalItems || 0}
        visiblePayments={visiblePayments}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </>
  )
}

export default AdminPayments
