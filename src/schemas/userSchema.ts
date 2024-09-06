import { z } from "zod"

export const userSchema = z.object({
  userId: z.string().nonempty({ message: "User ID is required" }),
  phoneNumber: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .min(10, { message: "Phone number must be at least 10 characters long" }),
  fullName: z.string().nonempty({ message: "Full name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter"
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter"
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character"
    }),
  avatar: z.string().url().nonempty({ message: "Avatar is required" }),
  role: z.string().nonempty({ message: "Role is required" }),
  status: z.boolean(),
  createdAt: z.string().nonempty({ message: "Created at is required" }),
  updatedAt: z.string().nonempty({ message: "Updated at is required" }),
  createdBy: z.string().nonempty({ message: "Created by is required" }),
  updatedBy: z.string().nonempty({ message: "Updated by is required" })
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
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm Password is required" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  })

export type UserType = z.infer<typeof userSchema>
export type UserLoginType = z.infer<typeof userLoginSchema>
export type UserRegisterType = z.infer<typeof userRegisterSchema>
export type CreateUserType = z.infer<typeof createUserSchema>
export type UpdateUserType = z.infer<typeof updateUserSchema>
