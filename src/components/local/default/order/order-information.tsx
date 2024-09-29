import { UseFormRegister } from "react-hook-form"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/global/atoms/card"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"

interface OrderInformationProps {
  register: UseFormRegister<any>
  errors: any
}

function OrderInformation({ register, errors }: OrderInformationProps) {
  return (
    <Card className="px-0 py-6">
      <CardHeader>
        <CardTitle className="text-lg">Thông tin giao hàng</CardTitle>
        <CardDescription>Nhập thông tin giao hàng của bạn</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">Họ</Label>
            <Input id="firstName" {...register("customerInfo.firstName")} />
            {errors?.customerInfo?.firstName && (
              <p className="error-lens">
                {errors.customerInfo.firstName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Tên</Label>
            <Input id="lastName" {...register("customerInfo.lastName")} />
            {errors?.customerInfo?.lastName && (
              <p className="error-lens">
                {errors.customerInfo.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Số điện thoại</Label>
          <Input id="phoneNumber" {...register("customerInfo.phoneNumber")} />
          {errors?.customerInfo?.phoneNumber && (
            <p className="error-lens">
              {errors.customerInfo.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register("customerInfo.email")} />
          {errors?.customerInfo?.email && (
            <p className="error-lens">{errors.customerInfo.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Địa chỉ</Label>
          <Input id="address" {...register("shippingAddress.address")} />
          {errors?.shippingAddress?.address && (
            <p className="error-lens">
              {errors.shippingAddress.address.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="commune">Phường / Xã</Label>
            <Input id="commune" {...register("shippingAddress.commune")} />
            {errors?.shippingAddress?.commune && (
              <p className="error-lens">
                {errors.shippingAddress.commune.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="district">Quận / Huyện</Label>
            <Input id="district" {...register("shippingAddress.district")} />
            {errors?.shippingAddress?.district && (
              <p className="error-lens">
                {errors.shippingAddress.district.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="province">Thành phố / Tỉnh</Label>
          <Input id="province" {...register("shippingAddress.province")} />
          {errors?.shippingAddress?.province && (
            <p className="error-lens">
              {errors.shippingAddress.province.message}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderInformation
