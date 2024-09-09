import React, { useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
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
    <div className="flex">
      <div className="mr-4 flex flex-col space-y-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            className={`h-20 w-20 cursor-pointer rounded-lg object-cover shadow ${
              currentIndex === index
                ? "border-2 border-secondary shadow-lg"
                : "border-2 border-gray-400 opacity-60 shadow-lg"
            }`}
          />
        ))}
      </div>
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="h-[60vh] w-[60vh] select-none rounded-lg border-2 object-cover shadow-lg border-secondary"
        />
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2"
        >
          <ChevronLeft color="white" size={32} className="cursor-pointer" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <ChevronRight color="white" size={32} className="cursor-pointer" />
        </button>
      </div>
    </div>
  )
}

export default ImageGallery
