import { useState } from "react"

import { appliedFee, shippingFee } from "@/configs/config"
import { Check, ChevronsUpDown } from "lucide-react"

import { OrderItemType } from "@/schemas/orderSchema"
import { PromotionType } from "@/schemas/promotionSchema"

import { cn, formatCurrency } from "@/lib/utils"

import { samplePromotionData } from "@/constants/promotions"

import { Button } from "@/components/global/atoms/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/global/atoms/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/global/atoms/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/global/atoms/popover"
import { Separator } from "@/components/global/atoms/separator"

interface OrderSummaryProps {
  orderSummary: OrderItemType[]
  totalAmount: number
  handleSubmit: () => void
  loading: boolean
}

function OrderSummary({
  orderSummary,
  totalAmount,
  handleSubmit,
  loading
}: OrderSummaryProps) {
  const [isPromotionOpen, setIsPromotionOpen] = useState(false)
  const [selectedPromotion, setSelectedPromotion] =
    useState<PromotionType | null>(null)

  return (
    <Card className="h-fit w-2/5 px-0">
      <CardHeader className="pt-0">
        <CardTitle className="text-lg">Tóm tắt đơn hàng</CardTitle>
        <CardDescription>Xem lại đơn hàng trước khi đặt hàng</CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {orderSummary.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>
                {item.productName} (x{item.quantity})
              </span>
              <span>{formatCurrency(item.price)} VND</span>
            </li>
          ))}
        </ul>

        <Separator className="my-4" />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span>{formatCurrency(shippingFee)} VND</span>
          </div>

          <div className="flex justify-between">
            <span>Phí áp dụng</span>
            <span>{formatCurrency(appliedFee)} VND</span>
          </div>
        </div>
      </CardContent>

      <Separator className="my-4" />

      <CardHeader className="pt-0">
        <CardTitle className="text-lg">Khuyến mãi</CardTitle>
        <CardDescription>
          Chọn khuyến mãi để áp dụng cho đơn hàng của bạn
        </CardDescription>
      </CardHeader>

      <CardContent className="justify-between space-y-2">
        <Popover open={isPromotionOpen} onOpenChange={setIsPromotionOpen}>
          <PopoverTrigger asChild>
            <Button
              aria-expanded={isPromotionOpen}
              type="button"
              variant="outline"
              role="combobox"
              className="w-full justify-between"
            >
              {selectedPromotion
                ? selectedPromotion.discountCode
                : "Chọn khuyến mãi..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-0">
            <Command>
              <CommandInput placeholder="Tìm khuyến mãi..." />
              <CommandList>
                <CommandEmpty>Không tìm thấy khuyến mãi.</CommandEmpty>
                <CommandGroup>
                  {samplePromotionData.map((promotion) => (
                    <CommandItem
                      key={promotion.promotionId}
                      value={promotion.discountCode}
                      disabled={!promotion.status}
                      onSelect={() => {
                        if (promotion.status) {
                          setSelectedPromotion(promotion)
                          setIsPromotionOpen(false)
                        }
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedPromotion?.promotionId ===
                            promotion.promotionId
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {promotion.discountCode}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </CardContent>

      <CardContent>
        <div className="flex justify-between font-bold">
          <span>Tổng cộng</span>
          <span>{formatCurrency(totalAmount)} VND</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          disabled={loading}
          type="submit"
          variant="default"
          className="h-11 w-full"
          onClick={handleSubmit}
        >
          {loading ? "Đang xử lý..." : "Đặt hàng"}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default OrderSummary
