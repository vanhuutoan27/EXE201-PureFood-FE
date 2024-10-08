import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Scroll to the top of the page
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Capitalize the first letter of each word in a string
export function capitalize(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

// Format a number to currency format
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN").format(amount) + " VND"
}

// Format a date string to DD/MM/YYYY
export const formatDateDMY = (dateString: string): string => {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string")
  }

  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

// Extract paragraphs from an HTML string
export const extractParagraphs = (htmlString: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, "text/html")
  const paragraphs = doc.querySelectorAll("h4")
  return Array.from(paragraphs).map((h) => h.textContent)
}

// Remove Vietnamese tones from a string
export function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
}

export function convertToLocalISOString(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0") // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0")
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
}

export const getOrderStatus = (status: string) => {
  let statusValue
  let statusColor

  switch (status) {
    case "Pending":
      statusValue = "Đang chờ"
      statusColor = "text-yellow-500"
      break
    case "Processing":
      statusValue = "Đang xử lý"
      statusColor = "text-orange-500"
      break
    case "Shipping":
      statusValue = "Đang giao hàng"
      statusColor = "text-blue-500"
      break
    case "Completed":
      statusValue = "Đã hoàn thành"
      statusColor = "text-green-500"
      break
    case "Cancelled":
      statusValue = "Đã hủy"
      statusColor = "text-red-500"
      break
    default:
      statusValue = "Không xác định"
      statusColor = "text-gray-500"
  }

  return { statusValue, statusColor }
}
