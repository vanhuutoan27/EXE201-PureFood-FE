import { useMemo, useState } from "react"

import { formatCurrency } from "@/lib/utils"

import { Card } from "@/components/global/atoms/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"
import {
  ToggleGroup,
  ToggleGroupItem
} from "@/components/global/atoms/toggle-group"

function ProductFilter() {
  const ratingTypes = useMemo(() => ["0+", "1+", "2+", "3+", "4+"], [])

  const [selectedRatingType, setSelectedRatingType] = useState<string[]>([])
  const [selectedTrademark, setSelectedTrademark] = useState<
    string | undefined
  >()
  const [selectedQuality, setSelectedQuality] = useState<string | undefined>()
  const [selectedUnit, setSelectedUnit] = useState<string | undefined>()
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    string | undefined
  >()

  console.log(
    selectedRatingType,
    selectedTrademark,
    selectedQuality,
    selectedUnit,
    selectedPriceRange
  )

  const handleSelectedRatingType = (type: string) => {
    setSelectedRatingType((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((item) => item !== type)
        : [...prevSelected, type]
    )
  }

  return (
    <Card className="space-y-6">
      <div>
        <h4 className="mb-2 ml-1 font-semibold text-primary">Thương hiệu</h4>
        <Select onValueChange={setSelectedTrademark}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn nhà cung cấp" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="Pure Food">
                Pure Food
              </SelectItem>
              <SelectItem className="cursor-pointer" value="Khác">
                Khác
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="mb-2 ml-1 font-semibold text-primary">
          Chất lượng sản phẩm
        </h4>
        <Select onValueChange={setSelectedQuality}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn loại sản phẩm" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="True">
                Thực phẩm hữu cơ
              </SelectItem>
              <SelectItem className="cursor-pointer" value="False">
                Thực phẩm vô cơ
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="mb-2 ml-1 font-semibold text-primary">Khối lượng</h4>
        <Select onValueChange={setSelectedUnit}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn khối lượng sản phẩm" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="Kg">
                Kg
              </SelectItem>
              <SelectItem className="cursor-pointer" value="Gr">
                Gr
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="mb-2 ml-1 font-semibold text-primary">Giá</h4>
        <Select onValueChange={setSelectedPriceRange}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn giá" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="<10000">
                Dưới {formatCurrency(10000)}
              </SelectItem>
              <SelectItem className="cursor-pointer" value="10000-20000">
                {formatCurrency(10000)} - {formatCurrency(20000)}
              </SelectItem>
              <SelectItem className="cursor-pointer" value="20000-40000">
                {formatCurrency(20000)} - {formatCurrency(40000)}
              </SelectItem>
              <SelectItem className="cursor-pointer" value="40000-80000">
                {formatCurrency(40000)} - {formatCurrency(80000)}
              </SelectItem>
              <SelectItem className="cursor-pointer" value=">80000">
                Trên {formatCurrency(80000)}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="mb-2 ml-1 font-semibold text-primary">Đánh giá</h4>
        <div className="flex">
          <ToggleGroup type="multiple">
            {ratingTypes.map((type) => (
              <ToggleGroupItem
                key={type}
                variant="outline"
                value={type}
                onClick={() => handleSelectedRatingType(type)}
                className={
                  selectedRatingType.includes(type)
                    ? "selected"
                    : "text-secondary"
                }
              >
                {type}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
    </Card>
  )
}
export default ProductFilter
