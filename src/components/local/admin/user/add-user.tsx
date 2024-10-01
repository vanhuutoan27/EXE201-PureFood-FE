import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { CreateUserType, createUserSchema } from "@/schemas/userSchema"

import { Button } from "@/components/global/atoms/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/global/atoms/dialog"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"

interface AddUserProps {
  onClose: () => void
}

function AddUser({ onClose }: AddUserProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<CreateUserType>({
    resolver: zodResolver(createUserSchema)
  })

  const handleRoleChange = (value: string) => {
    setValue("role", value)
  }

  const onSubmit = (data: CreateUserType) => {
    console.log("Form data:", data)
    onClose()
    reset()
  }

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle className="text-center">
              Thêm người dùng mới
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label className="font-semibold text-secondary">Role</Label>

              <Select onValueChange={handleRoleChange}>
                <SelectTrigger className="mb-3 mt-1 h-10 rounded-xl border-[1px] pl-5">
                  <SelectValue placeholder="Chọn role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Admin">Quản trị viên</SelectItem>
                    <SelectItem value="Customer">Khách hàng</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="error-lens">{errors.role.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="font-semibold text-secondary">Họ và tên</Label>
              <Input
                type="text"
                tabIndex={-1}
                placeholder="Nhập họ và tên"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="error-lens">{errors.fullName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="font-semibold text-secondary">Email</Label>
              <Input
                type="text"
                tabIndex={-1}
                placeholder="Nhập email"
                {...register("email")}
              />
              {errors.email && (
                <p className="error-lens">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="font-semibold text-secondary">
                Số điện thoại
              </Label>
              <Input
                type="string"
                tabIndex={-1}
                placeholder="Nhập số điện thoại"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="error-lens">{errors.phoneNumber.message}</p>
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
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddUser
