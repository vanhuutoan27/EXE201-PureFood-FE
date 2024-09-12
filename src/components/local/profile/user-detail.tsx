import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import {
  UpdateUserType,
  UserType,
  updateUserSchema
} from "@/schemas/userSchema"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import { Input } from "@/components/global/atoms/input"

interface UserInformationProps {
  user: UserType
}

function UserDetails({ user }: UserInformationProps) {
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

  // Single state to manage editing for the entire form
  const [isEditing, setIsEditing] = useState(false)

  const navigate = useNavigate()

  const changePassword = () => {
    navigate(`/mat-khau/${user.userId}`)
  }

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState)
  }
  const handleCancelClick = () => {
    setIsEditing(false)
  }

  const onSubmit = (data: UpdateUserType) => {
    console.log("Form data:", data)
    setIsEditing(false)
  }

  return (
    <>
      <div className="flex justify-between">
        <h1 className="min-h-14 text-2xl font-semibold text-primary">
          Tài khoản
        </h1>
        {!isEditing && (
          <Button onClick={handleEditClick} size="lg" variant={"default"}>
            Cập nhật
          </Button>
        )}
      </div>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center border-b-[2px] border-gray-100 pb-4">
            <div className="w-1/2 space-y-2">
              <p className="font-semibold text-primary">Tên đầy đủ</p>
              <Input
                className={`w-full font-semibold ${
                  isEditing
                    ? "text-secondary"
                    : "border-white text-muted-foreground shadow-none"
                }`}
                readOnly={!isEditing}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center border-b-[2px] border-gray-100 pb-4">
            <div className="w-1/2 space-y-2">
              <p className="font-semibold text-primary">Số điện thoại</p>
              <Input
                type="number"
                className={`w-full font-semibold ${
                  isEditing
                    ? "text-secondary"
                    : "border-white text-muted-foreground shadow-none"
                }`}
                readOnly={!isEditing}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center border-b-[2px] border-gray-100 pb-4">
            <div className="w-1/2 space-y-2">
              <p className="font-semibold text-primary">Địa chỉ</p>
              <Input
                className={`w-full font-semibold ${
                  isEditing
                    ? "text-secondary"
                    : "border-white text-muted-foreground shadow-none"
                }`}
                readOnly={!isEditing}
                {...register("address")}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center border-b-[2px] border-gray-100 pb-4">
            <div className="w-1/2 space-y-2">
              <p className="font-semibold text-primary">Email</p>
              <Input
                className={`w-full font-semibold ${
                  isEditing
                    ? "text-secondary"
                    : "border-white text-muted-foreground shadow-none"
                }`}
                readOnly={!isEditing}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pb-4">
            <div className="w-1/2 space-y-2">
              <p className="font-semibold text-primary">Mật khẩu</p>
              <Input
                className={`w-full font-semibold ${
                  isEditing
                    ? "text-secondary"
                    : "border-white text-muted-foreground shadow-none"
                }`}
                readOnly
                defaultValue={"*********"}
              />
            </div>
            {isEditing && (
              <Button size="lg" variant={"default"} onClick={changePassword}>
                Cập nhật
              </Button>
            )}
          </div>

          {isEditing && (
            <div className="flex justify-end space-x-4">
              <Button
                type="reset"
                size="lg"
                variant={"outline"}
                onClick={handleCancelClick}
              >
                Hủy
              </Button>
              <Button type="submit" size="lg" variant={"default"}>
                Lưu
              </Button>
            </div>
          )}
        </form>
      </Card>
    </>
  )
}

export default UserDetails
