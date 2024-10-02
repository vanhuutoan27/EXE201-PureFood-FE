import { Input } from "@/components/global/atoms/input"

interface ProductSearchProps {
  searchValue: string
  setSearchValue: (value: string) => void
}

function ProductSearch({ searchValue, setSearchValue }: ProductSearchProps) {
  return (
    <Input
      placeholder="Tìm theo tên sản phẩm..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="h-12 border-input"
    />
  )
}

export default ProductSearch
