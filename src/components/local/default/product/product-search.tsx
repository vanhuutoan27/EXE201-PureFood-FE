import { useState } from "react"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import { Input } from "@/components/global/atoms/input"

function ProductSearch() {
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = () => {
    console.log("Tên rau củ: ", searchValue)
  }

  return (
    <Card className="flex gap-8">
      <Input
        placeholder="Tìm theo tên trái cây..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="font-semibold"
      />
      <Button type="button" variant="default" onClick={handleSearch}>
        Tìm kiếm
      </Button>
    </Card>
  )
}
export default ProductSearch
