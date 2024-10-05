import { samplePromotionData } from "@/constants/promotions"

import { columns } from "@/components/local/admin/promotion/columns"
import { DataTable } from "@/components/local/admin/promotion/data-table"

function AdminPromotion() {
  const promotionData = samplePromotionData
  return (
    <div>
      <DataTable columns={columns} data={promotionData} />
    </div>
  )
}

export default AdminPromotion
