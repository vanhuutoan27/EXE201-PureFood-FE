import { exampleOrdersData } from "@/constants/orders"

import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/order/columns"
import { DataTable } from "@/components/local/admin/order/data-table"

function OrdersProcessed() {
  const ordersData = exampleOrdersData

  const filteredOrdersData = ordersData.filter(
    (order) =>
      order.orderStatus === "Shipping" || order.orderStatus === "Completed"
  )
  return (
    <div>
      <AdminTitle title={"Quản lý đơn hàng"} />

      <DataTable columns={columns} data={filteredOrdersData} />
    </div>
  )
}

export default OrdersProcessed
