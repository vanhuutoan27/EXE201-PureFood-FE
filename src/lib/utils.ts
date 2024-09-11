import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Scroll to the top of the page
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Format a number to currency format
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN").format(amount) + " VND"
}

// Format a date string to hh:mm AM/PM, DD Month, YYYY
export const formatTimeAndDate = (dateString: string): string => {
  if (!dateString) {
    return "NaN"
  }

  const date = new Date(dateString)

  let hours = date.getUTCHours()
  const minutes = date.getUTCMinutes().toString().padStart(2, "0")
  const period = hours >= 12 ? "PM" : "AM"
  hours = hours % 12 || 12

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes} ${period}`

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }

  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(/(\d+)\s(\w+)\s(\d+)/, "$1 $2, $3")

  return `${formattedTime}, ${formattedDate}`
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
