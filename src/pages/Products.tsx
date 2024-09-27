import { useLocation } from "react-router-dom"

import { exampleProductsData } from "@/constants/product"

import Bread from "@/components/global/molecules/bread"
import ProductFilter from "@/components/local/product/product-filter"
import ProductList from "@/components/local/product/product-list"
import ProductSearch from "@/components/local/product/product-search"

function Products() {
  const productsData = exampleProductsData
  const categoryUrl = useLocation().pathname.split("/")[1]

  return (
    <div className="space-y-10">
      <Bread
        lastPage={{ name: "Trang chủ", url: "/" }}
        currentPage={{
          name: categoryUrl === "rau-cu" ? "Rau Củ" : "Trái Cây",
          url: `/${categoryUrl}`
        }}
      />

      <ProductSearch />

      <div className="flex gap-10">
        <div className="sticky top-24 h-fit w-1/3">
          <ProductFilter />
        </div>

        <div className="w-2/3">
          <ProductList category={categoryUrl} products={productsData} />
        </div>
      </div>
    </div>
  )
}

export default Products
