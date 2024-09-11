import { useState } from "react"

import { Button } from "@/components/global/atoms/button"
import { Input } from "@/components/global/atoms/input"
import Card from "@/components/global/molecules.tsx/card"

function SearchProduct() {
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = () => {
    console.log("Tên rau củ:", searchValue)
  }

  return (
    <Card>
      <div className="flex gap-4">
        <Input
          placeholder="Nhập tên rau củ quả muốn tìm"
          className="font-semibold"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button variant={"default"} onClick={handleSearch}>
          Tìm kiếm
        </Button>
      </div>
    </Card>
  )
}

export default SearchProduct
