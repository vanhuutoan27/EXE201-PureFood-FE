import { exampleVegetables } from "@/data/vegetableExample"
import { useParams } from "react-router-dom"

import { productType } from "@/schemas/productSchema"

import BreadcrumbComponent from "@/components/global/molecules.tsx/breadcrumb-component"
import ImageGallery from "@/components/local/home/details/image-product"
import InformationProduct from "@/components/local/home/details/information-product"
import Related from "@/components/local/home/details/related-vegetable"

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()

  const product = exampleVegetables.find(
    (veg: productType) => veg.productId === productId
  )

  if (!product) {
    return <div>Product not found</div>
  }

  const relatedProducts =
    exampleVegetables.filter(
      (product: productType) =>
        product.productId !== productId && product.status === true
    ) || []

  return (
    <div className="mt-10 flex w-full flex-col gap-10">
      <BreadcrumbComponent
        lastPage="Home"
        lastPageUrl="/"
        currentPage="Sản phẩm"
        currentPageUrl="/product"
        currentDetailPage={product.name}
      />
      <div className="flex justify-center space-x-32">
        <ImageGallery images={product.images} />
        <InformationProduct
          productId={product.productId}
          category={product.category}
          name={product.name}
          price={product.price}
          origin={product.origin}
          weight={product.weight}
          unit={product.unit}
          description={product.description}
          organic={product.organic}
        />
      </div>
      <Related relatedProducts={relatedProducts} />
    </div>
  )
}

export default ProductDetail
