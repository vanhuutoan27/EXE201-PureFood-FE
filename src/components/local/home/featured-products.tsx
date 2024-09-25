import { Link } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import { Button } from "@/components/global/atoms/button"

interface FeaturedProductsProps {
  productsData: ProductType[]
}

function FeaturedProducts({ productsData }: FeaturedProductsProps) {
  return (
    <>
      <h2 className="mb-12 text-center text-3xl font-bold">Sản phẩm nổi bật</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {productsData.slice(0, 4).map((product) => (
          <div
            key={product.productId}
            className="overflow-hidden rounded-xl bg-white shadow-md"
          >
            <img
              src={product.images[0]}
              alt={product.slug}
              width={300}
              height={200}
              className="h-48 w-full object-cover"
            />

            <div className="px-4 py-6">
              <Link to={`/products/${product.category}/${product.slug}`}>
                <h3 className="slow mb-2 w-fit cursor-pointer text-lg font-semibold hover:text-primary">
                  {product.productName} - {product.weight} {product.unit}
                </h3>
              </Link>

              <p className="text-sm text-gray-600">{product.description}</p>

              <Link
                to={`/products/${product.category}/${product.slug}`}
                className="mt-4 flex justify-end"
              >
                <Button type="button" variant="default">
                  Chi tiết
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedProducts
