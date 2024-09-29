import { exampleProductsData } from "@/constants/product"

import CartItemCard from "@/components/global/molecules/cart-item-card"
import Section from "@/components/global/organisms/section"
import CartSummary from "@/components/local/user/cart/cart-summary"

function Cart() {
  const cartsData = exampleProductsData

  return (
    <div>
      <Section
        title="Giỏ hàng"
        description="Nơi bạn có thể thanh toán mua sắm thoải thích"
      />

      <div className="flex justify-between gap-10">
        {cartsData.length === 0 ? (
          <p className="text-xl font-medium text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <div className="w-2/3 flex-col">
            {cartsData.map((item, index) => (
              <CartItemCard key={index} productData={item} />
            ))}
          </div>
        )}

        <div className="w-1/3">
          <CartSummary price={10000} />
        </div>
      </div>
    </div>
  )
}

export default Cart
