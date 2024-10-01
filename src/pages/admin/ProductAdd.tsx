import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Upload } from "lucide-react"
import { useForm } from "react-hook-form"

import { CreateProductType, createProductSchema } from "@/schemas/productSchema"

import { convertToLocalISOString } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Calendar } from "@/components/global/atoms/calendar"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/global/atoms/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"
import { Switch } from "@/components/global/atoms/switch"
import { Textarea } from "@/components/global/atoms/textarea"
import AdminTitle from "@/components/global/organisms/admin-title"

function ProductAdd() {
  const [entryDate, setEntryDate] = useState<string>("")
  const [expiryDate, setExpiryDate] = useState<string>("")

  const handleEntryDateSelect = (date: Date | undefined) => {
    if (date) {
      const isoString = convertToLocalISOString(date)
      setEntryDate(isoString)
    }
  }
  const handleExpiryDateSelect = (date: Date | undefined) => {
    if (date) {
      const isoString = convertToLocalISOString(date)
      setExpiryDate(isoString)
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<CreateProductType>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      organic: false,
      unit: ""
    }
  })

  const handleCategoryChange = (value: string) => {
    console.log(value)
    setValue("category", value)
  }

  const handleSupplierChange = (value: string) => {
    setValue("supplier", value)
    console.log(value)
  }

  const handleUnitChange = (value: string) => {
    setValue("unit", value)
    console.log(value)
  }

  const handleOrganicChange = (value: boolean) => {
    setValue("organic", value)
  }

  const onSubmit = (data: CreateProductType) => {
    console.log("Form data:", data)
  }

  console.log(errors)

  return (
    <div>
      <AdminTitle title="Thêm sản phẩm mới" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="category">Danh mục</Label>

            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="mb-3 mt-1 h-10 rounded-xl border-[1px] pl-5">
                <SelectValue placeholder="Chọn danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="trai-cay">Trái cây</SelectItem>
                  <SelectItem value="rau-cu">Rau củ</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="error-lens">{errors.category.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="supplier">Nhà cung cấp</Label>

            <Select onValueChange={handleSupplierChange}>
              <SelectTrigger className="mb-3 mt-1 h-10 rounded-xl border-[1px] pl-5">
                <SelectValue placeholder="Chọn nhà cung cấp" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Pure Food">Pure Food</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.supplier && (
              <p className="error-lens">Nhà cung cấp là bắt buộc</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="productName">Tên sản phẩm</Label>
            <Input
              type="text"
              id="productName"
              placeholder="Nhập tên sản phẩm"
              {...register("productName")}
            />
            {errors.productName && (
              <p className="error-lens">{errors.productName.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="foodName">Tên thực phẩm</Label>
            <Input
              type="text"
              id="foodName"
              placeholder="Nhập tên thực phẩm"
              {...register("foodName")}
            />
            {errors.foodName && (
              <p className="error-lens">{errors.foodName.message}</p>
            )}
          </div>

          <div className="col-span-2 space-y-1">
            <Label htmlFor="description">Mô tả chi tiết</Label>
            <Textarea
              id="description"
              rows={5}
              placeholder="Nhập mô tả chi tiết"
              className="resize-none"
              {...register("description")}
            />
            {errors.description && (
              <p className="error-lens">{errors.description.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="stock">Số lượng tồn kho</Label>
            <Input
              id="stock"
              type="number"
              placeholder="Nhập số lượng tồn kho"
              {...register("stock")}
            />
            {errors.stock && (
              <p className="error-lens">{errors.stock.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="weight">Khối lượng</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Nhập khối lượng sản phẩm"
              {...register("weight")}
            />
            {errors.weight && (
              <p className="error-lens">{errors.weight.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="unit">Đơn vị</Label>

            <Select onValueChange={handleUnitChange}>
              <SelectTrigger className="mb-3 mt-1 h-10 rounded-xl border-[1px] pl-5">
                <SelectValue placeholder="Chọn đơn vị sản phẩm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Kg">Kg</SelectItem>
                  <SelectItem value="Gr">Gr</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.unit && <p className="error-lens">Đơn vị là bắt buộc</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="price">Giá</Label>
            <Input
              id="price"
              type="number"
              placeholder="Nhập giá sản phẩm"
              {...register("price")}
            />
            {errors.price && (
              <p className="error-lens">{errors.price.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="origin">Xuất xứ</Label>
            <Input
              id="origin"
              type="text"
              placeholder="Nhập nơi xuất xứ"
              {...register("origin")}
            />
            {errors.origin && (
              <p className="error-lens">{errors.origin.message}</p>
            )}
          </div>

          <div className="mt-6 flex items-center space-x-2">
            <Switch
              id="organic"
              {...register("organic")}
              onCheckedChange={handleOrganicChange}
              defaultChecked={false}
            />
            <Label htmlFor="organic">Organic</Label>
          </div>

          <div className="space-y-1">
            <Label>Ngày nhập</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${!entryDate && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {entryDate ? (
                    format(entryDate, "PPP")
                  ) : (
                    <span>Chọn ngày nhập</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={entryDate ? new Date(entryDate) : undefined}
                  onSelect={handleEntryDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.entryDate && (
              <p className="error-lens">Ngày nhập là bắt buộc</p>
            )}
          </div>

          <div className="space-y-1">
            <Label>Ngày hết hạn</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${!expiryDate && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {expiryDate ? (
                    format(expiryDate, "PPP")
                  ) : (
                    <span>Chọn ngày hết hạn</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={expiryDate ? new Date(expiryDate) : undefined}
                  onSelect={handleExpiryDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.expiryDate && (
              <p className="error-lens">Ngày hết hạn là bắt buộc</p>
            )}
          </div>

          <div className="col-span-2 space-y-1">
            <Label htmlFor="images">Images</Label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed px-6 pb-6 pt-5">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" variant="default" className="h-11 w-full">
          Add Product
        </Button>
      </form>
    </div>
  )
}

export default ProductAdd
