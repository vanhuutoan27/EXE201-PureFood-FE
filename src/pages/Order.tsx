import { useEffect, useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { useAuthContext } from "@/contexts/auth-context"

import {
  CreateOrderItemType,
  CreateOrderType,
  createOrderSchema
} from "@/schemas/orderSchema"
import { PromotionType } from "@/schemas/promotionSchema"

import { useCreateOrder } from "@/apis/orderApi"
import { useVNPay } from "@/apis/vnpayApi"

import Section from "@/components/global/organisms/section"
import OrderInformation from "@/components/local/default/order/order-information"
import OrderSummary from "@/components/local/default/order/order-summary"

function Order() {
  const { user } = useAuthContext()

  const location = useLocation()
  const navigate = useNavigate()

  const createOrder = useCreateOrder()
  const vnpayPayment = useVNPay()

  const [loading, setLoading] = useState(false)

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

  const [paymentMethod, setPaymentMethod] = useState<string>("COD")
  const [selectedPromotion, setSelectedPromotion] =
    useState<PromotionType | null>(null)

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<CreateOrderType>({
    resolver: zodResolver(createOrderSchema),
    defaultValues: {
      paymentMethod: "COD",
      totalAmount: total,
      orderSummary: productsData.map((product: CreateOrderItemType) => ({
        product: product.product,
        quantity: product.quantity
      }))
    }
  })

  const onSubmit = async (data: CreateOrderType) => {
    setLoading(true)

    const finalData = {
      user: user?.userId,
      ...data,
      paymentMethod,
      voucher: selectedPromotion?.discountCode
    }

    await createOrder.mutate(finalData, {
      onSuccess: async (orderId) => {
        setLoading(false)

        if (paymentMethod === "COD") {
          navigate(`/don-hang/${user?.userId}`)
        } else {
          const vnpayRequest = {
            amount: total,
            orderDescription: `Thanh toán đơn hàng ${orderId}`,
            orderType: "Thanh toán đơn hàng",
            name: user?.fullName
          }

          await vnpayPayment.mutate(vnpayRequest)
        }
      },
      onError: (error) => {
        setLoading(false)
        toast.error("Failed to create order!")
        console.error("Create order error:", error)
      }
    })
  }

  // console.log("🚀 ~ Order ~ errors:", errors)

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <Section
        title="Đặt hàng"
        description="Nhập thông tin giao hàng và chọn phương thức thanh toán"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full gap-8"
        // className="grid gap-8 md:grid-cols-2"
      >
        <OrderInformation
          register={register}
          errors={errors}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          setProvince={(value) => setValue("province", value)}
          setDistrict={(value) => setValue("district", value)}
          setCommune={(value) => setValue("commune", value)}
        />

        <OrderSummary
          loading={loading}
          handleSubmit={handleSubmit(onSubmit)}
          orderSummary={productsData}
          totalAmount={total}
          selectedPromotion={selectedPromotion}
          setSelectedPromotion={setSelectedPromotion}
        />
      </form>
    </div>
  )
}

export default Order
