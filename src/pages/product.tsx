import ProductFilter from "@/components/local/product/product-filter"
import ProductList from "@/components/local/product/product-list"
import ProductSearch from "@/components/local/product/product-search"

function Product() {
  return (
    <div className="space-y-10">
      <ProductSearch />

      <div className="flex gap-10">
        <div className="sticky top-24 h-fit w-1/3">
          <ProductFilter />
        </div>

        <div className="w-2/3">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Product
