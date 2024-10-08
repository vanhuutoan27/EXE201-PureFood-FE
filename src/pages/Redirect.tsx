import { Navigate } from "react-router-dom"

import { useAuthContext } from "@/contexts/auth-context"

import Loading from "./Loading"

function Redirect() {
  const { user } = useAuthContext()
  const role = user?.role

  switch (role) {
    case "Admin":
      return <Navigate to="/admin/dashboard" />
    case "Customer":
      return <Navigate to="/" />
    default:
      return <Loading />
  }
}

export default Redirect
