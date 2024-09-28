import { exampleProductsData } from "@/constants/product"

import { columns } from "@/components/local/admin/product/columns"
import { DataTable } from "@/components/local/admin/product/data-table"

function Products() {
  const productsData = exampleProductsData

  return (
    <div>
      <DataTable columns={columns} data={productsData} />
    </div>
  )
}

export default Products
