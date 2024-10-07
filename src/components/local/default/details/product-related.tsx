import { ProductType } from "@/schemas/productSchema"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/global/atoms/carousel"
import ProductCard from "@/components/global/molecules/product-card"

interface ProductRelatedProps {
  productsData: ProductType[]
}

function ProductRelated({ productsData }: ProductRelatedProps) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold text-secondary">
        Sản Phẩm Liên Quan
      </h3>

      <Carousel
        opts={{
          align: "start"
        }}
        className="w-full"
      >
        <CarouselContent>
          {productsData.map((product) => (
            <CarouselItem
              key={product.productId}
              className="p-2 md:basis-1/2 lg:basis-1/4"
            >
              <ProductCard key={product.productId} productData={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default ProductRelated
