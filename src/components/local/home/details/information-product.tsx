import React, { useState } from "react"

import { CircleCheck } from "lucide-react"

import { formatCurrency } from "@/lib/helper"

import { Button } from "@/components/global/atoms/button"

interface ProductInfoProps {
  productId: string
  name: string
  price: number
  origin: string
  category: string
  weight: number
  unit: string
  description: string
  organic: boolean
}

// const handleAddToCart = () => {
//   const newItem: ProductCartType = {
//     productId: productId,
//     name: name,
//     price: price,
//     weight: weight,
//     unit: unit
//   }
//   const updatedCart = addToCart(cartItems, newItem)
//   setCartItems(updatedCart)
//   localStorage.setItem("cartItems", JSON.stringify(updatedCart))

//   toast.success("Added to cart successfully")

//   window.dispatchEvent(new CustomEvent("cartChanged", { detail: updatedCart }))
// }

const InformationProduct: React.FC<ProductInfoProps> = ({
  category,
  name,
  price,
  origin,
  weight,
  unit,
  description,
  organic
  //   productId
}) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`)
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-2 text-4xl font-bold uppercase text-primary">
        <p>
          {category} {name} - {weight} {unit}
        </p>
      </div>
      <p className="text-xl font-bold text-primary">
        Giá: {formatCurrency(price)}
      </p>
      <p className="text-base font-semibold text-secondary">{description}</p>

      <ul className="space-y-4">
        <li className="flex items-start text-secondary">
          <CircleCheck className="text-secondary" />
          <span className="ml-5">
            <span className="font-semibold">Xuất xứ: {origin}</span>
          </span>
        </li>

        {organic && (
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
      <Button variant={"default"} onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  )
}

export default InformationProduct
