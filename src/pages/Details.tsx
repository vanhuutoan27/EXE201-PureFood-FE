import { useParams } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import { exampleVegetables } from "@/constants/product"

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

  const currentPageName = (() => {
    if (product.category === "Rau" || product.category === "Củ" || product.category === "Quả") {
      return "Rau củ"
    } else if (product.category === "Trái") {
      return "Trái cây"
    } else {
      return ""
    }
  })()

  const currentPageUrl = (() => {
    if (product.category === "Rau" || product.category === "Củ" || product.category === "Quả") {
      return "/rau-cu"
    } else if (product.category === "Trái") {
      return "/trai-cay"
    } else {
      return ""
    }
  })()

  return (
    <div className="flex w-full flex-col gap-10">
      <Bread
        lastPage={{ name: "Trang chủ", url: "/" }}
        currentPage={{ name: currentPageName, url: currentPageUrl }}
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

      <ProductBlogs blogs={product.blogs || []} />

      <Related products={relatedProducts} />
    </div>
  )
}

export default Details
