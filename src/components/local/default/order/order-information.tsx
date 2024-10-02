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
            <Label htmlFor="fullName">Họ và tên</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Nhập họ và tên"
              {...register("customerInfo.fullName")}
            />

            {errors?.fullName && (
              <p className="error-lens">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Số điện thoại</Label>
            <Input
              id="phoneNumber"
              type="text"
              placeholder="Nhập số điện thoại"
              {...register("customerInfo.phoneNumber")}
            />

            {errors?.phoneNumber && (
              <p className="error-lens">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Nhập địa chỉ email"
            {...register("customerInfo.email")}
          />

          {errors?.email && (
            <p className="error-lens">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Địa chỉ</Label>
          <Input
            id="address"
            type="text"
            placeholder="Nhập địa chỉ giao hàng"
            {...register("shippingAddress.address")}
          />

          {errors?.address && (
            <p className="error-lens">{errors.address.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="commune">Phường / Xã</Label>
            <Input id="commune" {...register("shippingAddress.commune")} />

            {errors?.commune && (
              <p className="error-lens">{errors.commune.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="district">Quận / Huyện</Label>
            <Input id="district" {...register("shippingAddress.district")} />

            {errors?.district && (
              <p className="error-lens">{errors.district.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="province">Thành phố / Tỉnh</Label>
          <Input id="province" {...register("shippingAddress.province")} />

          {errors?.province && (
            <p className="error-lens">{errors.province.message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderInformation
