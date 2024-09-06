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
    <div className="mb-[100px] flex h-[550px] w-full items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-[url('https://coolwallpapers.me/picsup/447346-food-photography-picture.jpg')] bg-cover bg-center font-semibold text-white">
        <h3 className="text-4xl">Fresh & Organic</h3>
        <h1 className="text-[80px] font-medium">Healthy Vegetables</h1>
        <p className="text-xl">
          Discover the best deals on farm-fresh vegetables
        </p>
      </div>

      <div className="absolute top-[460px] w-[60%] rounded-xl border-black bg-gray-50 p-6 shadow-lg">
        <Tabs defaultValue="address">
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
