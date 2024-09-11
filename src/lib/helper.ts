import { ProductCartType } from "@/schemas/productSchema"

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN").format(amount) + " VND"
}

export const addToCart = (
  cartItems: ProductCartType[],
  newItem: ProductCartType
) => {
  const existingItem = cartItems.find(
    (item) => item.productId === newItem.productId
  )
  if (existingItem) {
    return cartItems.map((item) =>
      item.productId === newItem.productId
        ? { ...item, quantity: item.quantity + newItem.quantity }
        : item
    )
  }
  return [...cartItems, newItem]
}


export const formatDate = (dateString: string) => {
  if (!dateString) {
    return "NaN"
  }

  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(/(\d+)\s(\w+)\s(\d+)/, "$1 $2, $3")

  return `${formattedDate}`
}