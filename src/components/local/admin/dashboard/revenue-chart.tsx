import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { formatShortCurrency } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/global/atoms/card"

interface RevenueChartProps {
  data: { name: string; total: number }[]
}

function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card className="col-span-4 p-0">
      <CardHeader>
        <CardTitle>Tổng quan</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${formatShortCurrency(value)}`}
            />
            <Bar dataKey="total" fill="#9fbd48" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default RevenueChart
