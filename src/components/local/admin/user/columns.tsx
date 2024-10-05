"use client"

import { useState } from "react"

import { defaultAvatar } from "@/configs/config"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import usePointerEvents from "@/hooks/usePointerEvents"

import { UserType } from "@/schemas/userSchema"

import { useChangeStatusUser } from "@/apis/userApi"

import { formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/global/atoms/dropdown-menu"
import LazyImage from "@/components/global/molecules/lazy-image"

import ViewUserDialog from "./view-user"

export const columns: ColumnDef<UserType>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Họ tên
      </span>
    ),
    cell: ({ row }) => {
      const avatar = row.original.avatar
      const fullName = row.original.fullName

      return (
        <div className="flex items-center gap-4">
          <LazyImage
            src={avatar || defaultAvatar}
            alt={fullName}
            className="h-16 min-h-16 w-16 min-w-16 select-none rounded-xl"
          />

          <h3 className="font-semibold">{fullName}</h3>
        </div>
      )
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
      </span>
    )
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Số điện thoại
      </span>
    )
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Địa chỉ
      </span>
    ),
    cell: ({ row }) => {
      const address = row.original.address
      return <span>{address || "Chưa cung cấp"}</span>
    }
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ngày tạo
      </span>
    ),
    cell: ({ row }) => {
      const createdAt = row.original.createdAt
      return <span>{formatDateDMY(createdAt)}</span>
    }
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ngày cập nhật
      </span>
    ),
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt
      return <span>{formatDateDMY(updatedAt)}</span>
    }
  },
  {
    accessorKey: "updatedBy",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Người cập nhật
      </span>
    ),
    cell: ({ row }) => {
      const updatedBy = row.original.updatedBy
      return <span>{updatedBy || "Không"}</span>
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Trạng thái
      </span>
    ),
    cell: ({ row }) => {
      const status = row.original.status ? "Đang hoạt động" : "Ngừng hoạt động"
      return <span>{status}</span>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
      const changeUserStatus = useChangeStatusUser(user.userId)
      const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

      usePointerEvents(isViewDialogOpen)

      const handleViewDetailsClick = () => {
        setIsViewDialogOpen(true)
      }

      const handleStatusChange = () => {
        changeUserStatus.mutate()
      }

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.userId)}
              >
                Sao chép ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleViewDetailsClick}>
                Xem chi tiết
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleStatusChange}>
                Đổi trạng thái
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isViewDialogOpen && (
            <ViewUserDialog
              userData={user}
              onClose={() => setIsViewDialogOpen(false)}
            />
          )}
        </>
      )
    }
  }
]
