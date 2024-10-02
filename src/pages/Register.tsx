import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import Autoplay from "embla-carousel-autoplay"
import { Eye, EyeOff } from "lucide-react"
import { FormProvider, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "sonner"

import { UserRegisterType, userRegisterSchema } from "@/schemas/userSchema"

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

import { slides } from "./Login"

function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleToggleVisibility = (key: string) => {
    if (key === "password") {
      setIsPasswordVisible((prev) => !prev)
    } else if (key === "confirmPassword") {
      setIsConfirmPasswordVisible((prev) => !prev)
    }
  }

  const methods = useForm<UserRegisterType>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      fullName: "Van Huu Toan",
      phoneNumber: "0792766979",
      email: "vanhuutoan27@gmail.com",
      password: "123As@",
      confirmPassword: "123As@"
    }
  })

  const {
    handleSubmit,
    formState: { errors }
  } = methods

  const onSubmit = async (registerData: UserRegisterType) => {
    try {
      setIsLoading(true)
      const response = await pureAPI.post("/auth/register", {
        fullName: registerData.fullName,
        phoneNumber: registerData.phoneNumber,
        email: registerData.email,
        password: registerData.password
      })

      const { success, message } = response.data

      if (success) {
        toast.success(message)
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
      <div className="hidden w-1/3 p-10 lg:block">
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

      <div className="flex w-full items-center justify-center p-10 lg:w-2/3">
        <div className="flex w-3/4 flex-col space-y-10">
          <div className="select-none space-y-2">
            <h2 className="text-4xl font-bold tracking-wider">Đăng ký</h2>
            <p className="text-primary">
              Đăng ký tài khoản và bắt đầu trải nghiệm những tính năng tuyệt
              vời.
            </p>
          </div>

          {/* Use FormProvider to wrap the form */}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    name="fullName"
                    control={methods.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter your full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage>{errors.fullName?.message}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="phoneNumber"
                    control={methods.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage>{errors.phoneNumber?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  name="email"
                  control={methods.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>{errors.email?.message}</FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  control={methods.control}
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
                          onClick={() => handleToggleVisibility("password")}
                        />
                      ) : (
                        <EyeOff
                          size={18}
                          className="absolute right-3 top-3 select-none text-primary"
                          onClick={() => handleToggleVisibility("password")}
                        />
                      )}
                    </div>
                  )}
                />

                <FormField
                  name="confirmPassword"
                  control={methods.control}
                  render={({ field }) => (
                    <div className="relative">
                      <FormItem>
                        <FormControl>
                          <Input
                            type={
                              isConfirmPasswordVisible ? "text" : "password"
                            }
                            placeholder="Confirm your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage>
                          {errors.confirmPassword?.message}
                        </FormMessage>
                      </FormItem>

                      {isConfirmPasswordVisible ? (
                        <Eye
                          size={18}
                          className="absolute right-3 top-3 select-none text-primary"
                          onClick={() =>
                            handleToggleVisibility("confirmPassword")
                          }
                        />
                      ) : (
                        <EyeOff
                          size={18}
                          className="absolute right-3 top-3 select-none text-primary"
                          onClick={() =>
                            handleToggleVisibility("confirmPassword")
                          }
                        />
                      )}
                    </div>
                  )}
                />

                <div className="text-sm">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="cursor-pointer font-normal">
                    Tôi đồng ý với tất cả các{" "}
                    <Link to="/terms" className="font-medium text-primary">
                      Điều khoản
                    </Link>{" "}
                    và{" "}
                    <Link
                      to="/privacy-policy"
                      className="font-medium text-primary"
                    >
                      Chính sách bảo mật
                    </Link>
                  </Label>
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
                  {isLoading ? "Đang tải..." : "Đăng ký"}
                </Button>

                <p className="text-center text-sm">
                  Đã có tài khoản?{" "}
                  <Link to="/login" className="font-medium text-primary">
                    Đăng nhập
                  </Link>
                </p>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default Register
