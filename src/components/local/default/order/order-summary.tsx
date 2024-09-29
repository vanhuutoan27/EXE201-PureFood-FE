import { OrderSummaryType } from "@/schemas/orderSchema"

import { formatCurrency } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/global/atoms/card"
import { Label } from "@/components/global/atoms/label"
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/global/atoms/radio-group"
import { Separator } from "@/components/global/atoms/separator"

interface OrderSummaryProps {
  orderSummary: OrderSummaryType
  paymentMethod: string
  setPaymentMethod: (method: string) => void
}

function OrderSummary({
  orderSummary,
  paymentMethod,
  setPaymentMethod
}: OrderSummaryProps) {
  return (
    <Card className="px-0 py-6">
      <CardHeader>
        <CardTitle className="text-lg">Phương thức thanh toán</CardTitle>
        <CardDescription>
          Chọn phương thức thanh toán ưu tiên của bạn
        </CardDescription>
      </CardHeader>

      <CardContent>
        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="cod" value="COD" />
            <Label htmlFor="cod">Thanh toán khi nhận hàng (COD)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="vnpay" value="VNPAY" />
            <Label htmlFor="vnpay">Thanh toán qua VNPay</Label>
          </div>
        </RadioGroup>
      </CardContent>

      <CardHeader>
        <CardTitle className="text-lg">Tóm tắt đơn hàng</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {orderSummary.items.map((item, index) => (
            <li className="flex justify-between" key={index}>
              <span>
                {item.productName} (x{item.quantity})
              </span>
              <span>{formatCurrency(item.price)} VND</span>
            </li>
          ))}
        </ul>
        <Separator className="my-4" />
        <div className="flex justify-between font-bold">
          <span>Tổng cộng</span>
          <span>{formatCurrency(orderSummary.totalAmount)} VND</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button type="submit" variant="default" className="h-11 w-full">
          Đặt hàng
        </Button>
      </CardFooter>
    </Card>
  )
}

export default OrderSummary
