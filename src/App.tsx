import { Suspense, lazy } from "react"

import { Route, Routes } from "react-router-dom"

import AdminLayout from "./layouts/admin"
import DefaultLayout from "./layouts/default"
import UserLayout from "./layouts/user"
import Loading from "./pages/Loading"

const Index = lazy(() => import("@/pages/Index"))
const Login = lazy(() => import("@/pages/Login"))
const Register = lazy(() => import("@/pages/Register"))
const Error = lazy(() => import("@/pages/Error"))
const Product = lazy(() => import("@/pages/Products"))
const Details = lazy(() => import("@/pages/Details"))
const Blog = lazy(() => import("@/pages/Blogs"))
const Cart = lazy(() => import("@/pages/Cart"))
const Order = lazy(() => import("@/pages/Order"))

// User pages
const UserAccount = lazy(() => import("@/pages/user/Account"))
const UserPassword = lazy(() => import("@/pages/user/Password"))
const UserOrder = lazy(() => import("@/pages/user/Order"))

// Admin pages
const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"))
const AdminProducts = lazy(() => import("@/pages/admin/Products"))
const AdminAddProduct = lazy(() => import("@/pages/admin/ProductAdd"))
const AdminOrders = lazy(() => import("@/pages/admin/Orders"))
const AdminOrdersNew = lazy(() => import("@/pages/admin/OrdersNew"))
const AdminOrdersProcessed = lazy(() => import("@/pages/admin/OrdersProcessed"))
const AdminUsers = lazy(() => import("@/pages/admin/Users"))
const TestDatePicker = lazy(() => import("@/pages/admin/TestDatePicker"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/rau-cu" element={<Product />} />
          <Route path="/rau-cu/:productSlug" element={<Details />} />
          <Route path="/trai-cay" element={<Product />} />
          <Route path="/trai-cay/:productSlug" element={<Details />} />
          <Route path="/kien-thuc" element={<Blog />} />
          <Route path="/gio-hang/:userId" element={<Cart />} />
          <Route path="/dat-hang" element={<Order />} />

          <Route element={<UserLayout />}>
            <Route
              path="/thong-tin-ca-nhan/:userId"
              element={<UserAccount />}
            />
            <Route path="/mat-khau/:userId" element={<UserPassword />} />
            <Route path="/don-hang/:userId" element={<UserOrder />} />
          </Route>
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/san-pham/rau-cu" element={<AdminProducts />} />
          <Route path="/admin/san-pham/trai-cay" element={<AdminProducts />} />
          <Route path="/admin/san-pham/tao-moi" element={<AdminAddProduct />} />
          <Route path="/admin/don-hang/tat-ca" element={<AdminOrders />} />
          <Route path="/admin/don-hang/moi" element={<AdminOrdersNew />} />
          {/* <Route path="/admin/san-pham/tao-moi" element={<TestDatePicker />} /> */}
          <Route
            path="/admin/don-hang/da-xu-ly"
            element={<AdminOrdersProcessed />}
          />
          <Route path="/admin/khach-hang" element={<AdminUsers />} />

          <Route path="/admin/not-found" element={<Error statusCode={404} />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/*" element={<Error statusCode={404} />} />
        {/* <Route path="/redirect" element={<Redirect />} /> */}
        <Route path="/not-found" element={<Error statusCode={404} />} />
        <Route path="/unauthorized" element={<Error statusCode={401} />} />
        <Route path="/forbidden" element={<Error statusCode={403} />} />
      </Routes>
    </Suspense>
  )
}

export default App
