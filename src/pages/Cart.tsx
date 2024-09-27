import { useEffect, useState } from "react"

import { CreateCartItemType } from "@/schemas/cartItemSchema"

import { exampleProductsData } from "@/constants/product"

import Section from "@/components/global/organisms/section"
import CartItems from "@/components/local/cart/cart-items"
import CartSummary from "@/components/local/cart/cart-summary"

function Cart() {
  const [cartItems, setCartItems] = useState<CreateCartItemType[]>([])

  useEffect(() => {
    const items: CreateCartItemType[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    )
    setCartItems(items)
  }, [])

  const productPrices = exampleProductsData.reduce(
    (acc, product) => {
      acc[product.productId] = product.price
      return acc
    },
    {} as Record<string, number>
  )

  const totalPrice = cartItems.reduce((total, item) => {
    const price = productPrices[item.product]
    return total + (price ? price * item.quantity : 0)
  }, 0)

  console.log("Total Price:", totalPrice)

  return (
    <div>
      <Section
        title="Giỏ hàng"
        description="Nơi bạn có thể thanh toán mua sắm thoải thích"
      />

      <div className="flex justify-between gap-10">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="w-2/3 flex-col">
            {cartItems.map((item, index) => (
              <CartItems key={index} item={item} />
            ))}
          </div>
        )}

        <div className="w-1/3">
          <CartSummary price={totalPrice} />
        </div>
      </div>
    </div>
  )
}

export default Cart
