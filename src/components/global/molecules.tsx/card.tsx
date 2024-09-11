import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  backgroundColor?: string
  className?: string
}

function Card({
  children,
  className,
  backgroundColor = "bg-white"
}: CardProps) {
  return (
    <div className={cn("rounded-xl p-6 shadow-md", backgroundColor, className)}>
      {children}
    </div>
  )
}

export default Card
