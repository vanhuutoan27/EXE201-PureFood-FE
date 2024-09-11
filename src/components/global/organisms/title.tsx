import { cn } from "@/lib/utils"

interface TitleProps {
  title?: string | JSX.Element
  message?: string
  className?: string
}

function Title({ title, message, className }: TitleProps) {
  return (
    <div className={cn("mb-4", className)}>
      <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
      {message && <p className="text-sm font-medium text-red-500">{message}</p>}
    </div>
  )
}

export default Title
