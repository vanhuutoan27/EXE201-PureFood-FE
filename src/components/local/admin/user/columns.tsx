"use client"

import { useState } from "react"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { UserType } from "@/schemas/userSchema"

import { formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/global/atoms/dropdown-menu"
import LazyImage from "@/components/global/molecules/lazy-image"

import ViewUserDialog from "./view-user"

export const columns: ColumnDef<UserType>[] = [
  // {
  //   accessorKey: "userId",
  //   header: "ID"
  // },
  {
    accessorKey: "avatar",
    header: "",
    cell: ({ row }) => {
      const avatar = row.original.avatar
      const fullName = row.original.fullName

      return (
        <LazyImage
          src={avatar}
          alt={fullName}
          className="h-16 min-h-16 w-16 min-w-16 select-none rounded-xl"
        />
      )
    }
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Họ tên
        </span>
      )
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
        </span>
      )
    }
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Số điện thoại
        </span>
      )
    }
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Địa chỉ
        </span>
      )
    }
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày tạo
        </span>
      )
    },
    cell: ({ row }) => {
      const createdAt = row.original.createdAt
      return <span>{formatDateDMY(createdAt)}</span>
    }
  },

  {
    accessorKey: "createdBy",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Người tạo
        </span>
      )
    },
    cell: ({ row }) => {
      const createdBy = row.original.createdBy
      return <span>{createdBy}</span>
    }
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày cập nhật
        </span>
      )
    },
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt
      return <span>{formatDateDMY(updatedAt)}</span>
    }
  },
  {
    accessorKey: "updatedBy",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Người cập nhật
        </span>
      )
    },
    cell: ({ row }) => {
      const updatedBy = row.original.updatedBy
      return <span>{updatedBy}</span>
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Trạng thái
        </span>
      )
    },
    cell: ({ row }) => {
      const status = row.original.status ? "Đang hoạt động" : "Ngừng hoạt động"
      return <span>{status}</span>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original

      const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

      const handleViewDetailsClick = () => {
        setIsViewDialogOpen(true)
      }

      // const handleStatusChange = () => {
      //   changeProductStatus(product.productId)
      // }

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
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => navigator.clipboard.writeText(user.userId)}
              >
                <span className="duration-300 hover:text-primary">
                  Sao chép ID
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleViewDetailsClick}
                className="cursor-pointer"
              >
                <span className="duration-300 hover:text-primary">
                  Xem chi tiết
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span className="duration-300 hover:text-primary">
                  Đổi trạng thái
                </span>
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
