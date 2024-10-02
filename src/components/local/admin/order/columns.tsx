"use client"

import { useState } from "react"

import { ColumnDef } from "@tanstack/react-table"
import { Check, MoreHorizontal, X } from "lucide-react"

import { OrderType } from "@/schemas/orderSchema"

import { capitalize, formatCurrency, formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/global/atoms/dropdown-menu"

import ViewOrderDialog from "./view-order"

export const columns: ColumnDef<OrderType>[] = [
  {
    accessorKey: "customerInfo.fullName",
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
    accessorKey: "customerInfo.phoneNumber",
    header: "Số điện thoại",
    cell: ({ row }) => {
      const phoneNumber = row.original.customerInfo.phoneNumber
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
    accessorKey: "orderSummary.totalAmount",
    header: "Tổng tiền",
    cell: ({ row }) => {
      const totalAmount = row.original.orderSummary.totalAmount
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

      let statusValue
      let statusColor

      switch (orderStatus) {
        case "Pending":
          statusValue = "Đang chờ"
          statusColor = "text-gray-500"
          break
        case "Processing":
          statusValue = "Đang xử lý"
          statusColor = "text-yellow-500"
          break
        case "Shipping":
          statusValue = "Đang giao hàng"
          statusColor = "text-green-500"
          break
        case "Completed":
          statusValue = "Đã hoàn thành"
          statusColor = "text-blue-500"
          break
        default:
          statusValue = "Đã hủy"
          statusColor = "text-red-500"
      }

      return (
        <span className={`${statusColor} font-semibold`}>{statusValue}</span>
      )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original

      const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

      const handleViewDetailsClick = () => {
        setIsViewDialogOpen(true)
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
                onClick={() => navigator.clipboard.writeText(order.orderId)}
              >
                Sao chép ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleViewDetailsClick}>
                Xem chi tiết
              </DropdownMenuItem>
              <DropdownMenuItem>Đổi trạng thái</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isViewDialogOpen && (
            <ViewOrderDialog
              orderData={order}
              onClose={() => setIsViewDialogOpen(false)}
            />
          )}
        </>
      )
    }
  }
]
