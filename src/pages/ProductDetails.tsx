import { useLocation, useParams } from "react-router-dom"

import {
  useGetProductBySlug,
  useGetProductsByCategory
} from "@/apis/productApi"

import Bread from "@/components/global/molecules/bread"
import ProductBuyGuide from "@/components/local/default/details/product-buy-guide"
import ProductFaqs from "@/components/local/default/details/product-faqs"
import ProductImage from "@/components/local/default/details/product-image"
import ProductInformation from "@/components/local/default/details/product-information"
import ProductMoreDetails from "@/components/local/default/details/product-more-details"
import ProductQualityCommitment from "@/components/local/default/details/product-quality-commitment"
import ProductRelated from "@/components/local/default/details/product-related"

import Loading from "./Loading"

function ProductDetails() {
  const { productSlug } = useParams()
  const categoryUrl = useLocation().pathname.split("/")[1]

  const { data: productData, isLoading: isProductLoading } =
    useGetProductBySlug(productSlug)

  const { data: relatedProductsData, isLoading: isRelatedProductsLoading } =
    useGetProductsByCategory(categoryUrl)

  if (!productData || isProductLoading || isRelatedProductsLoading)
    return <Loading />

  const relatedProducts =
    relatedProductsData?.products?.filter(
      (product) =>
        product.slug !== productData.slug &&
        product.category === productData.category
    ) || []

  return (
    <div className="space-y-10">
      <Bread
        lastPage={{ name: "Trang chủ", url: "/" }}
        currentPage={{
          name: categoryUrl === "rau-cu" ? "Rau Củ" : "Trái Cây",
          url: `/${categoryUrl}`
        }}
        currentDetailsPage={productData.productName}
      />

      <div className="space-y-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <ProductImage images={productData.images || []} />
          <ProductInformation productData={productData} />
        </div>

        <ProductMoreDetails productData={productData} />
        <ProductQualityCommitment />
        <ProductBuyGuide />
        <ProductFaqs />
        <ProductRelated productsData={relatedProducts} />
      </div>
    </div>
  )
}

export default ProductDetails
