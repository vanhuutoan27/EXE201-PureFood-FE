import { defaultAvatar } from "@/configs/config"
import { LogOut, PackageCheck, ShoppingBag, User } from "lucide-react"
import { Link } from "react-router-dom"

import { UserType } from "@/schemas/userSchema"

import { scrollToTop } from "@/lib/utils"

import { Avatar, AvatarImage } from "../atoms/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../atoms/dropdown-menu"

interface UserButtonProps {
  variant?: "default" | "ghost"
  userData: UserType
}

function UserButton({ variant = "default", userData }: UserButtonProps) {
  const menuItems = [
    {
      icon: User,
      label: "Hồ sơ",
      link: `/thong-tin-ca-nhan/${userData.userId}`
    },
    {
      icon: ShoppingBag,
      label: "Giỏ hàng",
      link: `/gio-hang/${userData.userId}`
    },
    {
      icon: PackageCheck,
      label: "Đơn hàng",
      link: `/don-hang/${userData.userId}`
    },
    {
      icon: LogOut,
      label: "Đăng xuất",
      link: "/login",
      separator: true,
      onClick: () => {
        console.log("Logged out")
      }
    }
  ]

  return (
    <DropdownMenu>
      <div className="flex items-center gap-4">
        <span className="flex flex-col text-right">
          <span className="slow cursor-pointer text-sm font-semibold text-primary">
            {userData.fullName}
          </span>
          <span
            className={`text-xs ${variant === "default" ? "text-secondary" : "text-white"}`}
          >
            {userData.email}
          </span>
        </span>
        <DropdownMenuTrigger asChild className="relative select-none">
          <Avatar>
            <AvatarImage src={userData.avatar || defaultAvatar} />
          </Avatar>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="absolute -right-6 mt-6 w-40 bg-white p-2">
        <DropdownMenuGroup>
          {menuItems.map(
            (item, index) =>
              item && (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => {
                    scrollToTop()
                    if (item.onClick) item.onClick()
                  }}
                >
                  {item.separator && <DropdownMenuSeparator />}
                  <DropdownMenuItem
                    className={`group mb-2 cursor-pointer ${item.separator ? "mb-0 mt-2" : ""}`}
                  >
                    <item.icon className={"slow mr-4"} size={20} />
                    <span className={"slow text-sm"}>{item.label}</span>
                  </DropdownMenuItem>
                </Link>
              )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
