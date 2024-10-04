import { defaultAvatar } from "@/configs/config"

import { UserType } from "@/schemas/userSchema"

import { useChangeStatusUser } from "@/apis/userApi"

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
  const changeUserStatus = useChangeStatusUser(userData.userId)

  const handleStatusChange = () => {
    changeUserStatus.mutate()
  }

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent className="min-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center">Chi tiết người dùng</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-4 border-primary">
              <AvatarImage
                src={userData?.avatar || defaultAvatar}
                alt={userData.fullName}
              />
            </Avatar>

            <div className="space-y-1">
              <h3>{userData.fullName}</h3>
              <p className="text-sm font-semibold text-gray-500">
                {userData.role}
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập email"
              defaultValue={userData.email}
            />
          </div>

          <div className="space-y-1">
            <Label>Số điện thoại</Label>
            <Input
              readOnly
              type="string"
              tabIndex={-1}
              placeholder="Người dùng chưa cung cấp"
              defaultValue={userData.phoneNumber}
            />
          </div>

          <div className="space-y-1">
            <Label>Địa chỉ</Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Người dùng chưa cung cấp"
              defaultValue={userData.address}
            />
          </div>

          <div className="flex justify-between gap-x-6">
            <div className="w-full">
              <Label>Ngày tạo</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                placeholder="Nhập ngày tạo"
                defaultValue={formatDateDMY(userData.createdAt)}
                className="w-full"
              />
            </div>

            <div className="w-full">
              <Label>Ngày cập nhật</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                placeholder="Nhập ngày cập nhật"
                defaultValue={formatDateDMY(userData.updatedAt)}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label>Trạng thái</Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập trạng thái"
              defaultValue={
                userData.status ? "Đang hoạt động" : "Ngừng hoạt động"
              }
            />
          </div>

          <div className="mt-4 flex justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              Đóng
            </Button>
            <Button
              type="button"
              variant="default"
              onClick={() => {
                handleStatusChange()
                onClose()
              }}
            >
              Cập nhật
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewUserDialog
