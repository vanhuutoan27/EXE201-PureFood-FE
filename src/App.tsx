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

// User pages
const Account = lazy(() => import("@/pages/Account"))
const Password = lazy(() => import("@/pages/Password"))
const Order = lazy(() => import("@/pages/Order"))

// Admin pages
const Dashboard = lazy(() => import("@/pages/admin/Dashboard"))

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

          <Route element={<UserLayout />}>
            <Route path="/thong-tin-ca-nhan/:userId" element={<Account />} />
            <Route path="/mat-khau/:userId" element={<Password />} />
            <Route path="/don-hang/:userId" element={<Order />} />
          </Route>
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
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
