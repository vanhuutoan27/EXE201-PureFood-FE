import { z } from "zod"

export const userSchema = z.object({
  userId: z.string().nonempty({ message: "Mã người dùng là bắt buộc" }),
  fullName: z.string().nonempty({ message: "Họ và tên là bắt buộc" }),
  email: z
    .string()
    .email({ message: "Địa chỉ email không hợp lệ" })
    .nonempty({ message: "Email là bắt buộc" }),
  phoneNumber: z
    .string()
    .nonempty({ message: "Số điện thoại là bắt buộc" })
    .min(10, { message: "Số điện thoại phải có ít nhất 10 ký tự" }),
  password: z
    .string()
    .nonempty({ message: "Mật khẩu là bắt buộc" })
    .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
    .regex(/[A-Z]/, {
      message: "Mật khẩu phải chứa ít nhất 1 chữ cái viết hoa"
    })
    .regex(/[a-z]/, {
      message: "Mật khẩu phải chứa ít nhất 1 chữ cái viết thường"
    })
    .regex(/[0-9]/, { message: "Mật khẩu phải chứa ít nhất 1 chữ số" })
    .regex(/[@$!%*?&]/, {
      message: "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt"
    }),
  avatar: z
    .string()
    .url({ message: "URL không hợp lệ" })
    .nonempty({ message: "Avatar là bắt buộc" }),
  address: z
    .string()
    .nonempty({ message: "Địa chỉ là bắt buộc" })
    .min(20, { message: "Địa chỉ phải chứa ít nhất 20 ký tự" }),
  role: z.string().nonempty({ message: "Vai trò là bắt buộc" }),
  status: z.boolean(),
  createdAt: z.string().nonempty({ message: "Ngày tạo là bắt buộc" }),
  createdBy: z.string().nonempty({ message: "Người tạo là bắt buộc" }),
  updatedAt: z.string().nonempty({ message: "Ngày cập nhật là bắt buộc" }),
  updatedBy: z.string().nonempty({ message: "Người cập nhật là bắt buộc" })
})

export const createUserSchema = userSchema.omit({
  userId: true,
  address: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true
})

export const updateUserSchema = userSchema.omit({
  userId: true,
  password: true,
  avatar: true,
  status: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true
})

export const userLoginSchema = userSchema.pick({
  email: true,
  password: true
})

export const userRegisterSchema = userSchema
  .pick({
    fullName: true,
    phoneNumber: true,
    email: true,
    password: true
  })
  .extend({
    confirmPassword: z
      .string()
      .nonempty({ message: "Nhập lại mật khẩu là bắt buộc" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"]
  })

export const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .nonempty({ message: "Mật khẩu hiện tại là bắt buộc" }),
    newPassword: z
      .string()
      .nonempty({ message: "Mật khẩu mới là bắt buộc" })
      .min(6, { message: "Mật khẩu mới phải có ít nhất 6 ký tự" })
      .regex(/[A-Z]/, {
        message: "Mật khẩu mới phải chứa ít nhất 1 chữ cái viết hoa"
      })
      .regex(/[a-z]/, {
        message: "Mật khẩu mới phải chứa ít nhất 1 chữ cái viết thường"
      })
      .regex(/[0-9]/, { message: "Mật khẩu mới phải chứa ít nhất 1 chữ số" })
      .regex(/[@$!%*?&]/, {
        message: "Mật khẩu mới phải chứa ít nhất 1 ký tự đặc biệt"
      }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Nhập lại mật khẩu mới là bắt buộc" })
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu mới không khớp",
    path: ["confirmPassword"]
  })

export const updateStatusUserSchema = userSchema.pick({
  status: true
})

export type UserType = z.infer<typeof userSchema>
export type UserLoginType = z.infer<typeof userLoginSchema>
export type UserRegisterType = z.infer<typeof userRegisterSchema>
export type CreateUserType = z.infer<typeof createUserSchema>
export type UpdateUserType = z.infer<typeof updateUserSchema>
export type UpdateUserPasswordType = z.infer<typeof passwordSchema>
export type UpdateStatusUserType = z.infer<
  typeof updateStatusUserSchema
>
