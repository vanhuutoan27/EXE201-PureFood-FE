import { useState } from "react"

import { useGetAllUsers } from "@/apis/userApi"

import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/user/columns"
import { DataTable } from "@/components/local/admin/user/data-table"

import Loading from "../Loading"

const INITIAL_USER_COUNT = 10

function Users() {
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleOrders] = useState(INITIAL_USER_COUNT)

  const { data: usersData, isLoading } = useGetAllUsers(
    currentPage,
    visibleOrders
  )

  const maxPage = Math.ceil((usersData?.totalItems || 1) / visibleOrders)

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

  if (!usersData || isLoading) return <Loading />

  return (
    <>
      <AdminTitle title="Quản lý khách hàng" />

      <DataTable
        columns={columns}
        data={usersData.users || []}
        currentPage={currentPage}
        totalUsers={usersData.totalItems || 0}
        visibleOrders={visibleOrders}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </>
  )
}

export default Users
