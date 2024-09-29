import { useEffect, useState } from "react"

import { useLocation } from "react-router-dom"

import useDebounce from "@/hooks/useDebounce"

import { exampleProductsData } from "@/constants/product"

import Bread from "@/components/global/molecules/bread"
import ProductFilter from "@/components/local/default/product/product-filter"
import ProductList from "@/components/local/default/product/product-list"
import ProductSearch from "@/components/local/default/product/product-search"

const defaultFilters = {
  supplier: "all",
  origin: "all",
  organic: false,
  priceRange: "all",
  weightRange: "all"
}

function Products() {
  const productsData = exampleProductsData
  const categoryUrl = useLocation().pathname.split("/")[1]
  const [searchValue, setSearchValue] = useState("")

  const [filters, setFilters] = useState(defaultFilters)

  const debouncedSearchValue = useDebounce(searchValue)

  useEffect(() => {
    setFilters(defaultFilters)
  }, [categoryUrl])

  return (
    <div className="space-y-10">
      <Bread
        lastPage={{ name: "Trang chủ", url: "/" }}
        currentPage={{
          name: categoryUrl === "rau-cu" ? "Rau Củ" : "Trái Cây",
          url: `/${categoryUrl}`
        }}
      />

      <div className="flex gap-10">
        <div className="sticky top-24 h-fit w-1/3">
          <ProductFilter filters={filters} setFilters={setFilters} />
        </div>

        <div className="w-2/3 space-y-8">
          <ProductSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <ProductList
            category={categoryUrl}
            productsData={productsData}
            search={debouncedSearchValue}
            filters={filters}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
