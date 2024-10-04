import { sampleOrderData } from "@/constants/orders"

import { DataTable } from "@/components/local/admin/order/data-table"
import { columns } from "@/components/local/user/order/columns"

function UserOrder() {
  const ordersData = sampleOrderData

  return (
    <div>
      <div className="mb-4 min-h-14">
        <h3 className="text-2xl font-bold text-primary">Đơn hàng</h3>

        <DataTable columns={columns} data={ordersData} />
      </div>
    </div>
  )
}

export default UserOrder
