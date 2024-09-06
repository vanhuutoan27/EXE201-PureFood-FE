import { Navigation } from "lucide-react"

import { Button } from "@/components/global/atoms/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/global/atoms/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/global/atoms/tabs"

function Hero() {
  return (
    <div className="mb-[100px] flex h-[80vh] w-full items-center justify-center">
      <div className="flex h-full w-full select-none flex-col items-center justify-center gap-4 rounded-3xl bg-[url('https://coolwallpapers.me/picsup/447346-food-photography-picture.jpg')] bg-cover bg-center font-semibold text-white">
        <h3 className="text-3xl">Tươi mới & Hữu cơ</h3>
        <h2 className="text-6xl font-bold uppercase tracking-wider">
          Rau tốt cho sức khỏe
        </h2>
        <p className="text-xl font-medium">
          Khám phá những ưu đãi tốt nhất cho rau tươi từ trang trại
        </p>
      </div>

      <div className="absolute top-[460px] w-[60%] rounded-xl bg-gray-50 p-6 shadow-lg">
        <Tabs defaultValue="vegetable">
          <TabsList className="grid w-60 grid-cols-2">
            <TabsTrigger value="vegetable">Vegetable</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
          </TabsList>
          <TabsContent value="vegetable" className="flex flex-col gap-6">
            <div className="flex w-full gap-6">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="fruit">Fruit</SelectItem>
                    <SelectItem value="vegetable">Vegetable</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button className="flex gap-2">
                <Navigation size={18} />
                Choose address
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="address">asd</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Hero
