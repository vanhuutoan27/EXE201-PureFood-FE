import { exampleVegetables } from "@/data/vegetableExample"
import { useParams } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import Bread from "@/components/global/molecules/bread"
import ProductBlogs from "@/components/local/details/product-blogs"
import ProductImage from "@/components/local/details/product-image"
import ProductInformation from "@/components/local/details/product-information"
import Related from "@/components/local/details/product-related"

import ErrorPage from "./Error"

function Details() {
  const { productId } = useParams<{ productId: string }>()

  const product = exampleVegetables.find(
    (veg: ProductType) => veg.productId === productId
  )

  if (!product) {
    return <ErrorPage statusCode={404} />
  }

  const relatedProducts =
    exampleVegetables.filter(
      (product: ProductType) =>
        product.productId !== productId && product.status === true
    ) || []

  return (
    <div className="flex w-full flex-col gap-10">
      <Bread
        lastPage={{ name: "Trang chủ", url: "/" }}
        currentPage={{ name: "Sản phẩm", url: "/products" }}
        currentDetailsPage={product.name}
      />

      <div className="flex space-x-10">
        <div className="w-1/2">
          <ProductImage images={product.images} />
        </div>

        <div className="w-1/2">
          <ProductInformation product={product} />
        </div>
      </div>

      <ProductBlogs blogs={product.blog || []} />

      <Related products={relatedProducts} />
    </div>
  )
}

export default Details
