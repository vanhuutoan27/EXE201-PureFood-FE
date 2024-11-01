import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { useAuthContext } from "@/contexts/auth-context"

import { UpdateUserType, updateUserSchema } from "@/schemas/userSchema"

import { useUpdateUser } from "@/apis/userApi"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import { Input } from "@/components/global/atoms/input"

import Loading from "../Loading"

function UserAccount() {
  const { user } = useAuthContext()

  const { mutate: updateUser } = useUpdateUser(user?.userId)

  if (!user) return <Loading />

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateUserType>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      fullName: user.fullName,
      address: user.address,
      phoneNumber: user.phoneNumber,
      email: user.email
    }
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    setIsEditing((prevState) => !prevState)
  }
  const handleCancel = () => {
    setIsEditing(false)
  }

  const onSubmit = (data: UpdateUserType) => {
    // console.log("Form data:", data)
    updateUser(data)
    setIsEditing(false)
  }

  return (
    <>
      <div className="mb-4 flex min-h-14 justify-between">
        <h3 className="text-2xl font-bold text-primary">Tài khoản</h3>

        {!isEditing && (
          <Button type="button" variant="default" onClick={handleEdit}>
            Cập nhật
          </Button>
        )}
      </div>

      <Card className="px-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex w-1/2 flex-col space-y-2">
            <h3 className="ml-1 font-semibold text-primary">Họ và tên</h3>

            <Input
              readOnly={!isEditing}
              type="text"
              {...register("fullName")}
              className={`w-full font-semibold ${
                isEditing
                  ? "text-secondary"
                  : "border-white text-muted-foreground shadow-none"
              }`}
            />
            {errors.fullName && (
              <p className="error-lens">{errors.fullName.message}</p>
            )}
          </div>

          <div className="flex w-1/2 flex-col space-y-2">
            <h3 className="ml-1 font-semibold text-primary">Số điện thoại</h3>

            <Input
              readOnly={!isEditing}
              type="text"
              {...register("phoneNumber")}
              className={`w-full font-semibold ${
                isEditing
                  ? "text-secondary"
                  : "border-white text-muted-foreground shadow-none"
              }`}
              placeholder="Nhập số điện thoại của bạn"
            />
            {errors.phoneNumber && (
              <p className="error-lens">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="flex w-1/2 flex-col space-y-2">
            <h3 className="ml-1 font-semibold text-primary">Địa chỉ</h3>
            <Input
              readOnly={!isEditing}
              type="text"
              {...register("address")}
              className={`w-full font-semibold ${
                isEditing
                  ? "text-secondary"
                  : "border-white text-muted-foreground shadow-none"
              }`}
              placeholder="Nhập địa chỉ của bạn"
            />
            {errors.address && (
              <p className="error-lens">{errors.address.message}</p>
            )}
          </div>

          <div className="flex w-1/2 flex-col space-y-2">
            <h3 className="ml-1 font-semibold text-primary">Email</h3>
            <Input
              type="email"
              readOnly={!isEditing}
              {...register("email")}
              className={`w-full font-semibold ${
                isEditing
                  ? "text-secondary"
                  : "border-white text-muted-foreground shadow-none"
              }`}
            />
            {errors.email && (
              <p className="error-lens">{errors.email.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex w-1/2 flex-col space-y-2">
              <h3 className="ml-1 font-semibold text-primary">Mật khẩu</h3>

              <Input
                readOnly
                type="password"
                defaultValue={"********"}
                className={`w-full font-semibold ${
                  isEditing
                    ? "text-secondary"
                    : "border-white text-muted-foreground shadow-none"
                }`}
              />
            </div>

            {isEditing && (
              <Link to={`/mat-khau/${user.userId}`}>
                <Button type="button" variant="default">
                  Cập nhật
                </Button>
              </Link>
            )}
          </div>

          {isEditing && (
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="ghost" onClick={handleCancel}>
                Hủy
              </Button>
              <Button type="submit" variant="default">
                Lưu
              </Button>
            </div>
          )}
        </form>
      </Card>
    </>
  )
}

export default UserAccount
