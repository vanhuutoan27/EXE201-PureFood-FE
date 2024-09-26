import { useState } from "react"

import { CircleCheck } from "lucide-react"

import { ProductType } from "@/schemas/productSchema"

import { formatCurrency } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"

interface ProductInformationProps {
  product: ProductType
}

function ProductInformation({ product }: ProductInformationProps) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  }

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-3xl font-bold uppercase text-primary">
          {product.productName} - {product.weight} {product.unit}
        </p>

        <h4 className="text-xl font-bold text-primary">
          Giá: {formatCurrency(product.price)}
        </h4>
      </div>

      <p className="text-gray-600">{product.description}</p>

      <ul className="space-y-4">
        <li className="flex items-start text-secondary">
          <CircleCheck className="text-secondary" />
          <span className="ml-5">
            <span className="font-semibold">Xuất xứ: {product.origin}</span>
          </span>
        </li>

        {product.organic && (
          <li className="flex items-start text-secondary">
            <CircleCheck className="text-secondary" />
            <span className="ml-5">
              <span className="font-semibold">Thực phẩm hữu cơ 100%</span>
            </span>
          </li>
        )}

        <li className="flex items-start text-secondary">
          <CircleCheck className="text-secondary" />
          <span className="ml-5">
            <span className="font-semibold">Đảm bảo tươi ngon</span>
          </span>
        </li>
        <li className="flex items-start text-secondary">
          <CircleCheck className="text-secondary" />
          <span className="ml-5">
            <span className="font-semibold">Đổi trả trong vòng 24h</span>
          </span>
        </li>
      </ul>
      <div className="flex items-center justify-center space-x-4">
        <Button onClick={handleDecrease} variant={"default"}>
          <p className="text-white">-</p>
        </Button>

        <span className="rounded-lg border border-gray-300 px-5 py-3 text-center">
          {quantity}
        </span>

        <Button onClick={handleIncrease}>
          <p className="text-white">+</p>
        </Button>
      </div>

      <Button type="button" variant="default" className="h-11 w-full">
        Thêm vào giỏ hàng
      </Button>
    </div>
  )
}

export default ProductInformation
