import { useMemo } from "react"

import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import {
  extractParagraphs,
  formatCurrency,
  formatDateDMY,
  removeVietnameseTones
} from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import { Toggle } from "@/components/global/atoms/toggle"
import LazyImage from "@/components/global/molecules/lazy-image"

import { Filters } from "./product-filter"

interface ProductListProps {
  category: string
  productsData: {
    totalPages: number
    totalItems: number
    products: ProductType[]
  }
  visibleProducts: number
  handleShowMore: () => void
  search: string
  filters: Filters
}

function ProductList({
  category,
  productsData,
  search,
  filters,
  handleShowMore,
  visibleProducts
}: ProductListProps) {
  console.log("🚀 ~ category:", category)

  console.log(productsData.totalItems)

  const filterByPrice = (product: ProductType) => {
    if (!filters.priceRange || filters.priceRange === "all") return true
    const [minPrice, maxPrice] = filters.priceRange.split("-").map(Number)
    if (!maxPrice) return product.price > minPrice
    return product.price >= minPrice && product.price <= maxPrice
  }

  const filterByWeight = (product: ProductType) => {
    if (!filters.weightRange || filters.weightRange === "all") return true
    const weightInGrams =
      product.unit === "Kg" ? product.weight * 1000 : product.weight
    const [minWeight, maxWeight] = filters.weightRange.split("-").map(Number)
    if (!maxWeight) return weightInGrams > minWeight
    return weightInGrams >= minWeight && weightInGrams <= maxWeight
  }

  const filteredProducts = useMemo(() => {
    return productsData.products.filter(
      (product) =>
        removeVietnameseTones(product.productName.toLowerCase()).includes(
          removeVietnameseTones(search.toLowerCase())
        ) &&
        (filters.supplier === "" ||
          filters.supplier === "all" ||
          product.supplier === filters.supplier) &&
        (filters.origin === "" ||
          filters.origin === "all" ||
          product.origin === filters.origin) &&
        (!filters.organic || product.organic) &&
        (filters.priceRange === "all" || filterByPrice(product)) &&
        (filters.weightRange === "all" || filterByWeight(product))
    )
  }, [productsData.products, search, filters])

  return (
    <>
      <div className="space-y-6">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Card key={product.productId} className="flex gap-6 text-sm">
            <div className="h-[240px] w-2/5">
              {product.images && product.images[0] && (
                <LazyImage
                  src={product.images[0]}
                  alt={product.productName}
                  className="h-full w-full select-none rounded-lg object-cover"
                />
              )}
            </div>

            <div className="flex w-3/5 flex-col gap-y-2">
              <div className="flex justify-between">
                <Link
                  to={`/${product.category}/${product.slug}`}
                  className="text-xl font-bold uppercase text-primary"
                >
                  {product.productName} - {product.weight} {product.unit}
                </Link>
                <p className="text-lg font-bold text-secondary">
                  {formatCurrency(product.price)}
                </p>
              </div>

              <p className="min-h-16 text-sm text-gray-600">
                {extractParagraphs(product.description)}
              </p>

              {product.organic && (
                <span className="mt-2 font-semibold text-secondary">
                  Thực phẩm hữu cơ 100%
                </span>
              )}

              <div className="mt-2 flex items-center justify-between">
                <p className="font-medium text-muted-foreground">
                  Ngày nhập:{" "}
                  <span className="font-semibold text-secondary">
                    {formatDateDMY(product.entryDate)}
                  </span>
                </p>

                <p className="font-medium text-muted-foreground">
                  Nơi nhập:{" "}
                  <span className="font-semibold text-secondary">
                    {product.origin}
                  </span>
                </p>
              </div>

              <div className="mt-4 flex gap-4">
                <Toggle variant="outline">
                  <FaShoppingCart size={16} />
                </Toggle>

                <Link
                  to={`/${product.category}/${product.slug}`}
                  className="w-full"
                >
                  <Button variant="default" className="w-full">
                    Xem chi tiết
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="mb-2 mt-6 text-center font-semibold text-primary">
        Hiển thị {Math.min(visibleProducts, filteredProducts.length)} của{" "}
        {productsData.totalItems} kết quả
      </p>

      {visibleProducts < productsData.totalItems && (
        <div className="flex justify-center">
          <Button
            type="button"
            variant="default"
            className="h-11 w-full px-12"
            onClick={handleShowMore}
          >
            Hiển thị thêm
          </Button>
        </div>
      )}
    </>
  )
}

export default ProductList
