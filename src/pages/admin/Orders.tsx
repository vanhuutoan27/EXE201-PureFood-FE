import { exampleOrdersData } from "@/constants/orders"

import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/order/columns"
import { DataTable } from "@/components/local/admin/order/data-table"

function Orders() {
  const ordersData = exampleOrdersData

  return (
    <div>
      <AdminTitle title={"Quản lý đơn hàng"} />

      <DataTable columns={columns} data={ordersData} />
    </div>
  )
}

export default Orders
