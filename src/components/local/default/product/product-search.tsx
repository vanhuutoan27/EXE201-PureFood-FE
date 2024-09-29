import { Input } from "@/components/global/atoms/input"

interface ProductSearchProps {
  searchValue: string
  setSearchValue: (value: string) => void
}

function ProductSearch({ searchValue, setSearchValue }: ProductSearchProps) {
  return (
    <div className="flex gap-4">
      <Input
        placeholder="Tìm theo tên sản phẩm..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="border-input font-semibold"
      />
    </div>
  )
}

export default ProductSearch
