import { useEffect } from "react"

import ErrorPage from "@/pages/Error"
import { Outlet, useLocation } from "react-router-dom"

import { useAuthContext } from "@/contexts/auth-context"

import { scrollToTop } from "@/lib/utils"

import Sidebar from "@/components/global/organisms/sidebar"

function AdminLayout() {
  const location = useLocation()

  const { user } = useAuthContext()

  useEffect(() => {
    scrollToTop()
  }, [location])

  if (!user) return <ErrorPage statusCode={401} />
  if (user.role !== "Admin") return <ErrorPage statusCode={403} />

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
