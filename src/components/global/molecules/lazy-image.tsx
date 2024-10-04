import { ImgHTMLAttributes } from "react"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined
  alt: string
  width?: number
  height?: number
  className?: string
}

function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: LazyImageProps) {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
      effect="blur"
      {...props}
    />
  )
}

export default LazyImage
