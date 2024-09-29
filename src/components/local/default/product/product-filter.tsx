import { formatCurrency } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import { Checkbox } from "@/components/global/atoms/checkbox"
import { Label } from "@/components/global/atoms/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"

interface Filters {
  supplier: string
  origin: string
  organic: boolean
  priceRange: string
  weightRange: string
}

interface ProductFilterProps {
  filters: Filters
  setFilters: (filters: Filters) => void
}

const defaultFilters = {
  supplier: "all",
  origin: "all",
  organic: false,
  priceRange: "all",
  weightRange: "all"
}

function ProductFilter({ filters, setFilters }: ProductFilterProps) {
  const handleResetFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <Card className="space-y-6">
      <div className="space-y-2">
        <Label className="ml-1 font-semibold text-primary">Nhà cung cấp</Label>
        <Select
          value={filters.supplier}
          onValueChange={(value) => setFilters({ ...filters, supplier: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn nhà cung cấp" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="PureFood">PureFood</SelectItem>
              <SelectItem value="Moncati">Moncati</SelectItem>
              <SelectItem value="Khác">Khác</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="ml-1 font-semibold text-primary">Khối lượng</Label>
        <Select
          value={filters.weightRange}
          onValueChange={(value) =>
            setFilters({ ...filters, weightRange: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn khoảng trọng lượng" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="0-200">Dưới 0.2 Kg (200 Gr)</SelectItem>
              <SelectItem value="200-500">
                0.2 - 0.5 Kg (200 - 500 Gr)
              </SelectItem>
              <SelectItem value="500-1000">
                0.5 -1 Kg (500 - 1000 Gr)
              </SelectItem>
              <SelectItem value="1000-2000">1 - 2 Kg (1000-2000 Gr)</SelectItem>
              <SelectItem value="2000-5000">2 - 5 Kg (2000-5000 Gr)</SelectItem>
              <SelectItem value=">5000">Trên 5 Kg (Trên 5000 Gr)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="ml-1 font-semibold text-primary">Giá</Label>
        <Select
          value={filters.priceRange}
          onValueChange={(value) =>
            setFilters({ ...filters, priceRange: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn khoảng giá" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="0-10000">
                Dưới {formatCurrency(10000)}
              </SelectItem>
              <SelectItem value="10000-20000">
                {formatCurrency(10000)} - {formatCurrency(20000)}
              </SelectItem>
              <SelectItem value="20000-40000">
                {formatCurrency(20000)} - {formatCurrency(40000)}
              </SelectItem>
              <SelectItem value="40000-80000">
                {formatCurrency(40000)} - {formatCurrency(80000)}
              </SelectItem>
              <SelectItem value="80000-100000">
                Trên {formatCurrency(80000)}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="ml-1 font-semibold text-primary">Xuất xứ</Label>
        <Select
          value={filters.origin}
          onValueChange={(value) => setFilters({ ...filters, origin: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn nơi xuất xứ" defaultValue="all" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="Củ Chi">Củ Chi</SelectItem>
              <SelectItem value="Đồng Nai">Đồng Nai</SelectItem>
              <SelectItem value="Đà Lạt">Đà Lạt</SelectItem>
              <SelectItem value="Bình Dương">Bình Dương</SelectItem>
              <SelectItem value="Khác">Khác</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="huu-co"
          checked={filters.organic}
          onCheckedChange={(checked) =>
            setFilters({ ...filters, organic: checked as boolean })
          }
        />
        <Label htmlFor="huu-co" className="text-primary">
          Sản phẩm hữu cơ
        </Label>
      </div>

      <div className="pt-4">
        <Button
          type="button"
          variant="default"
          className="w-full"
          onClick={handleResetFilters}
        >
          Làm mới bộ lọc
        </Button>
      </div>
    </Card>
  )
}

export default ProductFilter
