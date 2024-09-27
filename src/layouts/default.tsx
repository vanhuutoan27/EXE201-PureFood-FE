import { useEffect } from "react"

import { Outlet, useLocation } from "react-router-dom"

import { scrollToTop } from "@/lib/utils"

import Footer from "@/components/global/organisms/footer"
import Header from "@/components/global/organisms/header"

function DefaultLayout() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    scrollToTop()
  }, [location])

  return (
    <div className="flex flex-col">
      {!isHome && <Header />}
      <main className={`container min-h-screen ${isHome ? "mt-0" : "mt-28"}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
