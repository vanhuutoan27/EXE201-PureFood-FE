import { appliedFee, shippingFee } from "@/configs/config"
import { useNavigate } from "react-router-dom"

import { CartItemType } from "@/schemas/cartItemSchema"

import { formatCurrency } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Input } from "@/components/global/atoms/input"
import { Separator } from "@/components/global/atoms/separator"

interface CartSummaryProps {
  productsData: CartItemType[]
}

function CartSummary({ productsData }: CartSummaryProps) {
  const navigate = useNavigate()

  // console.log(JSON.stringify(productsData, null, 2))

  const totalProductPrice = productsData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const total = totalProductPrice + shippingFee + appliedFee

  const handleOrder = () => {
    navigate("/dat-hang", { state: { productsData, total } })
  }

  return (
    <div className="space-y-6 rounded-md border-2 px-4 py-6">
      <h3 className="text-xl font-semibold text-primary">Tóm tắt đơn hàng</h3>

      <div className="space-y-4">
        <div className="flex justify-between text-sm text-secondary">
          <p>Sản phẩm</p>
          <p className="font-medium">{formatCurrency(totalProductPrice)}</p>
        </div>

        <Separator className="my-2" />

        <div className="flex justify-between text-sm text-secondary">
          <p>Phí vận chuyển</p>
          <p className="font-medium">{formatCurrency(shippingFee)}</p>
        </div>

        <Separator className="my-2" />

        <div className="flex justify-between text-sm text-secondary">
          <p>Phí áp dụng</p>
          <p className="font-medium">{formatCurrency(appliedFee)}</p>
        </div>

        <Separator className="my-2" />

        <div className="flex items-center justify-between text-sm text-secondary">
          <p className="w-full">Mã giảm giá</p>
          <Input type="text" placeholder="Nhập mã giảm giá" />
        </div>

        <Separator className="my-2" />

        <div className="flex justify-between text-sm font-semibold text-secondary">
          <p>Tổng hóa đơn</p>
          <p>{formatCurrency(total)}</p>
        </div>
      </div>

      <Button
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
