import { Outlet } from "react-router-dom"

import Sidebar from "@/components/global/organisms/sidebar"

function AdminLayout() {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <div className="ml-72 w-screen bg-[#fafafa] px-4 py-8 sm:px-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
