import FilterProduct from "@/components/local/home/details/filter-product"
import ProductList from "@/components/local/home/details/product-list"
import SearchProduct from "@/components/local/home/details/search-product"

function Product() {
  return (
    <div className="mt-10 flex w-full flex-col gap-10">
      <SearchProduct />
      <div className="flex gap-10">
        <div>
          <FilterProduct />
        </div>
        <ProductList />
      </div>
    </div>
  )
}

export default Product
