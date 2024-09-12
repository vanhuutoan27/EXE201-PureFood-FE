import { z } from "zod"

export const userSchema = z.object({
  userId: z.string().nonempty({ message: "User ID is required" }),
  fullName: z.string().nonempty({ message: "Không được bỏ trống" }),
  email: z
    .string()
    .email({ message: "Email khả dụng" })
    .nonempty({ message: "Không được bỏ trống" }),
  phoneNumber: z
    .string()
    .nonempty({ message: "Không được bỏ trống" })
    .min(10, { message: "Nhập ít nhất 10 chữ số" }),
  password: z
    .string()
    .nonempty({ message: "Không được bỏ trống" })
    .min(6, { message: "Mật khẩu phải chứa ít nhất 6 ký tự" })
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
  avatar: z.string().url().nonempty({ message: "Không được bỏ trống" }),
  role: z.string().nonempty({ message: "Không được bỏ trống" }),
  status: z.boolean(),
  createdAt: z.string().nonempty({ message: "Không được bỏ trống" }),
  updatedAt: z.string().nonempty({ message: "Không được bỏ trống" }),
  createdBy: z.string().nonempty({ message: "Không được bỏ trống" }),
  updatedBy: z.string().nonempty({ message: "Không được bỏ trống" })
})

export const createUserSchema = userSchema.omit({
  userId: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true
})

export const updateUserSchema = userSchema.omit({
  userId: true,
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
    confirmPassword: z.string().nonempty({ message: "Không được bỏ trống" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không trùng",
    path: ["confirmPassword"]
  })

export const passwordSchema = z
  .object({
    currentPassword: z.string().nonempty({ message: "Không được bỏ trống" }),
    newPassword: z
      .string()
      .nonempty({ message: "Không được bỏ trống" })
      .min(6, { message: "Mật khẩu phải chứa ít nhất 6 ký tự" })
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
    confirmPassword: z.string().nonempty({ message: "Không được bỏ trống" })
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu không trùng",
    path: ["confirmPassword"]
  })

export type UserType = z.infer<typeof userSchema>
export type UserLoginType = z.infer<typeof userLoginSchema>
export type UserRegisterType = z.infer<typeof userRegisterSchema>
export type CreateUserType = z.infer<typeof createUserSchema>
export type UpdateUserType = z.infer<typeof updateUserSchema>
export type UpdateUserPasswordType = z.infer<typeof passwordSchema>
