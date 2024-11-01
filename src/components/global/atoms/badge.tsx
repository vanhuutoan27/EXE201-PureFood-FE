import * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center select-none rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-500 text-primary-foreground shadow hover:bg-blue-500/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-red-500 text-destructive-foreground shadow hover:bg-red-500/80",
        outline: "text-foreground",
        active:
          "border-transparent bg-green-500 text-primary-foreground shadow hover:bg-green-500/80",
        pending:
          "border-transparent bg-yellow-500 text-primary-foreground shadow hover:bg-yellow-500/80",
        processing:
          "border-transparent bg-orange-500 text-primary-foreground shadow hover:bg-orange-500/80",
        shipping:
          "border-transparent bg-blue-500 text-primary-foreground shadow hover:bg-blue-500/80",
        completed:
          "border-transparent bg-green-500 text-primary-foreground shadow hover:bg-green-500/80",
        cancelled:
          "border-transparent bg-red-500 text-primary-foreground shadow hover:bg-red-500/80"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
