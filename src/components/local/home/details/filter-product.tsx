import { useState } from "react"

import { formatCurrency } from "@/lib/helper"

import { Button } from "@/components/global/atoms/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"
import Card from "@/components/global/molecules.tsx/card"

function FilterProduct() {
  const ratingType = ["0+", "1+", "2+", "3+", "4+", "5+"]
  const [selectedRatingType, setSelectedRatingType] = useState()
  const handleSelectedRatingType = (type: string) => {
    setSelectedRatingType(type as any)
  }
  return (
    <Card className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="ml-1 font-semibold text-primary">Loại sản phẩm</h1>
        <Select>
          <SelectTrigger className="w-full border-primary font-semibold text-muted-foreground">
            <SelectValue placeholder="Chọn loại" />
          </SelectTrigger>
          <SelectContent className="bg-primary-foreground">
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
      <div className="flex flex-col gap-2">
        <h1 className="ml-1 font-semibold text-primary">Giá</h1>
        <Select>
          <SelectTrigger className="w-full border-primary font-semibold text-muted-foreground">
            <SelectValue placeholder="Chọn giá" />
          </SelectTrigger>
          <SelectContent className="bg-primary-foreground">
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
      <div className="flex flex-col gap-2">
        <h1 className="ml-1 font-semibold text-primary">Đánh giá</h1>
        <div className="flex gap-2">
          {ratingType.map((type) => (
            <Button
              key={type}
              type="button"
              variant={selectedRatingType === type ? "default" : "outline"}
              onClick={() => handleSelectedRatingType(type)}
              className={`text-muted-foreground ${
                selectedRatingType === type
                  ? "border-2 border-primary font-semibold text-primary-foreground"
                  : "border-2 border-primary font-semibold text-muted-foreground"
              }`}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default FilterProduct
