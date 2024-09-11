import { Suspense, lazy } from "react"

import { Route, Routes } from "react-router-dom"

import DefaultLayout from "./layouts/default"
import Loading from "./pages/Loading"

const Index = lazy(() => import("@/pages/Index"))
const Login = lazy(() => import("@/pages/Login"))
const Register = lazy(() => import("@/pages/Register"))
const Error = lazy(() => import("@/pages/Error"))
const RauCu = lazy(() => import("@/pages/RauCu"))
const TraiCay = lazy(() => import("@/pages/TraiCay"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/rau-cu" element={<RauCu />} />
          <Route path="/trai-cay" element={<TraiCay />} />
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
