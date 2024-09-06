import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import Autoplay from "embla-carousel-autoplay"
import { Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { UserLoginType, userLoginSchema } from "@/schemas/userSchema"

import { Button } from "@/components/global/atoms/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/global/atoms/carousel"
import { Checkbox } from "@/components/global/atoms/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/global/atoms/form"
import { Input } from "@/components/global/atoms/input"
import { Label } from "@/components/global/atoms/label"

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const slides = [
    "/images/login-image-1.jpg",
    "/images/login-image-2.jpg",
    "/images/login-image-3.jpg"
  ]

  const handleToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const loginForm = useForm<UserLoginType>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "dainguquen@gmail.com",
      password: "123As@"
    }
  })

  const onSubmit = async (data: UserLoginType) => {
    setIsLoading(true)

    try {
      console.log(data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <div className="flex h-full w-full items-center justify-center p-10 lg:w-1/2">
        <div className="flex w-3/4 flex-col space-y-10">
          <div className="select-none space-y-2">
            <h2 className="text-4xl font-semibold tracking-wider">Đăng nhập</h2>
            <p className="text-primary">
              Đăng nhập để truy cập tài khoản PureFood của bạn
            </p>
          </div>

          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(onSubmit)}
              className="space-y-10"
            >
              <div className="space-y-4">
                <FormField
                  name="email"
                  control={loginForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  control={loginForm.control}
                  render={({ field }) => (
                    <div className="relative">
                      <FormItem className="">
                        <FormControl>
                          <Input
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
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
                  className="w-full"
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
          </Form>
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
              delay: 2000
            })
          ]}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <img
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
