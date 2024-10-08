import { useEffect, useState } from "react"

import vietnamdb from "@/shared/vietnamdb.json"
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
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/global/atoms/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"
import { Separator } from "@/components/global/atoms/separator"

interface OrderInformationProps {
  register: UseFormRegister<any>
  errors: any
  paymentMethod: string
  setPaymentMethod: (method: string) => void
  setProvince: (province: string) => void
  setDistrict: (district: string) => void
  setCommune: (commune: string) => void
}

interface Province {
  idProvince: string
  name: string
}

interface District {
  idDistrict: string
  name: string
  idProvince: string
}

interface Commune {
  idCommune: string
  name: string
  idDistrict: string
}

function OrderInformation({
  register,
  errors,
  paymentMethod,
  setPaymentMethod,
  setProvince,
  setDistrict,
  setCommune
}: OrderInformationProps) {
  const [provinces, setProvinces] = useState<Province[]>([])
  const [districts, setDistricts] = useState<District[]>([])
  const [communes, setCommunes] = useState<Commune[]>([])
  const [selectedProvince, setSelectedProvince] = useState<string>("")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("")
  const [selectedCommune, setSelectedCommune] = useState<string>("")

  useEffect(() => {
    setProvinces(vietnamdb.province)
  }, [])

  useEffect(() => {
    if (selectedProvince) {
      const filteredDistricts = vietnamdb.district.filter(
        (d: District) =>
          d.idProvince ===
          provinces.find((p) => p.name === selectedProvince)?.idProvince
      )
      setDistricts(filteredDistricts)
      setSelectedDistrict("")
      setCommunes([])
    }
  }, [selectedProvince, provinces])

  useEffect(() => {
    if (selectedDistrict) {
      const filteredCommunes = vietnamdb.commune?.filter(
        (c: Commune) => c.idDistrict === selectedDistrict
      )
      setCommunes(filteredCommunes || [])
    }
  }, [selectedDistrict])

  useEffect(() => {
    setProvince(selectedProvince)
    setDistrict(
      districts.find((d) => d.idDistrict === selectedDistrict)?.name || ""
    )
    setCommune(
      communes.find((c) => c.idCommune === selectedCommune)?.name || ""
    )
  }, [selectedProvince, selectedDistrict, selectedCommune])

  return (
    <Card className="h-fit w-3/5 px-0">
      <CardHeader className="pt-0">
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
              {...register("fullName")}
              // defaultValue={"Van Huu Toan"}
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
              {...register("phoneNumber")}
              // defaultValue={"0792766979"}
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
            {...register("email")}
            // defaultValue={"vanhuutoan27@gmail.com"}
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
            {...register("address")}
            // defaultValue={"dia chi gi do 20 ki tu"}
          />

          {errors?.address && (
            <p className="error-lens">{errors.address.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="province">Tỉnh / Thành phố</Label>
          <Select onValueChange={setSelectedProvince}>
            <SelectTrigger>
              <SelectValue placeholder="Chọn tỉnh / thành phố" />
            </SelectTrigger>
            <SelectContent>
              {provinces.map((province) => (
                <SelectItem key={province.idProvince} value={province.name}>
                  {province.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors?.province && (
            <p className="error-lens">{errors.province.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="district">Quận / Huyện</Label>
            <Select
              onValueChange={setSelectedDistrict}
              disabled={!selectedProvince}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn quận / huyện" />
              </SelectTrigger>
              <SelectContent>
                {districts.map((district) => (
                  <SelectItem
                    key={district.idDistrict}
                    value={district.idDistrict}
                  >
                    {district.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {errors?.district && (
              <p className="error-lens">{errors.district.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="commune">Phường / Xã</Label>
            <Select
              onValueChange={setSelectedCommune}
              disabled={!selectedDistrict}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn phường / xã" />
              </SelectTrigger>
              <SelectContent>
                {communes.map((commune) => (
                  <SelectItem key={commune.idCommune} value={commune.idCommune}>
                    {commune.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {errors?.commune && (
              <p className="error-lens">{errors.commune.message}</p>
            )}
          </div>
        </div>
      </CardContent>

      <Separator className="my-4" />

      <CardHeader className="pt-0">
        <CardTitle className="text-lg">Phương thức thanh toán</CardTitle>
        <CardDescription>
          Chọn phương thức thanh toán ưu tiên của bạn
        </CardDescription>
      </CardHeader>

      <CardContent>
        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="cod" value="COD" />
            <Label htmlFor="cod">Thanh toán khi nhận hàng (COD)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="vnpay" value="VNPAY" />
            <Label htmlFor="vnpay">Thanh toán qua VNPay</Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}

export default OrderInformation
