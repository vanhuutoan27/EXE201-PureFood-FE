import { useState } from "react"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import { Input } from "@/components/global/atoms/input"

function FruitSearch() {
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = () => {
    console.log("Tên rau củ: ", searchValue)
  }

  return (
    <Card className="flex gap-8">
      <Input
        placeholder="Nhập tên trái cây muốn tìm"
        className="font-semibold"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button type="button" variant="default" onClick={handleSearch}>
        Tìm kiếm
      </Button>
    </Card>
  )
}

export default FruitSearch
