import { ProductType } from "@/schemas/productSchema"

import ProductCard from "@/components/global/molecules/product-card"

interface FeaturedProductsProps {
  productsData: ProductType[]
}

function FeaturedProducts({ productsData }: FeaturedProductsProps) {
  return (
    <>
      <h2 className="mb-12 text-center text-3xl font-bold">Sản phẩm nổi bật</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {productsData.slice(0, 4).map((product) => (
          <ProductCard key={product.productId} productData={product} />
        ))}
      </div>
    </>
  )
}

export default FeaturedProducts
