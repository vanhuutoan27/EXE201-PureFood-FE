import { useLocation } from "react-router-dom"

import { exampleProductsData } from "@/constants/products"

import AdminTitle from "@/components/global/organisms/admin-title"
import { columns } from "@/components/local/admin/product/columns"
import { DataTable } from "@/components/local/admin/product/data-table"

function Products() {
  const categoryUrl = useLocation().pathname.split("/")[3]

  const productsData = exampleProductsData

  const filteredProductsData = productsData.filter(
    (product) => product.category === categoryUrl
  )

  return (
    <div>
      <AdminTitle
        title={categoryUrl === "rau-cu" ? "Quản lý Rau củ" : "Quản lý Trái cây"}
      />

      <DataTable columns={columns} data={filteredProductsData} />
    </div>
  )
}

export default Products
