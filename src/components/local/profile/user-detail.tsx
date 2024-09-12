import React, { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  UpdateUserType,
  UserType,
  updateUserSchema
} from "@/schemas/userSchema"

import { formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import { Input } from "@/components/global/atoms/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"

interface UserInformationProps {
  user: UserType
}

function UserDetails({ user }: UserInformationProps) {
  const userData = user

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateUserType>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      fullName: userData.fullName,
      phoneNumber: userData.phoneNumber,
      email: userData.email
    }
  })

  const userFields = [
    { label: "Tên đầy đủ", field: "fullName" },
    { label: "Email", field: "email" },
    { label: "Số điện thoại", field: "phoneNumber" }
  ]

  const [isEditing, setIsEditing] = useState<string | null>(null)

  const handleEditClick = (field: string) => {
    setIsEditing(isEditing === field ? null : field)
  }

  const onSubmit = (data: UpdateUserType) => {
    console.log("Form data:", data)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {userFields.map((item) => (
          <div key={item.field} className="flex items-center justify-between">
            <div className="w-1/3 space-y-2">
              <p className="font-semibold text-primary">{item.label}</p>
              <Input
                type={
                  isEditing === "phoneNumber" && item.field === "phoneNumber"
                    ? "number"
                    : "text"
                }
                className={`w-full font-semibold ${
                  isEditing === item.field
                    ? "text-secondary"
                    : "border-white text-muted-foreground shadow-none"
                }`}
                readOnly={isEditing !== item.field}
                {...register(item.field as keyof UpdateUserType)}
              />
              {errors[item.field as keyof UpdateUserType] && (
                <p className="text-red-500">
                  {errors[item.field as keyof UpdateUserType]?.message}
                </p>
              )}
            </div>
            <Button
              onClick={() =>
                isEditing === item.field
                  ? handleSubmit(onSubmit)()
                  : handleEditClick(item.field)
              }
              size="lg"
              variant={"default"}
            >
              {isEditing === item.field ? "Lưu" : "Chỉnh sửa"}
            </Button>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <Input
            type="text"
            className={`w-full font-semibold ${
              isEditing
                ? "text-secondary"
                : "border-white text-muted-foreground shadow-none"
            }`}
            readOnly={!isEditing}
            {...register("fullName")}
          />
        </div>
      </form>
    </Card>
  )
}

export default UserDetails
