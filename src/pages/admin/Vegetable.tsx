import { exampleProductsData } from "@/constants/product"

import { columns } from "@/components/local/admin/product/columns"
import { DataTable } from "@/components/local/admin/product/data-table"

function VegetableList() {
  const productsData = exampleProductsData.filter(
    (product) => product.category === "rau-cu"
  )

  return (
    <div>
      <DataTable columns={columns} data={productsData} />
    </div>
  )
}

export default VegetableList
