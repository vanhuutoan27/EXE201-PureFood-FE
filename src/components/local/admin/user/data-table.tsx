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

import AddUser from "./add-user"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  currentPage,
  totalUsers,
  visibleOrders,
  onNextPage,
  onPreviousPage
}: DataTableProps<TData, TValue> & {
  currentPage: number
  totalUsers: number
  visibleOrders: number
  onNextPage: () => void
  onPreviousPage: () => void
}) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState<string>("")

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
      columnFilters,
      globalFilter
    },
    globalFilterFn: (row, filterValue) => {
      return (
        String(row.getValue("fullName"))
          .toLowerCase()
          .includes(filterValue.toLowerCase()) ||
        String(row.getValue("email"))
          .toLowerCase()
          .includes(filterValue.toLowerCase()) ||
        String(row.getValue("phoneNumber"))
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      )
    }
  })

  const maxPage = Math.ceil(totalUsers / visibleOrders)

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const handleAddDetailsClick = () => {
    setIsAddDialogOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Tìm kiếm theo họ và tên, email hoặc số điện thoại..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="w-2/3 border-input bg-white"
        />

        <Button type="button" variant="default" onClick={handleAddDetailsClick}>
          Thêm người dùng
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

        {isAddDialogOpen && (
          <AddUser onClose={() => setIsAddDialogOpen(false)} />
        )}
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
          disabled={currentPage === maxPage || totalUsers === 0}
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
