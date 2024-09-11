import { useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductImageProps {
  images: string[]
}

function ProductImage({ images }: ProductImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="flex w-full gap-4">
      <div className="space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            className={`h-20 w-20 cursor-pointer select-none rounded-xl border-2 object-cover shadow-md ${
              currentIndex === index
                ? "border-secondary"
                : "border-secondary opacity-50"
            }`}
          />
        ))}
      </div>

      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="aspect-[1] w-full select-none rounded-xl object-cover shadow-md"
        />

        <ChevronLeft
          color="white"
          size={32}
          className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={goToPrevious}
        />

        <ChevronRight
          color="white"
          size={32}
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={goToNext}
        />
      </div>
    </div>
  )
}

export default ProductImage
