import { Route, Routes } from "react-router-dom"

import DefaultLayout from "./layouts/default"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Product from "./pages/product"
import ProductDetail from "./pages/product-detail"

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App
