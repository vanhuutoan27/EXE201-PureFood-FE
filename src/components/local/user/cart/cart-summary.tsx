import { appliedFee, shippingFee } from "@/configs/config"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { CartItemType } from "@/schemas/cartItemSchema"

import { formatCurrency } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Separator } from "@/components/global/atoms/separator"

interface CartSummaryProps {
  productsData: CartItemType[]
}

function CartSummary({ productsData }: CartSummaryProps) {
  const navigate = useNavigate()

  const totalProductPrice = productsData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const total = totalProductPrice + shippingFee + appliedFee

  const handleOrder = () => {
    if (productsData.length > 0) {
      navigate("/dat-hang", {
        state: { productsData, total }
      })
    } else {
      toast.error("Giỏ hàng của bạn đang trống.")
    }
  }

  return (
    <div className="space-y-6 rounded-md border-2 px-4 py-6">
      <h3 className="text-xl font-semibold text-primary">Tóm tắt đơn hàng</h3>

      <div className="space-y-4 text-sm text-secondary">
        <div className="flex justify-between">
          <p>Sản phẩm</p>
          <p className="font-medium">{formatCurrency(totalProductPrice)}</p>
        </div>

        <Separator className="my-2" />

        <div className="flex justify-between">
          <p>Phí vận chuyển</p>
          <p className="font-medium">{formatCurrency(shippingFee)}</p>
        </div>

        <Separator className="my-2" />

        <div className="flex justify-between">
          <p>Phí áp dụng</p>
          <p className="font-medium">{formatCurrency(appliedFee)}</p>
        </div>

        <Separator className="my-2" />

        <div className="flex justify-between font-semibold">
          <p>Tổng hóa đơn</p>
          <p>{formatCurrency(total)}</p>
        </div>
      </div>

      <Button
        disabled={productsData.length === 0}
        type="button"
        variant="default"
        className="w-full"
        onClick={handleOrder}
      >
        Đặt Hàng
      </Button>
    </div>
  )
}

export default CartSummary
