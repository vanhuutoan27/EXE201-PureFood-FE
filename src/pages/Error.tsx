import { useNavigate } from "react-router-dom"

import { scrollToTop } from "@/lib/utils"

import { Button } from "@/components/global/atoms/button"

interface ErrorPageProps {
  statusCode: number
}

interface ErrorMessage {
  title: string
  message: string
}

const errorMessages: Record<number, ErrorMessage> = {
  401: {
    title: "Unauthorized",
    message: "You need to log in to access this page."
  },
  403: {
    title: "Forbidden",
    message: "You don't have permission to access this page."
  },
  404: {
    title: "Page Not Found",
    message:
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
  },
  500: {
    title: "Internal Server Error",
    message: "Something went wrong on our end. Please try again later."
  }
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  const navigate = useNavigate()

  const { title, message } = errorMessages[statusCode] || {
    title: "Error",
    message: "An unexpected error occurred."
  }

  const goBack = () => {
    navigate(-1)
    setTimeout(scrollToTop, 100)
  }

  const goToHome = () => {
    navigate("/")
    setTimeout(scrollToTop, 100)
  }

  return (
    <div className="flex h-screen w-full select-none items-center justify-center bg-white">
      <div className="flex w-[700px] flex-col px-4 text-center font-medium">
        <h1 className="mb-2 text-9xl font-bold text-slate-200">{statusCode}</h1>
        <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
          {title}
        </p>
        <p className="mt-4 text-accent">{message}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button type="button" variant="ghost" onClick={goBack}>
            Go back to the previous page
          </Button>
          <Button type="button" variant="default" onClick={goToHome}>
            Home Page
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
