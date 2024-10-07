import { useParams } from "react-router-dom"

import { useAuthContext } from "@/contexts/auth-context"

import { useGetAllCartItems } from "@/apis/cartApi"

import CartItemCard from "@/components/global/molecules/cart-item-card"
import Section from "@/components/global/organisms/section"
import CartSummary from "@/components/local/user/cart/cart-summary"

import ErrorPage from "./Error"
import Loading from "./Loading"

function Cart() {
  const { userId } = useParams<{ userId: string }>()
  const { user } = useAuthContext()

  const { data: cartItemsData, isLoading } = useGetAllCartItems(userId, 1, null)

  // console.log(cartItemsData?.cartItems)

  if (user?.userId !== userId) return <ErrorPage statusCode={404} />
  if (!cartItemsData || isLoading) return <Loading />

  return (
    <div>
      <Section
        title="Giỏ hàng"
        description="Nơi bạn có thể thanh toán mua sắm thoải thích"
      />

      <div className="flex justify-between gap-10">
        {cartItemsData.cartItems.length === 0 ? (
          <p className="mb-2 mt-6 font-semibold text-primary">
            Không có sản phẩm nào trong giỏ hàng của bạn.
          </p>
        ) : (
          <div className="w-2/3 flex-col">
            {cartItemsData.cartItems.map((item, index) => (
              <CartItemCard key={index} productData={item} />
            ))}
          </div>
        )}

        <div className="w-1/3">
          <CartSummary productsData={cartItemsData.cartItems} />
        </div>
      </div>
    </div>
  )
}

export default Cart
