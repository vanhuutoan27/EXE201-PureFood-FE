import { useLocation, useParams } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import { exampleProductsData } from "@/constants/product"

import Bread from "@/components/global/molecules/bread"
import ProductDetails from "@/components/local/default/details/product-details"
import ProductImage from "@/components/local/default/details/product-image"
import ProductInformation from "@/components/local/default/details/product-information"
import ProductRelated from "@/components/local/default/details/product-related"

import ErrorPage from "./Error"

function Details() {
  const { productSlug } = useParams()
  const categoryUrl = useLocation().pathname.split("/")[1]

  const productsData = exampleProductsData.find(
    (veg: ProductType) => veg.slug === productSlug
  )

  if (!productsData) {
    return <ErrorPage statusCode={404} />
  }

  const relatedProducts = exampleProductsData
    .filter(
      (product) =>
        product.slug !== productsData.slug &&
        product.category === productsData.category
    )
    .slice(0, 4)

  return (
    <div className="space-y-10">
      <Bread
        lastPage={{ name: "Trang chủ", url: "/" }}
        currentPage={{
          name: categoryUrl === "rau-cu" ? "Rau Củ" : "Trái Cây",
          url: `/${categoryUrl}`
        }}
        currentDetailsPage={productsData.productName}
      />

      <div className="grid gap-8 md:grid-cols-2">
        <ProductImage images={productsData.images} />
        <ProductInformation productData={productsData} />
      </div>

      <ProductDetails productData={productsData} />
      <ProductRelated productsData={relatedProducts} />
    </div>
  )
}

export default Details
