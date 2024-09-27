import { useState } from "react"

interface ProductImageProps {
  images: string[]
}

function ProductImage({ images }: ProductImageProps) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-white p-4 shadow-md">
        <img
          src={mainImage}
          alt="Selected Product"
          width={600}
          height={400}
          className="h-96 w-full rounded-lg object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            className="h-24 w-full cursor-pointer rounded-lg object-cover transition-opacity hover:opacity-75"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImage
