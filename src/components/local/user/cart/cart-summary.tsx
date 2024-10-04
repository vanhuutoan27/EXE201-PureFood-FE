import { useState } from "react"

import { appliedFee, shippingFee } from "@/configs/config"
import { Check, ChevronsUpDown } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { CartItemType } from "@/schemas/cartItemSchema"
import { PromotionType } from "@/schemas/promotionSchema"

import { cn, formatCurrency } from "@/lib/utils"

import { samplePromotionData } from "@/constants/promotions"

import { Button } from "@/components/global/atoms/button"
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

interface CartSummaryProps {
  productsData: CartItemType[]
}

function CartSummary({ productsData }: CartSummaryProps) {
  const navigate = useNavigate()

  const [isPromotionOpen, setIsPromotionOpen] = useState(false)
  const [selectedPromotion, setSelectedPromotion] =
    useState<PromotionType | null>(null)

  const totalProductPrice = productsData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const total = totalProductPrice + shippingFee + appliedFee

  const handleOrder = () => {
    if (productsData.length > 0) {
      navigate("/dat-hang", {
        state: { productsData, total, selectedPromotion }
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

        <div className="justify-between space-y-2">
          <p>Khuyến mãi</p>

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
            <PopoverContent className="w-[382px] p-0">
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
