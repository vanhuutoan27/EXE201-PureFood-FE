import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  ProductType,
  UpdateProductType,
  updateProductSchema
} from "@/schemas/productSchema"

import { formatCurrency, formatDateDMY } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/global/atoms/dialog"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateProductType>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: productData
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleUpdate = () => {
    setIsEditing(true)
  }

  const onSubmit = (data: UpdateProductType) => {
    console.log("Form data:", data)
    setIsEditing(false)
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextImage = () => {
    if (productData.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === productData.images.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  const handlePreviousImage = () => {
    if (productData.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? productData.images.length - 1 : prevIndex - 1
      )
    }
  }

  return (
    <Dialog onOpenChange={onClose} open>
      <DialogContent className="min-w-[1200px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
          <DialogTitle className="text-center">
              Chi tiết sản phẩm
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-x-6">
            <div className="col-span-1 space-y-1">
              <Label className="font-semibold text-secondary">
                Hình ảnh sản phẩm
              </Label>

              <div className="relative rounded-xl">
                {productData.images && (
                  <LazyImage
                    src={productData.images[currentImageIndex]}
                    alt={`Product image ${currentImageIndex + 1}`}
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
                <Label className="font-semibold text-secondary">
                  ID sản phẩm
                </Label>
                <Input
                  readOnly
                  type="text"
                  tabIndex={-1}
                  defaultValue={productData.productId}
                />
              </div>

              <div className="space-y-1">
                <Label className="font-semibold text-secondary">
                  Tên sản phẩm
                </Label>
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
                <Label className="font-semibold text-secondary">Xuất xứ</Label>
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
                <Label className="font-semibold text-secondary">Tồn kho</Label>
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
                <Label className="font-semibold text-secondary">Danh mục</Label>
                {isEditing ? (
                  <>
                    <Select
                      {...register("category")}
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
                <Label className="font-semibold text-secondary">
                  Loại danh mục
                </Label>
                <Input
                  readOnly
                  type="text"
                  tabIndex={-1}
                  placeholder="Nhập tên danh mục"
                  defaultValue={productData.category}
                />
              </div>

              <div className="space-y-1">
                <Label className="font-semibold text-secondary">
                  Nhà cung cấp
                </Label>
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
                <Label className="font-semibold text-secondary">Hữu cơ</Label>

                {isEditing ? (
                  <>
                    <Select
                      {...register("organic")}
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
                <Label className="font-semibold text-secondary">
                  Khối lượng
                </Label>
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
                <Label className="font-semibold text-secondary">
                  Ngày nhập
                </Label>
                <Input
                  readOnly
                  tabIndex={-1}
                  defaultValue={formatDateDMY(productData.entryDate)}
                />
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label className="font-semibold text-secondary">Đơn vị</Label>

                {isEditing ? (
                  <>
                    <Select
                      {...register("unit")}
                      defaultValue={productData.unit}
                    >
                      <SelectTrigger className="mb-3 mt-1 h-10 rounded-xl border-[1px] pl-5">
                        <SelectValue placeholder="Chọn đơn vị sản phẩm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Kg">Kg</SelectItem>
                          <SelectItem value="Gr">Gr</SelectItem>
                          <SelectItem value="Lb">Lb</SelectItem>
                          <SelectItem value="Oz">Oz</SelectItem>
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
                <Label className="font-semibold text-secondary">
                  Ngày hết hạn
                </Label>
                <Input
                  readOnly
                  tabIndex={-1}
                  defaultValue={formatDateDMY(productData.expiryDate)}
                />
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label className="font-semibold text-secondary">Giá</Label>
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
                <Label className="font-semibold text-secondary">Ngày tạo</Label>
                <Input
                  readOnly
                  tabIndex={-1}
                  defaultValue={formatDateDMY(productData.createdAt)}
                />
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              <div className="space-y-1">
                <Label className="font-semibold text-secondary">
                  Trạng thái
                </Label>

                <Input
                  readOnly
                  type="text"
                  tabIndex={-1}
                  defaultValue={productData.status ? "Đang bán" : "Ngưng bán"}
                />
              </div>

              <div className="space-y-1">
                <Label className="font-semibold text-secondary">
                  Ngày cập nhật
                </Label>
                <Input
                  readOnly
                  tabIndex={-1}
                  defaultValue={formatDateDMY(productData.updatedAt)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <Label className="font-semibold text-secondary">Mô tả</Label>
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

          <div className="mt-6 flex justify-between">
            <div className="space-x-4">
              {isEditing && (
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Hủy
                </Button>
              )}
              <Button
                type={isEditing ? "submit" : "button"}
                variant={"default"}
                onClick={isEditing ? undefined : handleUpdate}
              >
                {isEditing ? "Lưu" : "Cập nhật"}
              </Button>
            </div>

            <Button type="button" variant="outline" onClick={onClose}>
              Đóng
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ViewProductDialog
