import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  ProductType,
  UpdateProductType,
  updateProductSchema
} from "@/schemas/productSchema"

import {
  convertToLocalISOString,
  formatCurrency,
  formatDateDMY
} from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import { Calendar } from "@/components/global/atoms/calendar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/global/atoms/dialog"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/global/atoms/popover"
import { ScrollArea } from "@/components/global/atoms/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"
import { Textarea } from "@/components/global/atoms/textarea"
import LazyImage from "@/components/global/molecules/lazy-image"

interface ViewProductProps {
  productData: ProductType
  onClose: () => void
}

function ViewProductDialog({ productData, onClose }: ViewProductProps) {
  const [entryDate, setEntryDate] = useState<string>(
    productData.entryDate
      ? format(new Date(productData.entryDate), "yyyy-MM-dd")
      : ""
  )
  const [expiryDate, setExpiryDate] = useState<string>(
    productData.expiryDate
      ? format(new Date(productData.expiryDate), "yyyy-MM-dd")
      : ""
  )

  const handleEntryDateSelect = (date: Date | undefined) => {
    if (date) {
      const isoStringEntry = convertToLocalISOString(date)
      setEntryDate(isoStringEntry)
      setValue("entryDate", isoStringEntry)
    }
  }
  const handleExpiryDateSelect = (date: Date | undefined) => {
    if (date) {
      const isoStringExpiry = convertToLocalISOString(date)
      setExpiryDate(isoStringExpiry)
      setValue("expiryDate", isoStringExpiry)
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<UpdateProductType>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      ...productData,
      entryDate: productData.entryDate
        ? format(new Date(productData.entryDate), "yyyy-MM-dd")
        : "",
      expiryDate: productData.expiryDate
        ? format(new Date(productData.expiryDate), "yyyy-MM-dd")
        : ""
    }
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleUpdate = () => {
    setIsEditing(true)
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleOrganicChange = (value: string) => {
    const isOrganic = value === "true"
    setValue("organic", isOrganic)
  }

  const handleCategoryChange = (value: string) => {
    setValue("category", value)
  }

  const handleUnitChange = (value: string) => {
    setValue("unit", value)
  }

  const handleNextImage = () => {
    if (productData.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === (productData.images?.length ?? 0) - 1 ? 0 : prevIndex + 1
      )
    }
  }

  const handlePreviousImage = () => {
    if (productData.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? (productData.images?.length ?? 1) - 1 : prevIndex - 1
      )
    }
  }

  const onSubmit = (data: UpdateProductType) => {
    console.log("Form data:", data)
    setIsEditing(false)
  }

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent className="min-w-[1200px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-center">Chi tiết sản phẩm</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-x-6">
            <div className="col-span-1 space-y-1">
              <Label>Hình ảnh sản phẩm</Label>

              <div className="relative rounded-xl">
                {productData.images && (
                  <LazyImage
                    src={productData.images[currentImageIndex]}
                    alt="image-product"
                    className="min-h-[260px] w-full select-none rounded-xl object-cover"
                  />
                )}

                <ChevronLeft
                  onClick={handlePreviousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                />

                <ChevronRight
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                />
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label>ID sản phẩm</Label>
                <Input
                  readOnly
                  type="text"
                  tabIndex={-1}
                  defaultValue={productData.productId}
                />
              </div>

              <div className="space-y-1">
                <Label>Tên sản phẩm</Label>
                <Input
                  readOnly={!isEditing}
                  type="text"
                  tabIndex={-1}
                  placeholder="Nhập tên sản phẩm"
                  {...register("productName")}
                  defaultValue={productData.productName}
                />
                {errors.productName && (
                  <p className="error-lens">{errors.productName.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label>Xuất xứ</Label>
                <Input
                  readOnly={!isEditing}
                  type="text"
                  tabIndex={-1}
                  placeholder="Nhập nơi xuất xứ"
                  {...register("origin")}
                  defaultValue={productData.origin}
                />
                {errors.origin && (
                  <p className="error-lens">{errors.origin.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label>Tồn kho</Label>
                <Input
                  readOnly={!isEditing}
                  type="number"
                  tabIndex={-1}
                  placeholder="Nhập số lượng tồn kho"
                  {...register("stock")}
                  defaultValue={productData.stock}
                />
                {errors.stock && (
                  <p className="error-lens">{errors.stock.message}</p>
                )}
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label>Danh mục</Label>
                {isEditing ? (
                  <>
                    <Select
                      onValueChange={handleCategoryChange}
                      defaultValue={productData.category}
                    >
                      <SelectTrigger className="mb-3 mt-1 h-10 rounded-xl border-[1px] pl-5">
                        <SelectValue placeholder="Chọn nhà cung cấp" />
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
                  </>
                ) : (
                  <Input
                    readOnly
                    type="text"
                    tabIndex={-1}
                    defaultValue={
                      productData.category === "trai-cay"
                        ? "Trái cây"
                        : "Rau củ"
                    }
                  />
                )}
              </div>

              <div className="space-y-1">
                <Label>Loại danh mục</Label>
                <Input
                  readOnly
                  type="text"
                  tabIndex={-1}
                  placeholder="Nhập tên danh mục"
                  defaultValue={productData.category}
                />
              </div>

              <div className="space-y-1">
                <Label>Nhà cung cấp</Label>
                <Input
                  readOnly={!isEditing}
                  type="text"
                  tabIndex={-1}
                  placeholder="Nhập tên nhà cung cấp"
                  {...register("supplier")}
                  defaultValue={productData.supplier}
                />
                {errors.supplier && (
                  <p className="error-lens">{errors.supplier.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label>Hữu cơ</Label>

                {isEditing ? (
                  <>
                    <Select
                      onValueChange={handleOrganicChange}
                      defaultValue={productData.organic ? "true" : "false"}
                    >
                      <SelectTrigger className="mb-1 mt-1 h-10 rounded-xl border-[1px] pl-5">
                        <SelectValue placeholder="Chọn hữu cơ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="true">Hữu cơ</SelectItem>
                          <SelectItem value="false">Vô cơ</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors.organic && (
                      <p className="error-lens">{errors.organic.message}</p>
                    )}
                  </>
                ) : (
                  <Input
                    readOnly
                    type="text"
                    tabIndex={-1}
                    defaultValue={productData.organic ? "Hữu cơ" : "Vô cơ"}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-6">
            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label>Khối lượng</Label>
                <Input
                  readOnly={!isEditing}
                  type="number"
                  tabIndex={-1}
                  placeholder="Nhập khối lượng sản phẩm"
                  {...register("weight")}
                  defaultValue={productData.weight}
                />
                {errors.weight && (
                  <p className="error-lens">{errors.weight.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label>Ngày nhập</Label>

                {isEditing ? (
                  <>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`w-full justify-start text-left font-normal ${!entryDate && "text-muted-foreground"}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {entryDate ? (
                            format(new Date(entryDate), "PPP")
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
                  </>
                ) : (
                  <Input
                    readOnly
                    tabIndex={-1}
                    defaultValue={formatDateDMY(productData.entryDate)}
                  />
                )}
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label>Đơn vị</Label>

                {isEditing ? (
                  <>
                    <Select
                      onValueChange={handleUnitChange}
                      defaultValue={productData.unit}
                    >
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
                    {errors.unit && (
                      <p className="error-lens">{errors.unit.message}</p>
                    )}
                  </>
                ) : (
                  <Input
                    readOnly
                    type="text"
                    tabIndex={-1}
                    defaultValue={productData.unit}
                  />
                )}
              </div>

              <div className="space-y-1">
                <Label>Ngày hết hạn</Label>
                {isEditing ? (
                  <>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`w-full justify-start text-left font-normal ${!expiryDate && "text-muted-foreground"}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {expiryDate ? (
                            format(new Date(expiryDate), "PPP")
                          ) : (
                            <span>Chọn ngày hết hạn</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={
                            expiryDate ? new Date(expiryDate) : undefined
                          }
                          onSelect={handleExpiryDateSelect}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.expiryDate && (
                      <p className="error-lens">Ngày hết hạn là bắt buộc</p>
                    )}
                  </>
                ) : (
                  <Input
                    readOnly
                    tabIndex={-1}
                    defaultValue={formatDateDMY(productData.expiryDate)}
                  />
                )}
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label>Giá</Label>
                <Input
                  readOnly={!isEditing}
                  type="number"
                  tabIndex={-1}
                  placeholder="Nhập giá sản phẩm"
                  defaultValue={formatCurrency(productData.price)}
                  {...register("price")}
                />
                {errors.price && (
                  <p className="error-lens">{errors.price.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label>Ngày tạo</Label>
                <Input
                  readOnly
                  tabIndex={-1}
                  defaultValue={formatDateDMY(productData.createdAt)}
                />
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label>Trạng thái</Label>

                <Input
                  readOnly
                  type="text"
                  tabIndex={-1}
                  defaultValue={productData.status ? "Đang bán" : "Ngưng bán"}
                />
              </div>

              <div className="space-y-1">
                <Label>Ngày cập nhật</Label>
                <Input
                  readOnly
                  tabIndex={-1}
                  defaultValue={formatDateDMY(productData.updatedAt)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-1 pt-3">
            <Label>Mô tả</Label>
            <ScrollArea className="h-40">
              <Textarea
                readOnly={!isEditing}
                rows={10}
                tabIndex={-1}
                placeholder="Nhập mô tả sản phẩm"
                {...register("description")}
                defaultValue={productData.description}
                className="resize-none"
              />
            </ScrollArea>
            {errors.description && (
              <p className="error-lens">{errors.description.message}</p>
            )}
          </div>

          <div className="mt-6 flex justify-between gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Đóng
            </Button>

            {isEditing && (
              <div className="space-x-4">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Hủy
                </Button>
                <Button type="submit" variant="default">
                  Lưu
                </Button>
              </div>
            )}

            {!isEditing && (
              <Button type="button" variant="default" onClick={handleUpdate}>
                Cập nhật
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ViewProductDialog
