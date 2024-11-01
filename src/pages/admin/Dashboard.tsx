import { format, isSameMonth, parseISO, subMonths } from "date-fns"
import { Activity, DollarSign, ShoppingCart, Users } from "lucide-react"

import { useGetAllOrders } from "@/apis/orderApi"
import { useGetAllProducts } from "@/apis/productApi"
import { useGetAllReviews } from "@/apis/reviewApi"
import { useGetAllUsers } from "@/apis/userApi"

import { formatCurrency } from "@/lib/utils"

import CustomerReviews from "@/components/local/admin/dashboard/customer-reviews"
import RecentOrders from "@/components/local/admin/dashboard/recent-orders"
import RevenueChart from "@/components/local/admin/dashboard/revenue-chart"
import StatisticsCard from "@/components/local/admin/dashboard/statistics-card"
import TopProducts from "@/components/local/admin/dashboard/top-products"

function Dashboard() {
  const { data: usersData } = useGetAllUsers(1, 0)
  const { data: productsData } = useGetAllProducts(1, 0)
  const { data: ordersData } = useGetAllOrders(1, 0)
  const { data: reviewsData } = useGetAllReviews(1, 0)

  const totalOrders = ordersData ? ordersData.orders.length : 0

  const totalRevenue = ordersData
    ? ordersData.orders.reduce((acc, order) => acc + order.totalAmount, 0)
    : 0

  const totalCustomers = usersData
    ? usersData.users.filter((user) => user.role === "Customer")
    : []
  const totalUsers = totalCustomers.length

  const totalProducts = productsData ? productsData.products.length : 0

  const ratings = reviewsData
    ? reviewsData.reviews.map((review) => review.rating).filter(Boolean)
    : []

  const totalReviews = ratings.length

  const previousMonth = subMonths(new Date(), 1)

  const previousMonthOrders = ordersData
    ? ordersData.orders.filter((order) =>
        isSameMonth(new Date(order.createdAt), previousMonth)
      )
    : []
  const previousMonthUsers = usersData
    ? usersData.users.filter((user) =>
        isSameMonth(new Date(user.createdAt), previousMonth)
      )
    : []

  const previousRevenue = previousMonthOrders.reduce(
    (acc, order) => acc + order.totalAmount,
    0
  )
  const previousOrders = previousMonthOrders.length
  const previousUsers = previousMonthUsers.length

  const revenueChange = previousRevenue
    ? ((totalRevenue - previousRevenue) / previousRevenue) * 100
    : 0
  const ordersChange = previousOrders
    ? ((totalOrders - previousOrders) / previousOrders) * 100
    : 0
  const usersChange = previousUsers
    ? ((totalUsers - previousUsers) / previousUsers) * 100
    : 0

  const defaultData = [
    { name: "Jan", total: 0 },
    { name: "Feb", total: 0 },
    { name: "Mar", total: 0 },
    { name: "Apr", total: 0 },
    { name: "May", total: 0 },
    { name: "Jun", total: 0 },
    { name: "Jul", total: 0 },
    { name: "Aug", total: 0 },
    { name: "Sep", total: 0 },
    { name: "Oct", total: 0 },
    { name: "Nov", total: 0 },
    { name: "Dec", total: 0 }
  ]

  const monthlyRevenue = ordersData?.orders.reduce(
    (acc, order) => {
      const month = format(parseISO(order.createdAt), "MMM")
      acc[month] = (acc[month] || 0) + order.totalAmount
      return acc
    },
    {} as Record<string, number>
  )

  const data = defaultData.map((monthData) => ({
    ...monthData,
    total: monthlyRevenue?.[monthData.name] || 0
  }))

  const recentOrders =
    ordersData?.orders
      .slice()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 5) || []

  const averageRating =
    totalReviews > 0
      ? ratings.reduce((acc, rating) => acc + rating, 0) / totalReviews
      : 0

  const ratingCounts = [5, 4, 3, 2, 1].map(
    (star) => ratings.filter((r) => r === star).length
  )

  const productCountMap: Record<
    string,
    {
      productName: string
      quantity: number
      price: number
      image: string
    }
  > = {}

  ordersData?.orders.forEach((order) => {
    order.orderSummary.forEach((product) => {
      if (productCountMap[product.productName]) {
        productCountMap[product.productName].quantity += product.quantity
      } else {
        productCountMap[product.productName] = {
          productName: product.productName,
          quantity: product.quantity,
          price: product.price,
          image: product.image
        }
      }
    })
  })

  const topProducts = Object.values(productCountMap)
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5)

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatisticsCard
          title="Tổng doanh thu"
          value={formatCurrency(totalRevenue)}
          icon={<DollarSign size={20} />}
          description={`${revenueChange.toFixed(1)}% từ tháng trước`}
        />
        <StatisticsCard
          title="Đơn hàng"
          value={totalOrders}
          icon={<ShoppingCart size={20} />}
          description={`${ordersChange.toFixed(1)}% từ tháng trước`}
        />
        <StatisticsCard
          title="Khách hàng mới"
          value={totalUsers}
          icon={<Users size={20} />}
          description={`${usersChange.toFixed(1)}% từ tháng trước`}
        />
        <StatisticsCard
          title="Sản phẩm hiện có"
          value={totalProducts}
          icon={<Activity size={20} />}
          description="Cập nhật gần đây"
        />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <RevenueChart data={data} />
        <RecentOrders totalOrders={totalOrders} ordersData={recentOrders} />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <CustomerReviews
          averageRating={averageRating}
          totalReviews={totalReviews}
          ratingCounts={ratingCounts}
        />
        <TopProducts topProducts={topProducts} />
      </div>
    </div>
  )
}

export default Dashboard
