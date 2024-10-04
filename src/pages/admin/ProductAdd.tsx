import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { CalendarIcon, Upload } from "lucide-react"
import { useForm } from "react-hook-form"

import { CreateProductType, createProductSchema } from "@/schemas/productSchema"

import { useCreateProduct } from "@/apis/productApi"

import { diamoonDB } from "@/lib/firebase"
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
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isDragOver, setIsDragOver] = useState<boolean>(false)

  const createProductMutation = useCreateProduct()

  const handleDateSelect = (
    date: Date | undefined,
    fieldName: "entryDate" | "expiryDate"
  ) => {
    if (date) {
      const isoString = convertToLocalISOString(date)
      if (fieldName === "entryDate") {
        setEntryDate(isoString)
      } else if (fieldName === "expiryDate") {
        setExpiryDate(isoString)
      }
      setValue(fieldName, isoString)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setUploadedFiles(Array.from(files))
      setError("images", { message: "" })
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(false)
    const files = event.dataTransfer.files
    if (files) {
      setUploadedFiles(Array.from(files))
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const uploadImagesToFirebase = async (files: File[]) => {
    const uploadPromises = files.map(async (file) => {
      const storageRef = ref(diamoonDB, `PureFood/Products/${file.name}`)
      await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(storageRef)
      return downloadURL
    })

    return Promise.all(uploadPromises)
  }

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    reset,
    formState: { errors }
  } = useForm<CreateProductType>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      organic: false
    }
  })

  const handleCategoryChange = (value: string) => {
    setValue("category", value)
  }

  const handleSupplierChange = (value: string) => {
    setValue("supplier", value)
  }

  const handleUnitChange = (value: string) => {
    setValue("unit", value)
  }

  const handleOrganicChange = (value: boolean) => {
    setValue("organic", value)
  }

  const onSubmit = async (data: CreateProductType) => {
    try {
      if (uploadedFiles.length === 0) {
        setError("images", { message: "Vui lòng thêm hình ảnh sản phẩm" })
        return
      }

      const imageUrls = await uploadImagesToFirebase(uploadedFiles)

      setValue("images", imageUrls as [string, ...string[]])

      const finalData = { ...data, images: imageUrls }

      createProductMutation.mutate(finalData)
      setUploadedFiles([])
      reset()
      console.log(JSON.stringify(finalData, null,2))
    } catch (error) {
      console.error("Error uploading images:", error)
    }
  }

  return (
    <div>
      <AdminTitle title="Thêm sản phẩm mới" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="category">Danh mục</Label>
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="h-10 rounded-xl bg-white pl-5">
                <SelectValue placeholder="Chọn danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="rau-cu">Rau củ</SelectItem>
                  <SelectItem value="trai-cay">Trái cây</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {errors.category && (
              <p className="error-lens">Vui lòng chọn loại sản phẩm</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="supplier">Nhà cung cấp</Label>
            <Select onValueChange={handleSupplierChange}>
              <SelectTrigger className="h-10 rounded-xl bg-white pl-5">
                <SelectValue placeholder="Chọn nhà cung cấp" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="PureFood">PureFood</SelectItem>
                  <SelectItem value="Moncati">Moncati</SelectItem>
                  <SelectItem value="Other">Khác</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {errors.supplier && (
              <p className="error-lens">Vui lòng chọn nhà cung cấp</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="productName">Tên sản phẩm</Label>
            <Input
              type="text"
              id="productName"
              placeholder="Nhập tên sản phẩm"
              {...register("productName")}
              className="bg-white"
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
              className="bg-white"
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
              {...register("description")}
              className="resize-none bg-white"
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
              {...register("stock", { valueAsNumber: true })}
              className="bg-white"
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
              {...register("weight", { valueAsNumber: true })}
              className="bg-white"
            />

            {errors.weight && (
              <p className="error-lens">{errors.weight.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="unit">Đơn vị</Label>
            <Select onValueChange={handleUnitChange}>
              <SelectTrigger className="h-10 rounded-xl bg-white pl-5">
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
              {...register("price", { valueAsNumber: true })}
              className="bg-white"
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
              className="bg-white"
            />

            {errors.origin && (
              <p className="error-lens">{errors.origin.message}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="organic"
              {...register("organic")}
              onCheckedChange={handleOrganicChange}
            />

            <Label htmlFor="organic">Sản phẩm hữu cơ</Label>
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
                  onSelect={(date) => handleDateSelect(date, "entryDate")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {errors.entryDate && (
              <p className="error-lens">Vui lòng nhập ngày nhập</p>
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
                  onSelect={(date) => handleDateSelect(date, "expiryDate")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {errors.expiryDate && (
              <p className="error-lens">Vui lòng nhập ngày hết hạn</p>
            )}
          </div>

          <div className="col-span-2 space-y-1">
            <Label htmlFor="images">Hình ảnh</Label>
            <label htmlFor="file-upload" className="cursor-pointer">
              <div
                className={`slow mt-1 flex flex-col items-center justify-center space-y-1 rounded-xl border-2 ${isDragOver ? "border-primary" : "border-dashed"} bg-white px-6 py-10 font-medium`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload size={32} className="mb-2 text-gray-400" />
                <div className="flex select-none text-sm text-gray-500">
                  <span className="font-semibold text-primary">
                    Tải hình lên
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                    onChange={handleFileUpload}
                  />
                  <p className="pl-1">hoặc kéo và thả</p>
                </div>
                <p className="select-none text-xs text-gray-500">
                  PNG, JPG, GIF lên đến 10MB
                </p>
              </div>
            </label>

            {uploadedFiles.length > 0 && (
              <div className="pt-4">
                <Label>Hình ảnh đã tải lên:</Label>
                <ul className="list-disc pl-5">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="text-gray-500">
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {errors.images && (
              <p className="error-lens">{errors.images.message}</p>
            )}
          </div>
        </div>

        <Button type="submit" variant="default" className="h-11 w-full">
          Thêm sản phẩm
        </Button>
      </form>
    </div>
  )
}

export default ProductAdd
