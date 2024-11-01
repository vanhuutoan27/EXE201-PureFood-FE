import { toast } from "sonner"

import { formatCurrency } from "@/lib/utils"

import { Badge } from "@/components/global/atoms/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/global/atoms/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/global/atoms/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/global/atoms/tooltip"

interface RecentOrdersProps {
  totalOrders: number
  ordersData: {
    orderId: string
    fullName: string
    orderStatus: string
    totalAmount: number
  }[]
}

function RecentOrders({ totalOrders, ordersData }: RecentOrdersProps) {
  const handleCopy = async (orderId: string) => {
    try {
      await navigator.clipboard.writeText(orderId)
      toast.success("Copied to clipboard!")
    } catch {
      toast.error("Failed to copy!")
    }
  }

  return (
    <Card className="col-span-3 p-0">
      <CardHeader>
        <CardTitle>Đơn hàng gần đây</CardTitle>
        <CardDescription>{`You made ${totalOrders} sales this month.`}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Mã đơn hàng</TableHead>
              <TableHead>Khách hàng</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="text-right">Tổng tiền (VND)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordersData.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        onClick={() => handleCopy(order.orderId)}
                        className="cursor-pointer"
                      >
                        {order.orderId.slice(0, 6)}...
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>{order.orderId}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>{order.fullName}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.orderStatus === "Completed"
                        ? "completed"
                        : "outline"
                    }
                  >
                    {order.orderStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(order.totalAmount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RecentOrders
