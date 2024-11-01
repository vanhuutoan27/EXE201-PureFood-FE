import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/global/atoms/card"

interface StatisticsCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  description?: string
}

function StatisticsCard({
  title,
  value,
  icon,
  description
}: StatisticsCardProps) {
  return (
    <Card className="p-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="space-y-2">
        <h4 className="select-none text-2xl font-bold text-primary">{value}</h4>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
