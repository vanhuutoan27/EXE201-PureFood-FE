"use client"

import { useState } from "react"

import { ColumnDef } from "@tanstack/react-table"
import { Check, MoreHorizontal, X } from "lucide-react"

import { ProductType } from "@/schemas/productSchema"

import { useChangeStatusProduct } from "@/apis/productApi"

import { capitalize, formatCurrency, formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/global/atoms/dropdown-menu"

import ViewProductDialog from "./view-product"

export const columns: ColumnDef<ProductType>[] = [
  // {
  //   accessorKey: "productId",
  //   header: "ID"
  // },
  {
    accessorKey: "productName",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tên sản phẩm
      </span>
    )
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nhà cung cấp
      </span>
    )
  },
  {
    accessorKey: "weight",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Khối lượng
      </span>
    )
  },
  {
    accessorKey: "unit",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Đơn vị
      </span>
    ),
    cell: ({ row }) => {
      const unit = row.original.unit
      return <span>{capitalize(unit)}</span>
    }
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Giá
      </span>
    ),
    cell: ({ row }) => {
      const price = row.original.price
      return <span>{formatCurrency(price)}</span>
    }
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tồn kho
      </span>
    )
  },
  {
    accessorKey: "origin",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Xuất xứ
      </span>
    )
  },
  {
    accessorKey: "organic",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Hữu cơ
      </span>
    ),
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
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ngày nhập
      </span>
    ),
    cell: ({ row }) => {
      const entryDate = row.original.entryDate
      return <span>{formatDateDMY(entryDate)}</span>
    }
  },
  {
    accessorKey: "expiryDate",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ngày hết hạn
      </span>
    ),
    cell: ({ row }) => {
      const entryDate = row.original.entryDate
      return <span>{formatDateDMY(entryDate)}</span>
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
      const status = row.original.status ? "Đang bán" : "Tạm ngưng"
      return <span>{status}</span>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
      const changeStatusMutation = useChangeStatusProduct(product.productId)
      const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

      const handleViewDetailsClick = () => {
        setIsViewDialogOpen(true)
      }

      const handleStatusChange = () => {
        const newStatus = !product.status
        changeStatusMutation.mutate({ status: newStatus })
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
                onClick={() => navigator.clipboard.writeText(product.productId)}
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
            <ViewProductDialog
              productData={product}
              onClose={() => setIsViewDialogOpen(false)}
            />
          )}
        </>
      )
    }
  }
]
