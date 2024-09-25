import { Suspense, lazy } from "react"

import { Route, Routes } from "react-router-dom"

import DefaultLayout from "./layouts/default"
import UserLayout from "./layouts/user"
import Loading from "./pages/Loading"

const Index = lazy(() => import("@/pages/Index"))
const Login = lazy(() => import("@/pages/Login"))
const Register = lazy(() => import("@/pages/Register"))
const Error = lazy(() => import("@/pages/Error"))
const Vegetable = lazy(() => import("@/pages/Vegetable"))
const Fruit = lazy(() => import("@/pages/Fruit"))
const Details = lazy(() => import("@/pages/Details"))
const Blog = lazy(() => import("@/pages/Blogs"))

const Account = lazy(() => import("@/pages/Account"))
const History = lazy(() => import("@/pages/History"))
const Password = lazy(() => import("@/pages/Password"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/rau-cu" element={<Vegetable />} />
          <Route path="/trai-cay" element={<Fruit />} />
          <Route path="/rau-cu/:productId" element={<Details />} />
          <Route path="/trai-cay/:productId" element={<Details />} />
          <Route path="/kien-thuc" element={<Blog />} />

          <Route element={<UserLayout />}>
            <Route path="/thong-tin-ca-nhan/:userId" element={<Account />} />
            <Route path="/lich-su/:userId" element={<History />} />
            <Route path="/mat-khau/:userId" element={<Password />} />
          </Route>
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
