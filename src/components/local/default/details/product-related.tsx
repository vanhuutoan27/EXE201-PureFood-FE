import { ProductType } from "@/schemas/productSchema"

import ProductCard from "@/components/global/molecules/product-card"

interface ProductRelatedProps {
  productsData: ProductType[]
}

function ProductRelated({ productsData }: ProductRelatedProps) {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold text-secondary">
        Sản phẩm liên quan
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsData.map((product) => (
          <ProductCard key={product.productId} productData={product} />
        ))}
      </div>
    </>
  )
}

export default ProductRelated
