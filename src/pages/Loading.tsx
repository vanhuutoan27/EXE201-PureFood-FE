import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"

function Loading() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      navigate("/not-found")
    }, 3000)

    return () => clearTimeout(timer)
  }, [history])

  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center">
      {loading && <ClipLoader color="#00000" size={70} />}
    </div>
  )
}

export default Loading
