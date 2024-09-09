import { productType } from "@/schemas/productSchema"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/global/atoms/carousel"
import ProductCard from "@/components/global/molecules.tsx/product-card"
import Section from "@/components/global/organisms/section"

interface RelatedProductProps {
  relatedProducts: productType[]
}

function Related({ relatedProducts }: RelatedProductProps) {
  return (
    <div className="mt-10">
      <Section
        title="Sản phẩm liên quan"
        description="Sản phẩm rau hữu cơ sạch, tươi ngon, an toàn cho sức khỏe, đạt chuẩn canh tác bền vững."
      />

      <Carousel
        opts={{
          align: "start"
        }}
        className="w-full"
      >
        <CarouselContent>
          {relatedProducts.map((product) => (
            <CarouselItem
              key={product.productId}
              className="p-2 md:basis-1/2 lg:basis-1/4"
            >
              <ProductCard
                productId={product.productId}
                images={product.images}
                price={product.price}
                name={product.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Related
