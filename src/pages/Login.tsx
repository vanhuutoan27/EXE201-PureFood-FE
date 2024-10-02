import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import Autoplay from "embla-carousel-autoplay"
import { Eye, EyeOff } from "lucide-react"
import { FormProvider, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { useAuthContext } from "@/contexts/auth-context"

import { UserLoginType, userLoginSchema } from "@/schemas/userSchema"

import pureAPI from "@/lib/pureAPI"

import { Button } from "@/components/global/atoms/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/global/atoms/carousel"
import { Checkbox } from "@/components/global/atoms/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/global/atoms/form"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"
import LazyImage from "@/components/global/molecules/lazy-image"

export const slides = [
  "/images/login-image-1.jpg",
  "/images/login-image-2.jpg",
  "/images/login-image-3.jpg"
]

function Login() {
  const { login } = useAuthContext()

  const [isLoading, setIsLoading] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const navigate = useNavigate()

  const handleToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const formMethods = useForm<UserLoginType>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      identifier: "vanhuutoan27@gmail.com",
      password: "123As@"
    }
  })

  const {
    handleSubmit,
    formState: { errors },
    control
  } = formMethods

  const onSubmit = async (loginData: UserLoginType) => {
    try {
      setIsLoading(true)
      const response = await pureAPI.post("/auth/login", {
        email: loginData.identifier,
        password: loginData.password
      })

      const { success, message, data } = response.data

      if (success && data) {
        const { accessToken, refreshToken, expiredAt } = data
        login(accessToken, refreshToken, expiredAt)
        toast.success(message)
        navigate("/")
        // navigate("/redirect")
      } else {
        toast.error(message)
      }
    } catch (error: any) {
      toast.error(
        error.response.data.message ||
          "An error occurred. Please try again later."
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-center">
      <div className="flex w-full items-center justify-center p-10 lg:w-1/2">
        <div className="flex w-3/4 flex-col space-y-10">
          <div className="select-none space-y-2">
            <h2 className="text-4xl font-bold tracking-wider">Đăng nhập</h2>
            <p className="text-primary">
              Đăng nhập để truy cập tài khoản PureFood của bạn
            </p>
          </div>

          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="space-y-4">
                <FormField
                  name="identifier"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>{errors.identifier?.message}</FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <FormItem>
                        <FormControl>
                          <Input
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage>{errors.password?.message}</FormMessage>
                      </FormItem>

                      {isPasswordVisible ? (
                        <Eye
                          size={18}
                          className="absolute right-3 top-3 select-none text-primary"
                          onClick={handleToggleVisibility}
                        />
                      ) : (
                        <EyeOff
                          size={18}
                          className="absolute right-3 top-3 select-none text-primary"
                          onClick={handleToggleVisibility}
                        />
                      )}
                    </div>
                  )}
                />

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label
                      htmlFor="remember"
                      className="cursor-pointer font-normal"
                    >
                      Ghi nhớ tôi
                    </Label>
                  </div>

                  <Link
                    to="/forgot-password"
                    className="font-medium text-primary"
                  >
                    Quên mật khẩu
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  disabled={isLoading}
                  type="submit"
                  variant="default"
                  size="lg"
                  className="h-11 w-full"
                >
                  {isLoading ? "Đang tải..." : "Đăng nhập"}
                </Button>

                <p className="text-center text-sm">
                  Bạn chưa có tài khoản?{" "}
                  <Link to="/register" className="font-medium text-primary">
                    Đăng ký
                  </Link>
                </p>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>

      <div className="hidden w-1/2 p-10 lg:block">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          plugins={[
            Autoplay({
              delay: 3000
            })
          ]}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <LazyImage
                  className="h-[88vh] w-full rounded-3xl object-cover shadow-xl"
                  src={slide}
                  alt={`Login slide ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default Login
