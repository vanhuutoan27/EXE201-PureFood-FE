import { useRef } from "react"

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
  userData: UserType
  onClose: () => void
}

function ViewUserDialog({ userData, onClose }: ViewUserProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)

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
                src={userData?.avatar || defaultAvatar}
                alt={userData.fullName}
                className="select-none object-cover"
              />
            </Avatar>

            <div className="space-y-2">
              <h3 className="font-semibold text-secondary">
                {userData.fullName}
              </h3>
              <p className="text-sm font-semibold text-gray-500">
                {userData.role}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-secondary">Email</Label>
            <Input
              type="text"
              readOnly
              placeholder="Nhập email"
              defaultValue={userData.email}
            />
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-secondary">
              Số điện thoại
            </Label>
            <Input
              type="number"
              readOnly
              placeholder="Nhập số điện thoại"
              defaultValue={userData.phoneNumber}
            />
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-secondary">Địa chỉ</Label>
            <Input
              type="text"
              readOnly
              placeholder="Nhập địa chỉ"
              defaultValue={userData.address}
            />
          </div>

          <div className="flex justify-between gap-4">
            <div className="w-full">
              <Label className="font-semibold text-secondary">Ngày tạo</Label>
              <Input
                type="text"
                readOnly
                placeholder="Nhập ngày tạo"
                defaultValue={formatDateDMY(userData.createdAt)}
                className="w-full"
              />
            </div>

            <div className="w-full">
              <Label className="font-semibold text-secondary">
                Ngày cập nhật
              </Label>
              <Input
                type="text"
                readOnly
                placeholder="Nhập ngày cập nhật"
                defaultValue={formatDateDMY(userData.updatedAt)}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-secondary">Trạng thái</Label>
            <Input
              type="text"
              readOnly
              placeholder="Nhập trạng thái"
              defaultValue={
                userData.status ? "Đang hoạt động" : "Ngừng hoạt động"
              }
            />
          </div>

          <div className="mt-4 flex justify-between">
            <Button type="button" variant="default">
              Cập nhật
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
