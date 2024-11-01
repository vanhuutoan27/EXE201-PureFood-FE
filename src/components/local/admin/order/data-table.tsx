"use client"

import { useState } from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table"

import { Button } from "@/components/global/atoms/button"
import { Input } from "@/components/global/atoms/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/global/atoms/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onExport: () => void
}

export function DataTable<TData, TValue>({
  columns,
  data,
  currentPage,
  totalOrders,
  visibleOrders,
  onNextPage,
  onPreviousPage,
  onExport
}: DataTableProps<TData, TValue> & {
  currentPage: number
  totalOrders: number
  visibleOrders: number
  onNextPage: () => void
  onPreviousPage: () => void
}) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters
    }
  })

  const maxPage = Math.ceil(totalOrders / visibleOrders)

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Tìm kiếm theo tên khách hàng..."
          value={
            (table.getColumn("fullName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("fullName")?.setFilterValue(event.target.value)
          }
          className="w-2/3 border-input bg-white"
        />

        <Button type="button" variant="default" onClick={onExport}>
          Xuất đơn hàng
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border shadow">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="font-semibold text-secondary"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="bg-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-60 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          disabled={currentPage === 1}
          type="button"
          size="sm"
          variant="outline"
          onClick={onPreviousPage}
        >
          Previous
        </Button>
        <Button
          disabled={currentPage === maxPage || totalOrders === 0}
          type="button"
          size="sm"
          variant="outline"
          onClick={onNextPage}
        >
          Next
        </Button>
      </div>
    </>
  )
}
