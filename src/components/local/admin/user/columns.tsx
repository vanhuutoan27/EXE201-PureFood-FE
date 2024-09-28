"use client"

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
        <img
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

      return (
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
              onClick={() => navigator.clipboard.writeText(user.userId)}
            >
              Copy User ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Change Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
