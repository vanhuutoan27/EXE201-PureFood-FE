import { Suspense, lazy } from "react"

import { Route, Routes } from "react-router-dom"

import DefaultLayout from "./layouts/default"
import Loading from "./pages/Loading"

const Index = lazy(() => import("@/pages/Index"))
const Login = lazy(() => import("@/pages/Login"))
const Register = lazy(() => import("@/pages/Register"))
const Error = lazy(() => import("@/pages/Error"))
const Vegetable = lazy(() => import("@/pages/Vegetable"))
const Fruit = lazy(() => import("@/pages/Fruit"))
const Product = lazy(() => import("@/pages/Product"))
const Details = lazy(() => import("@/pages/Details"))
const Blog = lazy(() => import("@/pages/Blogs"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/rau-cu" element={<Vegetable />} />
          <Route path="/trai-cay" element={<Fruit />} />
          <Route path="/products/:productId" element={<Details />} />
          <Route path="/products" element={<Product />} />
          <Route path="/kien-thuc" element={<Blog />} />
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
