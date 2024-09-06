import { Outlet } from "react-router-dom"

function DefaultLayout() {
  return (
    <div className="container flex min-h-screen">
      <Outlet />
    </div>
  )
}

export default DefaultLayout
