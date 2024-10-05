import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { CreateUserType, createUserSchema } from "@/schemas/userSchema"

import { useCreateUser } from "@/apis/userApi"

import { Button } from "@/components/global/atoms/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
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

function AddUser() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

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

  const addUser = useCreateUser()

  const onSubmit = (data: CreateUserType) => {
    console.log("Form data:", data)

    addUser.mutate(data)
    reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button type="button" variant="default">
          Thêm người dùng
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle className="text-center">
              Thêm người dùng mới
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <Label>Role</Label>

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
            <div className="space-y-1">
              <Label>Họ và tên</Label>
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
            <div className="space-y-1">
              <Label>Email</Label>
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
            <div className="space-y-1">
              <Label>Số điện thoại</Label>
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

            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" onClick={handleClose}>
                Đóng
              </Button>
              <Button type="submit" variant="default">
                Tạo mới
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddUser
