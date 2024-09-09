import { useState } from "react"

import { Link } from "react-router-dom"

import { formatCurrency } from "@/lib/helper"

import { Button } from "../atoms/button"
import { Skeleton } from "../atoms/skeleton"

interface ProductCardProps {
  productId: string
  name: string
  price: number
  images: string[]
}

function ProductCard({ productId, name, price, images }: ProductCardProps) {
  const [isHover, setIsHover] = useState(false)

  const renderImage = () => {
    if (images && images.length > 0) {
      // Render hover effect for jewelry images
      return (
        <div className="relative h-48 w-full overflow-hidden rounded-md">
          <img
            src={images[0]}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isHover ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={images[1]}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isHover ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      )
    } else {
      return <Skeleton className="h-48 w-full animate-pulse rounded-md" />
    }
  }

  return (
    <div className="ml-4 rounded-lg border-2 border-input p-4 shadow-md">
      <div
        className="group relative cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {renderImage()}
        <Link
          to={`/product/${productId}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isHover ? "opacity-1" : "opacity-0"
          } slow absolute -bottom-6 left-1/2 -translate-x-1/2`}
        >
          <Button variant={"default"}>Chi tiết</Button>
        </Link>
      </div>
      <div className="mt-10 text-center">
        <p className="h-7 font-semibold uppercase text-secondary">{name}</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-[13px] font-semibold text-[#c69967]">
            {formatCurrency(price)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
