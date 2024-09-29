import { useState } from "react"

import { Heart, Minus, Plus, Share2, ShoppingCart } from "lucide-react"

import { ProductType } from "@/schemas/productSchema"

import { formatCurrency } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import DiscountChip from "@/components/global/molecules/discount-chip"

interface ProductInformationProps {
  productData: ProductType
}

function ProductInformation({ productData }: ProductInformationProps) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="mt-10 space-y-6">
      <h2 className="text-3xl font-bold">
        {productData.productName} - {productData.weight}
        {productData.unit}
      </h2>

      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-primary">
          {formatCurrency(25000)}
        </span>
        <span className="font-medium text-gray-600 line-through">
          {formatCurrency(25000000)}
        </span>

        {/* <span className="text-2xl font-bold text-primary">
          {formatCurrency(productData.price)}
        </span> */}

        <DiscountChip rate={1000} />
      </div>

      <div
        className="product-desc-lens"
        dangerouslySetInnerHTML={{ __html: productData.description }}
      />

      <div className="flex items-center space-x-4">
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

        <Button type="button" variant="default" className="h-11 flex-grow">
          <ShoppingCart size={20} className="mr-3" />
          Thêm vào giỏ hàng
        </Button>
      </div>

      <div className="flex space-x-4">
        <Button type="button" variant="outline" size="sm">
          <Heart size={20} className="mr-3" />
          Thêm vào danh sách
        </Button>
        <Button type="button" variant="outline" size="sm">
          <Share2 size={20} className="mr-3" />
          Chia sẻ
        </Button>
      </div>
    </div>
  )
}

export default ProductInformation
