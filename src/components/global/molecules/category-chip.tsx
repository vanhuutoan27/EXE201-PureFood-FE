interface CategoryChipProps {
  content: string
}

function CategoryChip({ content }: CategoryChipProps) {
  let background = "bg-gray-500"
  let textColor = "text-white"

  switch (content) {
    case "rau-cu":
      content = "Rau củ"
      background = "bg-green-600"
      textColor = "text-white"
      break
    case "trai-cay":
      content = "Trái cây"
      background = "bg-orange-600"
      textColor = "text-white"
      break
  }

  return (
    <span
      className={`select-none truncate rounded-lg px-3 py-1 text-sm font-medium ${background} ${textColor}`}
    >
      {content}
    </span>
  )
}

export default CategoryChip
