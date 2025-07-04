"use client"

import { useState } from "react"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import usePointerEvents from "@/hooks/usePointerEvents"

import { OrderType } from "@/schemas/orderSchema"

import { useCancelStatusOrder } from "@/apis/orderApi"

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

import ViewOrderDialog from "./view-order"

export const columns: ColumnDef<OrderType>[] = [
  {
    accessorKey: "orderId",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Mã đơn hàng
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
      return <span className="uppercase">{paymentMethod}</span>
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
    cell: ({ row }) => {
      const order = row.original
      const updateStatus = useCancelStatusOrder(order.orderId)
      const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

      const handleViewDetailsClick = () => {
        setIsViewDialogOpen(true)
      }

      usePointerEvents(isViewDialogOpen)

      const handleStatusChange = () => {
        const newStatus = !order.orderStatus
        updateStatus.mutate({ orderStatus: newStatus })
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
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleViewDetailsClick}>
                Xem chi tiết
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleStatusChange}
                disabled={order.orderStatus === "Cancelled"}
              >
                Đổi trạng thái
              </DropdownMenuItem>
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
