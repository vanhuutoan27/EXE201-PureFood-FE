import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useLocation } from "react-router-dom"

import { CreateOrderType, createOrderSchema } from "@/schemas/orderSchema"

import Section from "@/components/global/organisms/section"
import OrderInformation from "@/components/local/default/order/order-information"
import OrderSummary from "@/components/local/default/order/order-summary"

function Order() {
  const location = useLocation()
  const { productsData, total } = location.state

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<CreateOrderType>({
    resolver: zodResolver(createOrderSchema)
  })

  const [paymentMethod, setPaymentMethod] = useState("COD")

  const onSubmit = (data: any) => {
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
