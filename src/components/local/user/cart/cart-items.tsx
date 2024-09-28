import { useEffect, useState } from "react"

import { X } from "lucide-react"
import { Link } from "react-router-dom"

import { CreateCartItemType } from "@/schemas/cartItemSchema"

import { formatCurrency } from "@/lib/utils"

import { exampleProductsData } from "@/constants/product"

import { Button } from "@/components/global/atoms/button"
import LazyImage from "@/components/global/molecules/lazy-image"

interface CartItemProps {
  item: CreateCartItemType
}

function CartItems({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity)

  useEffect(() => {
    // Load cart items from local storage
    const storedItems = localStorage.getItem("cart")
    if (storedItems) {
      // You can use this line if you need to access cart items
      // const cartItems: CreateCartItemType[] = JSON.parse(storedItems);
    }
  }, [])

  const updateLocalStorage = (updatedItems: CreateCartItemType[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedItems))
  }

  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1
      updateQuantityInLocalStorage(item.product, newQuantity)
      return newQuantity
    })
  }

  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1
      updateQuantityInLocalStorage(item.product, newQuantity)
      return newQuantity
    })
  }

  const updateQuantityInLocalStorage = (
    productId: string,
    newQuantity: number
  ) => {
    const storedItems = localStorage.getItem("cart")
    if (storedItems) {
      const cartItems: CreateCartItemType[] = JSON.parse(storedItems)
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.product === productId) {
          return { ...cartItem, quantity: newQuantity }
        }
        return cartItem
      })
      updateLocalStorage(updatedCartItems)
    }
  }

  const product = exampleProductsData.find(
    (product) => product.productId === item.product
  )

  return (
    <div className="border-t-2 py-10">
      {product ? (
        <div className="flex">
          <div className="flex w-2/3 gap-10">
            <LazyImage
              src={product.images[0]}
              alt={product.productName}
              className="select-none rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <Link
                  to={`/${product.category}/${product.slug}`}
                  className="slow text-lg font-bold uppercase text-primary hover:text-secondary"
                >
                  {product.productName} - {product.weight} {product.unit}
                </Link>
                <p className="font-bold text-secondary">
                  Giá: {formatCurrency(product.price)}
                </p>
                {product.organic && (
                  <p className="text-sm font-semibold text-secondary">
                    Thực phẩm hữu cơ 100%
                  </p>
                )}
              </div>
              <p className="text-sm text-gray-600">Xuất xứ: {product.origin}</p>
            </div>
          </div>
          <div className="flex h-fit w-1/3 justify-between gap-10">
            <div className="flex items-center gap-4">
              <Button onClick={handleDecrease} variant={"default"} size={"sm"}>
                <p className="text-white">-</p>
              </Button>
              <span className="rounded-lg border border-gray-300 px-3 py-2 text-center">
                {quantity}
              </span>
              <Button onClick={handleIncrease} variant={"default"} size={"sm"}>
                <p className="text-white">+</p>
              </Button>
            </div>
            <div>
              <X color="gray" size={18} className="cursor-pointer" />
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  )
}

export default CartItems
