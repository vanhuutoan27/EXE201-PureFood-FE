import { exampleUsersData } from "@/constants/users"

import { columns } from "@/components/local/admin/user/columns"
import { DataTable } from "@/components/local/admin/user/data-table"

function Users() {
  const userData = exampleUsersData

  return (
    <div>
      <DataTable columns={columns} data={userData} />
    </div>
  )
}

export default Users
