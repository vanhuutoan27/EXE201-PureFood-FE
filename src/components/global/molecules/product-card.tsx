import { Link } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import { extractParagraphs, formatCurrency } from "@/lib/utils"

import { Button } from "../atoms/button"
import LazyImage from "./lazy-image"

interface ProductCardProps {
  productData: ProductType
}

function ProductCard({ productData }: ProductCardProps) {
  return (
    <div
      key={productData.productId}
      className="overflow-hidden rounded-xl bg-white shadow-md"
    >
      <LazyImage
        src={productData.images?.[0]}
        alt={productData.slug}
        width={300}
        height={200}
        className="h-48 w-full object-cover"
      />

      <div className="px-4 py-6">
        <Link to={`/${productData.category}/${productData.slug}`}>
          <h3 className="slow mb-2 w-fit cursor-pointer text-lg font-semibold hover:text-primary">
            {productData.productName} ({productData.weight} {productData.unit})
          </h3>
        </Link>

        <p className="min-h-16 text-sm text-gray-500">
          {extractParagraphs(productData.description)}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-medium">
            <p className="text-gray-500 line-through">
              {formatCurrency(productData.price + productData.price * 0.1)}
            </p>

            {formatCurrency(productData.price)}
          </p>

          <Link
            to={`/${productData.category}/${productData.slug}`}
            className="flex justify-end"
          >
            <Button type="button" variant="default">
              Chi tiết
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
