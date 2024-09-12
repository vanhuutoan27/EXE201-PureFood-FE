import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { UpdateUserPasswordType, passwordSchema } from "@/schemas/userSchema"

import { Button } from "@/components/global/atoms/button"
import { Card } from "@/components/global/atoms/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/global/atoms/form"
import { Input } from "@/components/global/atoms/input"

function UserPassword() {
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState(false)
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleToggleVisibility = (field: string) => {
    switch (field) {
      case "currentPassword":
        setIsCurrentPasswordVisible(!isCurrentPasswordVisible)
        break
      case "newPassword":
        setIsNewPasswordVisible(!isNewPasswordVisible)
        break
      case "confirmPassword":
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
        break
      default:
        break
    }
  }

  const changePasswordForm = useForm<UpdateUserPasswordType>({
    resolver: zodResolver(passwordSchema)
  })

  const onSubmit = async (data: UpdateUserPasswordType) => {
    setIsLoading(true)

    try {
      console.log(data)
      // Redirect to login page after successful password change
      navigate("/login")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    changePasswordForm.reset()
  }

  return (
    <>
      <h1 className="min-h-14 text-2xl font-semibold text-primary">Mật khẩu</h1>

      <Card className="space-y-4">
        <Form {...changePasswordForm}>
          <form onSubmit={changePasswordForm.handleSubmit(onSubmit)}>
            <div className="border-b-[2px] border-gray-100 pb-4">
              <div className="w-1/3 space-y-2">
                <p className="font-semibold text-primary">Mật khẩu cũ</p>
                <FormField
                  name="currentPassword"
                  control={changePasswordForm.control}
                  render={({ field }) => (
                    <div className="relative">
                      <FormItem>
                        <FormControl>
                          <Input
                            type={
                              isCurrentPasswordVisible ? "text" : "password"
                            }
                            placeholder="Nhập mật khẩu cũ"
                            className="font-semibold text-muted-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      {isCurrentPasswordVisible ? (
                        <Eye
                          size={18}
                          className="absolute right-3 top-3 cursor-pointer select-none text-primary"
                          onClick={() =>
                            handleToggleVisibility("currentPassword")
                          }
                        />
                      ) : (
                        <EyeOff
                          size={18}
                          className="absolute right-3 top-3 cursor-pointer select-none text-primary"
                          onClick={() =>
                            handleToggleVisibility("currentPassword")
                          }
                        />
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className="border-b-[2px] border-gray-100 pb-4 pt-4">
              <div className="w-1/3 space-y-2">
                <p className="font-semibold text-primary">Mật khẩu mới</p>
                <FormField
                  name="newPassword"
                  control={changePasswordForm.control}
                  render={({ field }) => (
                    <div className="relative">
                      <FormItem>
                        <FormControl>
                          <Input
                            type={isNewPasswordVisible ? "text" : "password"}
                            placeholder="Nhập mật khẩu mới"
                            className="font-semibold text-muted-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      {isNewPasswordVisible ? (
                        <Eye
                          size={18}
                          className="absolute right-3 top-3 cursor-pointer select-none text-primary"
                          onClick={() => handleToggleVisibility("newPassword")}
                        />
                      ) : (
                        <EyeOff
                          size={18}
                          className="absolute right-3 top-3 cursor-pointer select-none text-primary"
                          onClick={() => handleToggleVisibility("newPassword")}
                        />
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className="mt-4 w-1/3 space-y-2">
              <p className="font-semibold text-primary">Xác thực mật khẩu</p>
              <FormField
                name="confirmPassword"
                control={changePasswordForm.control}
                render={({ field }) => (
                  <div className="relative">
                    <FormItem>
                      <FormControl>
                        <Input
                          type={isConfirmPasswordVisible ? "text" : "password"}
                          placeholder="Nhập lại mật khẩu mới"
                          className="font-semibold text-muted-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                    {isConfirmPasswordVisible ? (
                      <Eye
                        size={18}
                        className="absolute right-3 top-3 cursor-pointer select-none text-primary"
                        onClick={() =>
                          handleToggleVisibility("confirmPassword")
                        }
                      />
                    ) : (
                      <EyeOff
                        size={18}
                        className="absolute right-3 top-3 cursor-pointer select-none text-primary"
                        onClick={() =>
                          handleToggleVisibility("confirmPassword")
                        }
                      />
                    )}
                  </div>
                )}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                disabled={isLoading}
                type="reset"
                variant="outline"
                size="lg"
                onClick={handleReset}
              >
                {isLoading ? "Đang tải..." : "Hủy"}
              </Button>
              <Button
                disabled={isLoading}
                type="submit"
                variant="default"
                size="lg"
              >
                {isLoading ? "Đang tải..." : "Lưu"}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  )
}

export default UserPassword
