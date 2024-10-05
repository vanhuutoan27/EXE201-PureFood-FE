import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  PromotionType,
  UpdatePromotionType,
  updatePromotionSchema
} from "@/schemas/promotionSchema"

import { convertToLocalISOString, formatDateDMY } from "@/lib/utils"

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

interface ViewPromotionProps {
  promotionData: PromotionType
  onClose: () => void
}

function ViewPromotionDialog({ promotionData, onClose }: ViewPromotionProps) {
  let usedPromotion = promotionData.quantity - promotionData.stock

  const [startDate, setStartDate] = useState<string>(
    promotionData.startDate
      ? format(new Date(promotionData.startDate), "yyyy-MM-dd")
      : ""
  )
  const [endDate, setEndDate] = useState<string>(
    promotionData.endDate
      ? format(new Date(promotionData.endDate), "yyyy-MM-dd")
      : ""
  )

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

  const [isEditing, setIsEditing] = useState(false)
  const handleCancel = () => {
    setIsEditing(false)
  }
  const handleUpdate = () => {
    setIsEditing(true)
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<UpdatePromotionType>({
    resolver: zodResolver(updatePromotionSchema),
    defaultValues: {
      ...promotionData,
      startDate: promotionData.startDate
        ? format(new Date(promotionData.startDate), "yyyy-MM-dd")
        : "",
      endDate: promotionData.endDate
        ? format(new Date(promotionData.endDate), "yyyy-MM-dd")
        : ""
    }
  })

  const onSubmit = (data: UpdatePromotionType) => {
    console.log(JSON.stringify(data, null, 2))
    setIsEditing(false)
  }

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent className="min-w-[800px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-center">
              Chi tiết mã giảm giá
            </DialogTitle>
          </DialogHeader>

          <div className="flex gap-4">
            <div className="w-full space-y-1">
              <Label>ID sản phẩm</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                defaultValue={promotionData.promotionId}
              />
            </div>

            <div className="w-full space-y-1">
              <Label>Tên mã</Label>
              <Input
                readOnly={!isEditing}
                type="text"
                tabIndex={-1}
                {...register("promotionName")}
                defaultValue={promotionData.promotionName}
              />
              {errors.promotionName && (
                <p className="error-lens">{errors.promotionName.message}</p>
              )}
            </div>
            <div className="w-full space-y-1">
              <Label>Code</Label>
              <Input
                readOnly={!isEditing}
                type="text"
                tabIndex={-1}
                {...register("discountCode")}
                defaultValue={promotionData.discountCode}
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
                readOnly={!isEditing}
                type="number"
                tabIndex={-1}
                {...register("discountPercentage")}
                defaultValue={promotionData.discountPercentage}
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
                readOnly={!isEditing}
                type="number"
                tabIndex={-1}
                {...register("quantity")}
                defaultValue={promotionData.quantity}
              />
              {errors.quantity && (
                <p className="error-lens">{errors.quantity.message}</p>
              )}
            </div>
            <div className="w-full space-y-1">
              <Label>Đã sử dụng</Label>
              <Input
                readOnly
                type="number"
                tabIndex={-1}
                value={usedPromotion}
              />
            </div>
            <div className="w-full space-y-1">
              <Label>Còn lại</Label>
              <Input
                readOnly
                type="number"
                tabIndex={-1}
                defaultValue={promotionData.stock}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full space-y-1">
              <Label>Ngày bắt đầu</Label>

              {isEditing ? (
                <>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${!startDate && "text-muted-foreground"}`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? (
                          format(new Date(startDate), "PPP")
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
                    <p className="error-lens">Ngày bắt đầu là bắt buộc</p>
                  )}
                </>
              ) : (
                <Input
                  readOnly
                  type="text"
                  tabIndex={-1}
                  defaultValue={formatDateDMY(promotionData.startDate)}
                />
              )}
            </div>
            <div className="w-full space-y-1">
              <Label>Ngày kết thúc</Label>

              {isEditing ? (
                <>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${!endDate && "text-muted-foreground"}`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? (
                          format(new Date(endDate), "PPP")
                        ) : (
                          <span>Chọn ngày kết thúc</span>
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
                    <p className="error-lens">Ngày kết thúc là bắt buộc</p>
                  )}
                </>
              ) : (
                <Input
                  readOnly={!isEditing}
                  type="text"
                  tabIndex={-1}
                  defaultValue={formatDateDMY(promotionData.endDate)}
                />
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full space-y-1">
              <Label>Ngày tạo</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                defaultValue={formatDateDMY(promotionData.createdAt)}
              />
            </div>

            <div className="w-full space-y-1">
              <Label>Ngày cập nhật</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                defaultValue={formatDateDMY(promotionData.updatedAt)}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2/3 space-y-1">
              <Label>Mô tả</Label>
              <Input
                readOnly={!isEditing}
                type="text"
                tabIndex={-1}
                {...register("description")}
                defaultValue={promotionData.description}
              />
              {errors.description && (
                <p className="error-lens">{errors.description.message}</p>
              )}
            </div>
            <div className="w-1/3 space-y-1">
              <Label>Trạng thái</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                defaultValue={promotionData.status ? "Áp dụng" : "Tạm ngưng"}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-between gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Đóng
            </Button>

            {isEditing && (
              <div className="space-x-4">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Hủy
                </Button>
                <Button type="submit" variant="default">
                  Lưu
                </Button>
              </div>
            )}

            {!isEditing && (
              <Button type="button" variant="default" onClick={handleUpdate}>
                Cập nhật
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ViewPromotionDialog
