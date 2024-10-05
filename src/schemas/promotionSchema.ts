import { z } from "zod"

export const promotionSchema = z.object({
  promotionId: z.string().nonempty({ message: "Mã khuyến mãi là bắt buộc" }),
  promotionName: z
    .string()
    .min(5, { message: "Tên khuyến mãi phải có ít nhất 5 ký tự" })
    .nonempty({ message: "Tên khuyến mãi là bắt buộc" }),
  description: z.string().optional(),
  discountCode: z.string().nonempty({ message: "Mã giảm giá là bắt buộc" }),
  discountPercentage: z.coerce
    .number()
    .min(1, { message: "Giảm giá phải ít nhất là 1%" })
    .max(100, { message: "Giảm giá không được vượt quá 100%" }),
  quantity: z.coerce
    .number()
    .int({ message: "Số lượng khuyến mãi phải là số nguyên" })
    .positive({ message: "Số lượng khuyến mãi phải lớn hơn 0" }),
  stock: z.coerce
    .number()
    .int({ message: "Số lượng tồn kho phải là số nguyên" })
    .positive({ message: "Số lượng tồn kho phải lớn hơn 0" }),
  startDate: z.string().nonempty({ message: "Ngày bắt đầu là bắt buộc" }),
  endDate: z.string().nonempty({ message: "Ngày kết thúc là bắt buộc" }),
  status: z.boolean(),
  createdAt: z.string().nonempty({ message: "Ngày tạo là bắt buộc" }),
  createdBy: z.string().nonempty({ message: "Người tạo là bắt buộc" }),
  updatedAt: z.string().nonempty({ message: "Ngày cập nhật là bắt buộc" }),
  updatedBy: z.string().nonempty({ message: "Người cập nhật là bắt buộc" })
})

export const createPromotionSchema = promotionSchema.omit({
  promotionId: true,
  stock: true,
  status: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true
})

export const updatePromotionSchema = promotionSchema.omit({
  promotionId: true,
  stock: true,
  status: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true
})

export type PromotionType = z.infer<typeof promotionSchema>
export type CreatePromotionType = z.infer<typeof createPromotionSchema>
export type UpdatePromotionType = z.infer<typeof updatePromotionSchema>
