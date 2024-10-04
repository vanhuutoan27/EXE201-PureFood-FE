import { useEffect, useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"

import { useAuthContext } from "@/contexts/auth-context"

import { CreateOrderType, createOrderSchema } from "@/schemas/orderSchema"

import Section from "@/components/global/organisms/section"
import OrderInformation from "@/components/local/default/order/order-information"
import OrderSummary from "@/components/local/default/order/order-summary"

function Order() {
  const { user } = useAuthContext()

  const location = useLocation()
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<CreateOrderType>({
    resolver: zodResolver(createOrderSchema)
  })

  const [paymentMethod, setPaymentMethod] = useState("COD")

  useEffect(() => {
    if (
      !location.state ||
      !location.state.productsData ||
      !location.state.total
    ) {
      navigate(`/gio-hang/${user?.userId}`, { replace: true })
    }
  }, [location.state, navigate])

  if (
    !location.state ||
    !location.state.productsData ||
    !location.state.total
  ) {
    return null
  }

  const { productsData, total } = location.state

  const onSubmit = (data: CreateOrderType) => {
    console.log("Đơn hàng đã được đặt!", JSON.stringify(data, null, 2))
  }

  console.log("🚀 ~ Order ~ errors:", errors)

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <Section
        title="Đặt hàng"
        description="Nhập thông tin giao hàng và chọn phương thức thanh toán"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-8 md:grid-cols-2"
      >
        <OrderInformation register={register} errors={errors} />

        <OrderSummary
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          orderSummary={productsData}
          totalAmount={total}
        />
      </form>
    </div>
  )
}

export default Order
