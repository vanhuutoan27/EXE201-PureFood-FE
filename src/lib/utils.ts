import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Scroll to the top of the page
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
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
