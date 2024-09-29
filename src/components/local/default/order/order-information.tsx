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
            <Input
              id="firstName"
              {...register("customerInfo.firstName")}
              className="border-input"
            />
            {errors?.customerInfo?.firstName && (
              <p className="text-red-500">
                {errors.customerInfo.firstName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Tên</Label>
            <Input
              id="lastName"
              {...register("customerInfo.lastName")}
              className="border-input"
            />
            {errors?.customerInfo?.lastName && (
              <p className="text-red-500">
                {errors.customerInfo.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Số điện thoại</Label>
          <Input
            id="phoneNumber"
            {...register("customerInfo.phoneNumber")}
            className="border-input"
          />
          {errors?.customerInfo?.phoneNumber && (
            <p className="text-red-500">{errors.customerInfo.phoneNumber.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("customerInfo.email")}
            className="border-input"
          />
          {errors?.customerInfo?.email && (
            <p className="text-red-500">{errors.customerInfo.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Địa chỉ</Label>
          <Input
            id="address"
            {...register("shippingAddress.address")}
            className="border-input"
          />
          {errors?.shippingAddress?.address && (
            <p className="text-red-500">
              {errors.shippingAddress.address.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="commune">Phường / Xã</Label>
            <Input
              id="commune"
              {...register("shippingAddress.commune")}
              className="border-input"
            />
            {errors?.shippingAddress?.commune && (
              <p className="text-red-500">
                {errors.shippingAddress.commune.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="district">Quận / Huyện</Label>
            <Input
              id="district"
              {...register("shippingAddress.district")}
              className="border-input"
            />
            {errors?.shippingAddress?.district && (
              <p className="text-red-500">
                {errors.shippingAddress.district.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="province">Thành phố / Tỉnh</Label>
          <Input
            id="province"
            {...register("shippingAddress.province")}
            className="border-input"
          />
          {errors?.shippingAddress?.province && (
            <p className="text-red-500">
              {errors.shippingAddress.province.message}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderInformation
