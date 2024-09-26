import { useLocation, useParams } from "react-router-dom"

import { ProductType } from "@/schemas/productSchema"

import { exampleProductsData } from "@/constants/product"

import Bread from "@/components/global/molecules/bread"
import ProductImage from "@/components/local/details/product-image"
import ProductInformation from "@/components/local/details/product-information"
import ProductRelated from "@/components/local/details/product-related"

import ErrorPage from "./Error"

function Details() {
  const { productSlug } = useParams()
  const categoryUrl = useLocation().pathname.split("/")[1]

  const product = exampleProductsData.find(
    (veg: ProductType) => veg.slug === productSlug
  )

  if (!product) {
    return <ErrorPage statusCode={404} />
  }

  const relatedProducts =
    exampleProductsData.filter(
      (product: ProductType) =>
        product.slug !== productSlug && product.status === true
    ) || []

  return (
    <div className="flex w-full flex-col gap-10">
      <Bread
        lastPage={{ name: "Trang chủ", url: "/" }}
        currentPage={{
          name: categoryUrl === "rau-cu" ? "Rau Củ" : "Trái Cây",
          url: `/${categoryUrl}`
        }}
        currentDetailsPage={product.productName}
      />

      <div className="flex space-x-10">
        <div className="w-1/2">
          <ProductImage images={product.images} />
        </div>

        <div className="w-1/2">
          <ProductInformation product={product} />
        </div>
      </div>

      {/* <ProductBlogs blogs={product.blogs || []} /> */}

      <ProductRelated products={relatedProducts} />
    </div>
  )
}

export default Details
