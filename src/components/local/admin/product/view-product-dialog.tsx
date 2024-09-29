import { useRef, useState } from "react"

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
  product: ProductType
  onClose: () => void
}

function ViewProductDialog({ product, onClose }: ViewProductProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateProductType>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: product
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

  const dialogRef = useRef<HTMLDivElement | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextImage = () => {
    if (product.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  const handlePreviousImage = () => {
    if (product.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      )
    }
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog onOpenChange={onClose} open>
        <DialogContent ref={dialogRef} className="min-w-[1200px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold text-secondary">
              Chi tiết sản phẩm
            </DialogTitle>
          </DialogHeader>

          <div className="gapy-2 grid grid-cols-3 gap-x-4">
            <div className="col-span-1">
              <Label className="font-semibold text-secondary">
                Hình ảnh sản phẩm
              </Label>
              <div className="relative mt-1 rounded-lg border-[1px] p-2">
                {product.images && (
                  <LazyImage
                    src={product.images[currentImageIndex]}
                    alt={`Product image ${currentImageIndex + 1}`}
                    className="min-h-[260px] w-full select-none rounded-lg object-cover"
                  />
                )}

                <ChevronLeft
                  onClick={handlePreviousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-secondary duration-300 hover:text-gray-200"
                />

                <ChevronRight
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-secondary duration-300 hover:text-gray-200"
                />
              </div>
            </div>

            <div className="col-span-1">
              <Label className="font-semibold text-secondary">
                ID sản phẩm
              </Label>
              <Input
                readOnly
                type="text"
                defaultValue={product.productId}
                className="mb-3 mt-1"
              />

              {/* tên sản phẩm */}
              <Label className="font-semibold text-secondary">
                Tên sản phẩm
              </Label>
              <Input
                readOnly={!isEditing}
                type="text"
                placeholder="Nhập tên sản phẩm"
                defaultValue={product.productName}
                {...register("productName")}
                className="mb-3 mt-1"
              />
              {errors.productName && (
                <p className="error-lens">{errors.productName.message}</p>
              )}

              {/* nơi xuất xứ */}
              <Label className="font-semibold text-secondary">Xuất xứ</Label>
              <Input
                readOnly={!isEditing}
                type="text"
                placeholder="Nhập nơi xuất xứ"
                defaultValue={product.origin}
                {...register("origin")}
                className="mb-3 mt-1"
              />
              {errors.origin && (
                <p className="error-lens">{errors.origin.message}</p>
              )}

              {/* tồn kho */}
              <Label className="mt-2 font-semibold text-secondary">
                Tồn kho
              </Label>
              <Input
                readOnly={!isEditing}
                type="text"
                placeholder="Nhập số lượng tồn kho"
                defaultValue={product.stock}
                {...register("stock")}
                className="mt-1"
              />
              {errors.stock && (
                <p className="error-lens">{errors.stock.message}</p>
              )}
            </div>

            <div className="col-span-1">
              {/* danh mục */}
              <Label className="font-semibold text-secondary">Danh mục</Label>
              {isEditing ? (
                <>
                  <Select
                    {...register("category")}
                    defaultValue={product.category}
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
                  defaultValue={
                    product.category === "trai-cay"
                      ? "Trái cây"
                      : product.category === "rau-cu"
                        ? "Rau củ"
                        : ""
                  }
                  className="mb-3 mt-1"
                />
              )}

              {/* Tên thực phẩm */}
              <Label className="mt-2 font-semibold text-secondary">
                Loại danh mục
              </Label>
              <Input
                readOnly
                type="text"
                placeholder="Nhập tên danh mục"
                defaultValue={product.category}
                className="mb-3 mt-1"
              />
              {/* nhà cung cấp */}
              <Label className="mt-2 font-semibold text-secondary">
                Nhà cung cấp
              </Label>
              <Input
                readOnly={!isEditing}
                type="text"
                placeholder="Nhập tên nhà cung cấp"
                defaultValue={product.supplier}
                {...register("supplier")}
                className="mb-3 mt-1"
              />
              {errors.supplier && (
                <p className="error-lens">{errors.supplier.message}</p>
              )}

              {/* Hữu cơ */}
              <Label className="mt-2 font-semibold text-secondary">
                Hữu cơ
              </Label>
              {isEditing ? (
                <>
                  <Select
                    {...register("organic")}
                    defaultValue={product.organic ? "true" : "false"}
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
                  defaultValue={product.organic ? "Hữu cơ" : "Vô cơ"}
                  className="mt-1"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              {/* khối lượng */}
              <Label className="font-semibold text-secondary">Khối lượng</Label>
              <Input
                readOnly={!isEditing}
                type="number"
                placeholder="Nhập khối lượng sản phẩm"
                defaultValue={product.weight}
                {...register("weight")}
                className="mt-1"
              />
              {errors.weight && (
                <p className="error-lens">{errors.weight.message}</p>
              )}
              <div className="mt-2">
                <Label className="font-semibold text-secondary">
                  Ngày nhập
                </Label>
                <Input
                  readOnly
                  defaultValue={formatDateDMY(product.entryDate)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="col-span-1">
              <Label className="font-semibold text-secondary">Đơn vị</Label>

              {isEditing ? (
                <>
                  <Select {...register("unit")} defaultValue={product.unit}>
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
                  defaultValue={product.unit}
                  className="mt-1"
                />
              )}
              <div className="mt-2">
                <Label className="font-semibold text-secondary">
                  Ngày hết hạn
                </Label>
                <Input
                  readOnly
                  defaultValue={formatDateDMY(product.expiryDate)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="col-span-1">
              {/* Giá */}
              <Label className="font-semibold text-secondary">Giá</Label>
              <Input
                readOnly={!isEditing}
                type="number"
                placeholder="Nhập giá sản phẩm"
                defaultValue={formatCurrency(product.price)}
                {...register("price")}
                className="mt-1"
              />
              {errors.price && (
                <p className="error-lens">{errors.price.message}</p>
              )}
              <div className="mt-2">
                <Label className="font-semibold text-secondary">Ngày tạo</Label>
                <Input
                  readOnly
                  defaultValue={formatDateDMY(product.createdAt)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="col-span-1">
              <Label className="font-semibold text-secondary">Trạng thái</Label>

              <Input
                readOnly
                type="text"
                defaultValue={product.status ? "Đang bán" : "Ngưng bán"}
                className="mt-1"
              />
              <div className="mt-2">
                <Label className="font-semibold text-secondary">
                  Ngày cập nhật
                </Label>
                <Input
                  readOnly
                  defaultValue={formatDateDMY(product.updatedAt)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
          <div>
            <Label className="font-semibold text-secondary">Mô tả</Label>
            <Textarea
              readOnly={!isEditing}
              rows={3}
              placeholder="Nhập mô tả sản phẩm"
              defaultValue={product.description.replace(/<[^>]*>?/gm, "")}
              {...register("description")}
            />
            {errors.description && (
              <p className="error-lens">{errors.description.message}</p>
            )}
          </div>

          <div className="mt-4 flex justify-between">
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
        </DialogContent>
      </Dialog>
    </form>
  )
}

export default ViewProductDialog
