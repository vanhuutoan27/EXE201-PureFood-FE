import { useGetAllUsers } from "@/apis/userApi"

import { columns } from "@/components/local/admin/user/columns"
import { DataTable } from "@/components/local/admin/user/data-table"

import Loading from "../Loading"

function Users() {
  const { data: usersData, isLoading } = useGetAllUsers(1, 10)

  if (!usersData || isLoading) return <Loading />

  return (
    <div>
      <DataTable columns={columns} data={usersData.users} />
    </div>
  )
}

export default Users
