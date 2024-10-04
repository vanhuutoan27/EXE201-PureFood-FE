import { ProductType } from "@/schemas/productSchema"

import { sampleReviewData } from "@/constants/reviews"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/global/atoms/tabs"

import ProductDescription from "./product-description"
import ProductNutrition from "./product-nutrition"
import ProductReviews from "./product-reviews"

interface ProductDetailsProps {
  productData: ProductType
}

function ProductDetails({ productData }: ProductDetailsProps) {
  const reviewsData = sampleReviewData

  return (
    <Tabs defaultValue="description">
      <TabsList>
        <TabsTrigger value="description">Mô tả</TabsTrigger>
        <TabsTrigger value="nutrition">Dinh dưỡng</TabsTrigger>
        <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-4">
        <ProductDescription description={productData.description} />
      </TabsContent>

      <TabsContent value="nutrition" className="mt-4">
        <ProductNutrition foodName={productData.foodName} />
      </TabsContent>

      <TabsContent value="reviews" className="mt-4">
        <ProductReviews reviews={reviewsData} />
      </TabsContent>
    </Tabs>
  )
}

export default ProductDetails
