import { useLocation, useNavigate } from "react-router-dom"

import { useAuthContext } from "@/contexts/auth-context"

import { useCreatePayment } from "@/apis/paymentApi"

import { Button } from "@/components/global/atoms/button"

function extractOrderAndAmount(orderInfo: string) {
  const parts = orderInfo.split(" ")

  const order = parts.find((part) => part.length === 36 && part.includes("-"))

  const amount = parts[parts.length - 1]

  return { order, amount }
}

function PaymentPage() {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const responseCode = queryParams.get("vnp_ResponseCode")
  const orderInfo = queryParams.get("vnp_OrderInfo")
  const amountFromQuery = queryParams.get("vnp_Amount")

  const { order, amount } = orderInfo
    ? extractOrderAndAmount(orderInfo)
    : { order: null, amount: null }

  const finalAmount = amountFromQuery || amount

  const createPayment = useCreatePayment()

  const handleFinishPayment = () => {
    const paymentData = {
      order,
      amount: Number(finalAmount)
    }

    console.log(paymentData)

    // if (order && finalAmount) {
    //   createPayment.mutate(
    //     { ...paymentData, order: order as string },
    //     {
    //       onSuccess: () => {
    //         navigate(`/don-hang/${user?.userId}`)
    //       }
    //     }
    //   )
    // }
  }

  const { statusCode, title, message } =
    responseCode === "00"
      ? {
          statusCode: 200,
          title: "Payment Successfully",
          message: "Your payment has been successfully processed."
        }
      : {
          statusCode: 500,
          title: "Payment Failed",
          message: "Your payment has failed. Please try again later."
        }

  return (
    <div className="flex h-screen w-full select-none items-center justify-center bg-white">
      <div className="flex w-[700px] flex-col px-4 text-center font-medium">
        <h2 className="mb-2 text-9xl font-bold text-slate-200">{statusCode}</h2>
        <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
          {title}
        </p>
        <p className="mt-4 text-accent">{message}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          {responseCode === "00" && order && finalAmount ? (
            <Button
              type="button"
              variant="default"
              onClick={handleFinishPayment}
            >
              Finish Payment
            </Button>
          ) : (
            <Button
              type="button"
              variant="default"
              onClick={() => (window.location.href = "/")}
            >
              Home Page
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
