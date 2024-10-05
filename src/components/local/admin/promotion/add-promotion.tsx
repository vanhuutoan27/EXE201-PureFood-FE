import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  CreatePromotionType,
  createPromotionSchema
} from "@/schemas/promotionSchema"

import { convertToLocalISOString } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Calendar } from "@/components/global/atoms/calendar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/global/atoms/dialog"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/global/atoms/popover"

interface AddPromotionProps {
  onClose: () => void
}

function AddPromotion({ onClose }: AddPromotionProps) {
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")

  const handleDateSelect = (
    date: Date | undefined,
    fieldName: "startDate" | "endDate"
  ) => {
    if (date) {
      const isoString = convertToLocalISOString(date)
      if (fieldName === "startDate") {
        setStartDate(isoString)
      } else if (fieldName === "endDate") {
        setEndDate(isoString)
      }
      setValue(fieldName, isoString)
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<CreatePromotionType>({
    resolver: zodResolver(createPromotionSchema)
  })

  const onSubmit = (data: CreatePromotionType) => {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent className="min-w-[600px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle className="text-center">Tạo mã giảm giá</DialogTitle>
          </DialogHeader>

          <div className="flex gap-4">
            <div className="w-full space-y-1">
              <Label>Tên mã</Label>
              <Input
                type="text"
                tabIndex={-1}
                placeholder="Nhập tên mã giảm giá"
                {...register("promotionName")}
              />

              {errors.promotionName && (
                <p className="error-lens">{errors.promotionName.message}</p>
              )}
            </div>
            <div className="w-full space-y-1">
              <Label>Code</Label>
              <Input
                type="text"
                tabIndex={-1}
                placeholder="Nhập code mã giảm giá"
                {...register("discountCode")}
              />

              {errors.discountCode && (
                <p className="error-lens">{errors.discountCode.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full space-y-1">
              <Label>Giảm giá</Label>
              <Input
                type="number"
                tabIndex={-1}
                placeholder="Nhập phần trăm giảm giá"
                {...register("discountPercentage")}
              />

              {errors.discountPercentage && (
                <p className="error-lens">
                  {errors.discountPercentage.message}
                </p>
              )}
            </div>
            <div className="w-full space-y-1">
              <Label>Số lượng</Label>
              <Input
                type="text"
                tabIndex={-1}
                placeholder="Nhập số lượng mã giảm giá"
                {...register("quantity")}
              />

              {errors.quantity && (
                <p className="error-lens">{errors.quantity.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full space-y-1">
              <Label>Ngày bắt đầu</Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${!startDate && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? (
                      format(startDate, "PPP")
                    ) : (
                      <span>Chọn ngày bắt đầu</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate ? new Date(startDate) : undefined}
                    onSelect={(date) => handleDateSelect(date, "startDate")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              {errors.startDate && (
                <p className="error-lens">Vui lòng nhập ngày bắt đầu</p>
              )}
            </div>

            <div className="w-full space-y-1">
              <Label>Ngày kết thúc</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${!endDate && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? (
                      format(endDate, "PPP")
                    ) : (
                      <span>Chọn kết thúc</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate ? new Date(endDate) : undefined}
                    onSelect={(date) => handleDateSelect(date, "endDate")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              {errors.endDate && (
                <p className="error-lens">Vui lòng nhập ngày kết thúc</p>
              )}
            </div>
          </div>

          <div className="w-full space-y-1">
            <Label>Mô tả</Label>
            <Input
              type="text"
              tabIndex={-1}
              placeholder="Nhập mô tả giảm giá"
              {...register("description")}
            />

            {errors.description && (
              <p className="error-lens">{errors.description.message}</p>
            )}
          </div>

          <div className="mt-4 flex justify-between">
            <Button type="submit" variant="default">
              Tạo mới
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Đóng
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddPromotion
