import { CartItemType } from "@/schemas/cartItemSchema"

import { formatCurrency } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Input } from "@/components/global/atoms/input"

interface CartSummaryProps {
  productsData: CartItemType[]
}

function CartSummary({ productsData }: CartSummaryProps) {
  console.log(JSON.stringify(productsData, null, 2))

  const shippingFee = 30000
  const appliedFee = 10000

  return (
    <div className="space-y-6 rounded-md border-2 px-4 py-6">
      <h3 className="text-xl font-semibold text-primary">Tóm tắt đơn hàng</h3>

      <div className="space-y-4">
        <div className="flex justify-between text-sm text-secondary">
          <p>Sản phẩm</p>
          <p>{formatCurrency(price)}</p>
        </div>
        <div className="flex justify-between border-t-2 pt-4 text-sm text-secondary">
          <p>Phí vận chuyển</p>
          <p>{formatCurrency(shippingFee)}</p>
        </div>
        <div className="flex justify-between border-t-2 pt-4 text-sm text-secondary">
          <p>Phí áp dụng</p>
          <p>{formatCurrency(appliedFee)}</p>
        </div>
        <div className="flex items-center justify-between border-t-2 pt-4 text-sm text-secondary">
          <p className="w-full">Mã giảm giá</p>
          <Input type="text" placeholder="Nhập mã giảm giá" />
        </div>
        <div className="flex justify-between border-t-2 pt-4 text-sm font-semibold text-secondary">
          <p>Tổng hóa đơn</p>
          <p>{formatCurrency(total)}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="w-full">Thanh Toán</Button>
      </div>
    </div>
  )
}

export default CartSummary
