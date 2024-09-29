"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Check, MoreHorizontal, X } from "lucide-react"

import { ProductType } from "@/schemas/productSchema"

import { capitalize, formatCurrency, formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/global/atoms/dropdown-menu"

export const columns: ColumnDef<ProductType>[] = [
  // {
  //   accessorKey: "productId",
  //   header: "ID"
  // },
  {
    accessorKey: "productName",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tên sản phẩm
        </span>
      )
    }
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nhà cung cấp
        </span>
      )
    }
  },
  {
    accessorKey: "weight",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Khối lượng
        </span>
      )
    }
  },
  {
    accessorKey: "unit",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Đơn vị
        </span>
      )
    },
    cell: ({ row }) => {
      const unit = row.original.unit
      return <span>{capitalize(unit)}</span>
    }
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Giá
        </span>
      )
    },
    cell: ({ row }) => {
      const price = row.original.price
      return <span>{formatCurrency(price)}</span>
    }
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tồn kho
        </span>
      )
    }
  },
  {
    accessorKey: "origin",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Xuất xứ
        </span>
      )
    }
  },
  {
    accessorKey: "organic",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hữu cơ
        </span>
      )
    },
    cell: ({ row }) => {
      const organic = row.original.organic ? (
        <Check size={16} />
      ) : (
        <X size={16} />
      )
      return <span className="flex justify-start pl-4">{organic}</span>
    }
  },
  {
    accessorKey: "entryDate",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày nhập
        </span>
      )
    },
    cell: ({ row }) => {
      const entryDate = row.original.entryDate
      return <span>{formatDateDMY(entryDate)}</span>
    }
  },
  {
    accessorKey: "expiryDate",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày hết hạn
        </span>
      )
    },
    cell: ({ row }) => {
      const entryDate = row.original.entryDate
      return <span>{formatDateDMY(entryDate)}</span>
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
      const product = row.original

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
              onClick={() => navigator.clipboard.writeText(product.productId)}
            >
              Copy Product ID
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
