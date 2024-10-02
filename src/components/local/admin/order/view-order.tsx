import React from "react"

import { OrderType } from "@/schemas/orderSchema"

import { formatCurrency, formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/global/atoms/dialog"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"
import { ScrollArea } from "@/components/global/atoms/scroll-area"

interface ViewOrderProps {
  orderData: OrderType
  onClose: () => void
}

function ViewOrderDialog({ orderData, onClose }: ViewOrderProps) {
  const addressCustomer = `${orderData.shippingAddress.address}, ${orderData.shippingAddress.commune}, ${orderData.shippingAddress.district}, ${orderData.shippingAddress.province}`

  const getOrderStatus = (orderStatus: string) => {
    let statusValue = ""
    switch (orderStatus) {
      case "Pending":
        statusValue = "Đang chờ"
        break
      case "Processing":
        statusValue = "Đang xử lý"
        break
      case "Shipping":
        statusValue = "Đang giao hàng"
        break
      case "Completed":
        statusValue = "Đã hoàn thành"
        break
      default:
        statusValue = "Đã hủy"
        break
    }

    return { statusValue }
  }

  const { statusValue } = getOrderStatus(orderData.orderStatus)

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent className="min-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-center">Chi tiết đơn hàng</DialogTitle>
        </DialogHeader>

        <div className="flex justify-between gap-6">
          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">ID</Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập ID"
              value={orderData.orderId}
            />
          </div>

          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">Ngày tạo</Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập ngày tạo"
              value={formatDateDMY(orderData.createdAt)}
            />
          </div>

          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">
              Ngày cập nhật
            </Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập ngày cập nhật"
              value={formatDateDMY(orderData.updatedAt)}
            />
          </div>
        </div>

        <div className="flex justify-between gap-6">
          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">
              Tên khách hàng
            </Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập tên khách hàng"
              value={orderData.customerInfo.fullName}
            />
          </div>

          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">
              Số điện thoại
            </Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập số điện thoại khách hàng"
              value={orderData.customerInfo.phoneNumber}
            />
          </div>

          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">Email</Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập email khách hàng"
              value={orderData.customerInfo.email}
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          <Label className="font-semibold text-secondary">Địa chỉ</Label>
          <Input
            readOnly
            type="text"
            tabIndex={-1}
            placeholder="Nhập địa chỉ khách hàng"
            value={addressCustomer}
          />
        </div>

        <div className="flex justify-between gap-6">
          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">
              Phương thức thanh toán
            </Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập phương thức thanh toán"
              value={orderData.paymentMethod}
            />
          </div>

          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">Tổng tiền</Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập số tiền sản phẩm"
              value={formatCurrency(orderData.orderSummary.totalAmount)}
            />
          </div>

          <div className="w-full space-y-2">
            <Label className="font-semibold text-secondary">Trạng thái</Label>
            <Input
              readOnly
              type="text"
              tabIndex={-1}
              placeholder="Nhập trạng thái đơn hàng"
              value={statusValue}
            />
          </div>
        </div>

        <table>
          <ScrollArea className="h-[100px] px-4">
            <thead>
              <tr className="ml-1 select-none border-b">
                <th className="w-1/2 p-2 text-center text-sm font-semibold text-secondary">
                  Tên sản phẩm
                </th>
                <th className="w-1/3 p-2 text-center text-sm font-semibold text-secondary">
                  Số lượng
                </th>
                <th className="w-2/3 p-2 text-center text-sm font-semibold text-secondary">
                  Giá
                </th>
              </tr>
            </thead>

            <tbody>
              {orderData.orderSummary.items.map((item, index) => (
                <tr key={index} className="border-b text-sm font-normal">
                  <td className="w-1/2 p-2 text-center">{item.productName}</td>
                  <td className="w-1/3 p-2 text-center">{item.quantity}</td>
                  <td className="w-2/3 p-2 text-center">
                    {formatCurrency(item.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </ScrollArea>
        </table>

        <div className="mt-4 flex justify-end">
          <Button type="button" variant="outline" onClick={onClose}>
            Đóng
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewOrderDialog
