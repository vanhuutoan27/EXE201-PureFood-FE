"use client"

import { useState } from "react"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import usePointerEvents from "@/hooks/usePointerEvents"

import { PromotionType } from "@/schemas/promotionSchema"

import { useUpdateStatusPromotion } from "@/apis/promotionApi"

import { formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/global/atoms/dropdown-menu"

import ViewPromotionDialog from "./view-promotion"

export const columns: ColumnDef<PromotionType>[] = [
  {
    accessorKey: "promotionName",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tên mã
      </span>
    )
  },
  {
    accessorKey: "discountCode",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Mã khuyến mã
      </span>
    )
  },
  {
    accessorKey: "discountPercentage",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Giảm giá
      </span>
    ),
    cell: ({ row }) => {
      const discountPercentage = row.original.discountPercentage
      return <span>{discountPercentage}%</span>
    }
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Số lượng
      </span>
    )
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Còn lại
      </span>
    )
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ngày bắt đầu
      </span>
    ),
    cell: ({ row }) => {
      const startDate = row.original.startDate
      return <span>{formatDateDMY(startDate)}</span>
    }
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => (
      <span
        className="cursor-pointer select-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ngày hết hạn
      </span>
    ),
    cell: ({ row }) => {
      const endDate = row.original.endDate
      return <span>{formatDateDMY(endDate)}</span>
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
      const status = row.original.status ? "Đang áp dụng" : "Tạm ngưng"
      return <span>{status}</span>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const promotion = row.original
      const updateStatus = useUpdateStatusPromotion(promotion.promotionId)
      const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

      usePointerEvents(isViewDialogOpen)

      const handleViewDetailsClick = () => {
        setIsViewDialogOpen(true)
      }

      const handleStatusChange = () => {
        updateStatus.mutate()
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
                onClick={() =>
                  navigator.clipboard.writeText(promotion.promotionId)
                }
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
            <ViewPromotionDialog
              promotionData={promotion}
              onClose={() => setIsViewDialogOpen(false)}
            />
          )}
        </>
      )
    }
  }
]
