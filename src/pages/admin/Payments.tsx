import { samplePaymentData } from "@/constants/payments"

import { columns } from "@/components/local/admin/payment/columns"
import { DataTable } from "@/components/local/admin/payment/data-table"

function AdminPayments() {
  const paymentData = samplePaymentData
  return (
    <div>
      <DataTable columns={columns} data={paymentData} />
    </div>
  )
}

export default AdminPayments
