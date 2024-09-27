import { useState } from "react"

import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import { formatCurrency, formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import { Toggle } from "@/components/global/atoms/toggle"

interface ProductListProps {
  category: string
  products: ProductType[]
}

function ProductList({ category, products }: ProductListProps) {
  const [visibleProducts, setVisibleProducts] = useState(3)

  const filteredProducts = products.filter(
    (product) => product.category === category
  )

  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 3)
  }

  return (
    <>
      <div className="space-y-6">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Card key={product.productId} className="flex gap-6 text-sm">
            <div className="h-[240px] w-2/5">
              <img
                src={product.images[0]}
                alt={product.productName}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            <div className="flex w-3/5 flex-col gap-y-2">
              <div className="flex justify-between">
                <Link
                  to={`/${product.category}/${product.slug}`}
                  className="slow text-xl font-bold uppercase text-primary hover:text-secondary"
                >
                  {product.productName} - {product.weight} {product.unit}
                </Link>
                <p className="text-lg font-bold text-secondary">
                  {formatCurrency(product.price)}
                </p>
              </div>

              <p className="lens min-h-[72px] text-gray-600">
                {product.description}
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
        Hiển thị {visibleProducts} của {filteredProducts.length} kết quả
      </p>

      {visibleProducts < filteredProducts.length && (
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
