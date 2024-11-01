import { formatCurrency } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/global/atoms/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/global/atoms/table"

interface TopProduct {
  productName: string
  quantity: number
  price: number
  image: string
}

interface TopProductsProps {
  topProducts: TopProduct[]
}

function TopProducts({ topProducts }: TopProductsProps) {
  return (
    <Card className="col-span-4 p-0">
      <CardHeader>
        <CardTitle>Sản phẩm hàng đầu</CardTitle>
        <CardDescription>
          5 sản phẩm bán chạy nhất trong tháng này.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hình ảnh</TableHead>
              <TableHead>Tên sản phẩm</TableHead>
              <TableHead className="text-right">Số lượng đã bán</TableHead>
              <TableHead className="text-right">Giá (VND)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topProducts.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="h-12 w-12 object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  {product.productName}
                </TableCell>
                <TableCell className="text-center">
                  {product.quantity}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(product.price)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default TopProducts
