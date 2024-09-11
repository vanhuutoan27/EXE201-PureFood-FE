import { useState } from "react"

import { exampleVegetables } from "@/data/vegetableExample"
import { Heart } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { formatCurrency } from "@/lib/helper"

import { Button } from "@/components/global/atoms/button"
import Card from "@/components/global/molecules.tsx/card"

function ProductList() {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({})

  const handleFavoriteToggle = (productId: string) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId]
    }))
  }
  const navigate = useNavigate()

  const handleDetailClick = (productId: string) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div className="flex w-full flex-col gap-10">
      {exampleVegetables.map((product) => (
        <div key={product.productId}>
          <Card>
            <div className="flex gap-10">
              <div className="h-[20vh] w-[40vh]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <div className="flex justify-between">
                  <a
                    className="text-xl font-bold uppercase text-primary duration-300 hover:text-secondary"
                    href={`/product/${product.productId}`}
                  >
                    {product.category} {product.name} - {product.weight}{" "}
                    {product.unit}
                  </a>
                  <p className="text-lg font-bold text-secondary">
                    {formatCurrency(product.price)}
                  </p>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 220)}...`
                    : product.description}
                </p>
                {product.organic && (
                  <span className="text-sm font-semibold text-secondary">
                    Thực phẩm hữu cơ 100%
                  </span>
                )}
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-muted-foreground">
                    Ngày nhập:{" "}
                    <span className="font-semibold text-secondary">
                      {product.entryDate}
                    </span>
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    Nơi nhập:{" "}
                    <span className="font-semibold text-secondary">
                      {product.origin}
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button
                    key="favorite"
                    type="button"
                    variant={
                      favorites[product.productId] ? "default" : "outline"
                    }
                    onClick={() => handleFavoriteToggle(product.productId)}
                    className={`text-muted-foreground ${
                      favorites[product.productId]
                        ? "border-2 border-primary font-semibold text-primary-foreground"
                        : "border-2 border-primary font-semibold text-muted-foreground"
                    }`}
                  >
                    <Heart size={18} />
                  </Button>
                  <Button
                    variant={"default"}
                    className="w-full"
                    onClick={() => handleDetailClick(product.productId)}
                  >
                    Chi tiết
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default ProductList
