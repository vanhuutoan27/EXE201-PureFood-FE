"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { OrderType } from "@/schemas/orderSchema"

import {
  capitalize,
  formatCurrency,
  formatDateDMY,
  getOrderStatus
} from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/global/atoms/dropdown-menu"

export const columns: ColumnDef<OrderType>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Khách hàng
        </span>
      )
    }
  },
  {
    accessorKey: "phoneNumber",
    header: "Số điện thoại",
    cell: ({ row }) => {
      const phoneNumber = row.original.phoneNumber
      return <span>{capitalize(phoneNumber)}</span>
    }
  },
  {
    accessorKey: "paymentMethod",
    header: "Thanh toán",
    cell: ({ row }) => {
      const paymentMethod = row.original.paymentMethod
      return <span>{paymentMethod}</span>
    }
  },
  {
    accessorKey: "totalAmount",
    header: "Tổng tiền",
    cell: ({ row }) => {
      const totalAmount = row.original.totalAmount
      return <span>{formatCurrency(totalAmount)}</span>
    }
  },

  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt
      return <span>{formatDateDMY(createdAt)}</span>
    }
  },
  {
    accessorKey: "updatedAt",
    header: "Ngày cập nhật",
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt
      return <span>{formatDateDMY(updatedAt)}</span>
    }
  },
  {
    accessorKey: "orderStatus",
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
      const orderStatus = row.original.orderStatus
      const { statusColor, statusValue } = getOrderStatus(orderStatus)

      return (
        <span className={`${statusColor} font-semibold`}>{statusValue}</span>
      )
    }
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuSeparator />
            <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
