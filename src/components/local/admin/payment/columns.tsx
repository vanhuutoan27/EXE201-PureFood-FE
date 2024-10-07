"use client"

import { ColumnDef } from "@tanstack/react-table"

import { PaymentType } from "@/schemas/paymentSchema"

import { formatCurrency, formatDateDMY } from "@/lib/utils"

export const columns: ColumnDef<PaymentType>[] = [
  {
    accessorKey: "paymentId",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Mã thanh toán
      </span>
    )
  },
  {
    accessorKey: "orderId",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Mã đơn hàng
      </span>
    )
  },
  {
    accessorKey: "customerName",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tên khách hàng
      </span>
    )
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Số tiền
      </span>
    ),
    cell: ({ row }) => {
      const amount = row.original.amount
      return <span>{formatCurrency(amount)}</span>
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
  }
]
