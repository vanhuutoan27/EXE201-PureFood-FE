import React, { useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
  images: string[] // Array of image URLs
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

  return (
    <>
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="h-[60vh] w-[70vh] select-none rounded-lg object-cover shadow"
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
    </>
  )
}

export default ImageGallery
