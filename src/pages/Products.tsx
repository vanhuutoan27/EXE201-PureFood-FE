import { useEffect, useState } from "react"

import { useLocation } from "react-router-dom"

import useDebounce from "@/hooks/useDebounce"

import { useGetProductsByCategory } from "@/apis/productApi"

import Bread from "@/components/global/molecules/bread"
import ProductFilter from "@/components/local/default/product/product-filter"
import ProductList from "@/components/local/default/product/product-list"
import ProductSearch from "@/components/local/default/product/product-search"

import Loading from "./Loading"

const defaultFilters = {
  supplier: "all",
  origin: "all",
  organic: false,
  priceRange: "all",
  weightRange: "all"
}

const INITIAL_PRODUCT_COUNT = 3

function Products() {
  const [visibleProducts, setVisibleProducts] = useState(INITIAL_PRODUCT_COUNT)
  const categoryUrl = useLocation().pathname.split("/")[1]

  const { data: productsData, isLoading } = useGetProductsByCategory(
    categoryUrl,
    1,
    visibleProducts
  )

  const [searchValue, setSearchValue] = useState("")
  const [filters, setFilters] = useState(defaultFilters)
  const debouncedSearchValue = useDebounce(searchValue)

  useEffect(() => {
    setFilters(defaultFilters)
    setVisibleProducts(INITIAL_PRODUCT_COUNT)
  }, [categoryUrl])

  const handleShowMore = () => {
    if (visibleProducts >= (productsData?.totalItems ?? 0)) {
      setVisibleProducts(INITIAL_PRODUCT_COUNT)
    } else {
      setVisibleProducts((prev) => prev + INITIAL_PRODUCT_COUNT)
    }
  }

  if (!productsData || isLoading) return <Loading />

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
            productsData={productsData}
            visibleProducts={visibleProducts}
            handleShowMore={handleShowMore}
            search={debouncedSearchValue}
            filters={filters}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
