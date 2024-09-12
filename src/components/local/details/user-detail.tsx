import React, { useState } from "react"

import { UserType } from "@/schemas/userSchema"

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

function UserDetail({ user }: UserInformationProps) {
  const [editableField, setEditableField] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserType>(user)

  const handleEditClick = (field: string) => {
    setEditableField(editableField === field ? null : field)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof UserType
  ) => {
    setUserData({ ...userData, [field]: e.target.value })
  }

  const handleGenderChange = (value: string) => {
    setUserData({ ...userData, gender: value })
  }

  return (
    <Card className="space-y-4">
      {[
        { label: "Tên đầy đủ", value: userData.fullName, field: "fullName" },
        { label: "Biệt danh", value: userData.username, field: "username" },
        { label: "Email", value: userData.email, field: "email" },
        {
          label: "Số điện thoại",
          value: userData.phoneNumber,
          field: "phoneNumber"
        },
        {
          label: "Ngày sinh",
          value: formatDateDMY(userData.dob),
          field: "dob"
        }
      ].map((item) => (
        <div
          key={item.field}
          className="flex items-center justify-between border-b-[2px] border-gray-100 pb-4"
        >
          <div className="w-1/3 space-y-2">
            <p className="font-semibold text-primary">{item.label}</p>
            <Input
              type={
                editableField === "phoneNumber" && item.field === "phoneNumber"
                  ? "number"
                  : "text"
              }
              value={item.value}
              className={`w-full font-semibold ${
                editableField === item.field
                  ? "text-secondary"
                  : "border-white text-muted-foreground shadow-none"
              }`}
              readOnly={editableField !== item.field}
              onChange={(e) =>
                handleInputChange(e, item.field as keyof UserType)
              }
            />
          </div>
          <Button
            onClick={() => handleEditClick(item.field)}
            size="lg"
            variant={"default"}
          >
            {editableField === item.field ? "Lưu" : "Chỉnh sửa"}
          </Button>
        </div>
      ))}
      <div className="flex items-center justify-between">
        <div className="w-1/3 space-y-2">
          <p className="font-semibold text-primary">Giới tính</p>
          {editableField === "gender" ? (
            <Select
              defaultValue={userData.gender}
              onValueChange={handleGenderChange}
            >
              <SelectTrigger className="h-[41px] w-full rounded-xl border-[1px] border-primary pl-5 font-semibold text-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem className="cursor-pointer" value="Nam">
                    Nam
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="Nữ">
                    Nữ
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <Input
              value={userData.gender}
              className="w-full border-white font-semibold text-muted-foreground shadow-none"
              readOnly
            />
          )}
        </div>
        <Button
          onClick={() => handleEditClick("gender")}
          size="lg"
          variant={"default"}
        >
          {editableField === "gender" ? "Lưu" : "Chỉnh sửa"}
        </Button>
      </div>
    </Card>
  )
}

export default UserDetail
