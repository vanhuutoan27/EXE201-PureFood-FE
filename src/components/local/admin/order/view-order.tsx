import { OrderType } from "@/schemas/orderSchema"

import { formatCurrency, formatDateDMY, getOrderStatus } from "@/lib/utils"

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
import LazyImage from "@/components/global/molecules/lazy-image"

interface ViewOrderProps {
  orderData: OrderType
  onClose: () => void
}

function ViewOrderDialog({ orderData, onClose }: ViewOrderProps) {
  const addressCustomer = `${orderData.address}, ${orderData.commune}, ${orderData.district}, ${orderData.province}`

  const { statusValue } = getOrderStatus(orderData.orderStatus)

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent className="min-h-[800px] min-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-center">Chi tiết đơn hàng</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <div className="flex justify-between gap-6">
            <div className="w-full">
              <Label className="font-semibold text-secondary">ID</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                placeholder="Nhập ID"
                value={orderData.orderId}
              />
            </div>

            {/* <div className="w-full">
              <Label className="font-semibold text-secondary">Ngày tạo</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                placeholder="Nhập ngày tạo"
                value={formatDateDMY(orderData.createdAt)}
              />
            </div> */}

            <div className="w-full">
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
            <div className="w-full">
              <Label className="font-semibold text-secondary">
                Tên khách hàng
              </Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                placeholder="Nhập tên khách hàng"
                value={orderData.fullName}
              />
            </div>

            <div className="w-full">
              <Label className="font-semibold text-secondary">
                Số điện thoại
              </Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                placeholder="Nhập số điện thoại khách hàng"
                value={orderData.phoneNumber}
              />
            </div>

            <div className="w-full">
              <Label className="font-semibold text-secondary">Email</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                placeholder="Nhập email khách hàng"
                value={orderData.email}
              />
            </div>
          </div>

          <div className="w-full">
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
            <div className="w-full">
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

            <div className="w-full">
              <Label className="font-semibold text-secondary">Tổng tiền</Label>
              <Input
                readOnly
                type="text"
                tabIndex={-1}
                placeholder="Nhập số tiền sản phẩm"
                value={formatCurrency(orderData.totalAmount)}
              />
            </div>

            <div className="w-full">
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
        </div>

        <table className="h-full">
          <ScrollArea className="h-[280px] px-4">
            <thead>
              <tr className="ml-1 select-none border-b">
                <th className="w-1/4 p-2 text-center text-sm font-semibold text-secondary">
                  Hình ảnh
                </th>
                <th className="w-3/8 p-2 text-center text-sm font-semibold text-secondary">
                  Tên sản phẩm
                </th>
                <th className="w-1/8 p-2 text-center text-sm font-semibold text-secondary">
                  Số lượng
                </th>
                <th className="w-1/4 p-2 text-center text-sm font-semibold text-secondary">
                  Giá
                </th>
              </tr>
            </thead>

            <tbody>
              {orderData.orderSummary.map((item, index) => (
                <tr key={index} className="border-b text-sm font-normal">
                  <td className="w-1/4 p-2 text-center">
                    <LazyImage
                      src={item.image}
                      alt={item.productName}
                      className="h-28 w-28 rounded-lg"
                    />
                  </td>
                  <td className="w-3/8 p-2 text-center font-semibold">
                    {item.productName}
                  </td>
                  <td className="w-1/8 p-2 text-center">{item.quantity}</td>
                  <td className="w-1/4 p-2 text-center">
                    {formatCurrency(item.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </ScrollArea>
        </table>

        <div className="flex justify-end">
          <Button type="button" variant="outline" onClick={onClose}>
            Đóng
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewOrderDialog
