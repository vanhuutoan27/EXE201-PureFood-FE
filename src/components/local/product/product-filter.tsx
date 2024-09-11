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
  // Memoized rating type to avoid re-creating on every render
  const ratingTypes = useMemo(() => ["0+", "1+", "2+", "3+", "4+"], [])

  // State for managing selected filters
  const [selectedRatingType, setSelectedRatingType] = useState<string[]>([])
  const [selectedProductType, setSelectedProductType] = useState<
    string | undefined
  >()
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    string | undefined
  >()

  console.log(selectedRatingType, selectedProductType, selectedPriceRange)

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
        <h4 className="mb-1 ml-1 font-semibold text-secondary">
          Loại sản phẩm
        </h4>

        <Select onValueChange={setSelectedProductType}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn loại" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="Rau">
                Rau
              </SelectItem>
              <SelectItem className="cursor-pointer" value="Củ">
                Củ
              </SelectItem>
              <SelectItem className="cursor-pointer" value="Quả">
                Quả
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="mb-1 ml-1 font-semibold text-secondary">Giá</h4>

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
        <h4 className="mb-1 ml-1 font-semibold text-secondary">Đánh giá</h4>

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
