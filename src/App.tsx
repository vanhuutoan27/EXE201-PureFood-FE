import { Route, Routes } from "react-router-dom"

import DefaultLayout from "./layouts/default"
import Index from "./pages/Index"
import Login from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
