import { useState } from "react"

import { Minus, Plus, X } from "lucide-react"
import { Link } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import { formatCurrency } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import LazyImage from "@/components/global/molecules/lazy-image"

interface CartItemCardProps {
  productData: ProductType
}

function CartItemCard({ productData }: CartItemCardProps) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="flex border-t-2 py-10">
      <div className="flex w-2/3 gap-8">
        <LazyImage
          src={productData.images[0]}
          alt={productData.productName}
          className="size-40 min-w-40 select-none rounded-xl"
        />

        <div className="flex flex-col justify-between">
          <div>
            <Link
              to={`/${productData.category}/${productData.slug}`}
              className="text-lg font-bold uppercase text-primary"
            >
              {productData.productName} - {productData.weight}{" "}
              {productData.unit}
            </Link>

            <p className="mb-4 mt-2 font-bold text-secondary">
              Giá: {formatCurrency(productData.price)}
            </p>

            {productData.organic && (
              <p className="text-sm font-semibold text-secondary">
                Thực phẩm hữu cơ 100%
              </p>
            )}
          </div>

          <p className="text-gray-600">
            Xuất xứ: <span className="font-semibold">{productData.origin}</span>
          </p>
        </div>
      </div>

      <div className="flex h-fit w-1/3 justify-between gap-10">
        <div className="flex items-center rounded-xl border">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11"
            onClick={decreaseQuantity}
          >
            <Minus size={16} />
          </Button>

          <span className="px-4">{quantity}</span>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11"
            onClick={increaseQuantity}
          >
            <Plus size={16} />
          </Button>
        </div>

        <X size={20} className="mt-2 cursor-pointer text-gray-600" />
      </div>
    </div>
  )
}

export default CartItemCard
