import { ProductType } from "@/schemas/productSchema"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/global/atoms/carousel"
import ProductCard from "@/components/global/molecules/product-card"
import Section from "@/components/global/organisms/section"

interface ProductRelatedProps {
  products: ProductType[]
}

function ProductRelated({ products }: ProductRelatedProps) {
  return (
    <>
      <Section
        button="xem thêm"
        url="/asd"
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
          {products.map((product) => (
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
    </>
  )
}

export default ProductRelated
