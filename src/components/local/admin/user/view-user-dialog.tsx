import { useRef, useState } from "react"

import { defaultAvatar } from "@/configs/config"

import { UserType } from "@/schemas/userSchema"

import { formatDateDMY } from "@/lib/utils"

import { Avatar, AvatarImage } from "@/components/global/atoms/avatar"
import { Button } from "@/components/global/atoms/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/global/atoms/dialog"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"

interface ViewUserProps {
  user: UserType
  onClose: () => void
}

function ViewUserDialog({ user, onClose }: ViewUserProps) {
  console.log(user.fullName)
  const dialogRef = useRef<HTMLDivElement | null>(null)

  const handleUpdateStatus = () => {}

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent ref={dialogRef} className="min-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold text-secondary">
            Chi tiết người dùng
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 cursor-pointer select-none border-4 border-primary">
              <AvatarImage
                src={user?.avatar || defaultAvatar}
                alt="avatar"
                className="object-cover"
              />
            </Avatar>
            <div>
              <h1 className="font-semibold text-secondary">{user.fullName}</h1>
              <p className="text-sm font-semibold text-gray-400">{user.role}</p>
            </div>
          </div>

          <div>
            <Label className="ml-1 font-semibold text-secondary">Email</Label>
            <Input
              type="text"
              readOnly
              placeholder="Nhập email"
              defaultValue={user.email}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="ml-1 font-semibold text-secondary">
              Số điện thoại
            </Label>
            <Input
              type="number"
              readOnly
              placeholder="Nhập số điện thoại"
              defaultValue={user.phoneNumber}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="ml-1 font-semibold text-secondary">Địa chỉ</Label>
            <Input
              type="text"
              readOnly
              placeholder="Nhập địa chỉ"
              defaultValue={user.address}
              className="mt-1"
            />
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <Label className="ml-1 font-semibold text-secondary">
                Ngày tạo
              </Label>
              <Input
                type="text"
                readOnly
                placeholder="Nhập ngày tạo"
                defaultValue={formatDateDMY(user.createdAt)}
                className="mt-1 w-full"
              />
            </div>

            <div className="w-full">
              <Label className="ml-1 font-semibold text-secondary">
                Ngày cập nhật
              </Label>
              <Input
                type="text"
                readOnly
                placeholder="Nhập ngày cập nhật"
                defaultValue={formatDateDMY(user.updatedAt)}
                className="mt-1 w-full"
              />
            </div>
          </div>
          <div>
            <Label className="ml-1 font-semibold text-secondary">
              Trạng thái
            </Label>
            <Input
              type="text"
              readOnly
              placeholder="Nhập trạng thái"
              defaultValue={user.status ? "Đang hoạt động" : "Ngừng hoạt động"}
              className="mt-1"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <Button
              type="button"
              variant="default"
              onClick={handleUpdateStatus}
            >
              Đổi trạng thái
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Đóng
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewUserDialog
