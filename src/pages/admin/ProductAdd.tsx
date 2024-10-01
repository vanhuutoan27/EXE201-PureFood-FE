import { useState } from "react"

import { format } from "date-fns"
import { CalendarIcon, Upload } from "lucide-react"

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
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"
import { Switch } from "@/components/global/atoms/switch"
import { Textarea } from "@/components/global/atoms/textarea"
import AdminTitle from "@/components/global/organisms/admin-title"

function ProductAdd() {
  const [entryDate, setEntryDate] = useState<Date>()
  const [expiryDate, setExpiryDate] = useState<Date>()

  return (
    <div>
      <AdminTitle title="Thêm sản phẩm mới" />

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fruits">Fruits</SelectItem>
                <SelectItem value="vegetables">Vegetables</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="supplier">Supplier</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supplier1">Supplier 1</SelectItem>
                <SelectItem value="supplier2">Supplier 2</SelectItem>
                <SelectItem value="supplier3">Supplier 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="productName">Product Name</Label>
            <Input id="productName" placeholder="Enter product name" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              readOnly
              value="Tu generate ra (productName (weight unit))"
            />
          </div>

          <div className="col-span-2 space-y-1">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={5}
              placeholder="Enter product description"
              className="resize-none"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              type="number"
              placeholder="Enter stock quantity"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="weight">Weight</Label>
            <Input id="weight" type="number" placeholder="Enter weight" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="unit">Unit</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">kg</SelectItem>
                <SelectItem value="g">g</SelectItem>
                <SelectItem value="l">l</SelectItem>
                <SelectItem value="ml">ml</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" placeholder="Enter price" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="origin">Origin</Label>
            <Input id="origin" placeholder="Enter product origin" />
          </div>

          <div className="mt-6 flex items-center space-x-2">
            <Switch id="organic" />
            <Label htmlFor="organic">Organic</Label>
          </div>

          <div className="space-y-1">
            <Label>Entry Date</Label>
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
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={entryDate}
                  onSelect={setEntryDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-1">
            <Label>Expiry Date</Label>
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
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={expiryDate}
                  onSelect={setExpiryDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
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
