import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"

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
    console.log(data)
  }

  const handleReset = () => {
    changePasswordForm.reset()
  }

  return (
    <>
      <div className="mb-4 min-h-14">
        <h3 className="text-2xl font-bold text-primary">Mật khẩu</h3>
      </div>

      <Card className="space-y-4 px-12">
        <Form {...changePasswordForm}>
          <form
            onSubmit={changePasswordForm.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="w-1/3 space-y-2">
              <h3 className="ml-1 font-semibold text-primary">Mật khẩu cũ</h3>

              <FormField
                name="currentPassword"
                control={changePasswordForm.control}
                render={({ field }) => (
                  <div className="relative">
                    <FormItem>
                      <FormControl>
                        <Input
                          type={isCurrentPasswordVisible ? "text" : "password"}
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

            <div className="w-1/3 space-y-2">
              <h3 className="ml-1 font-semibold text-primary">Mật khẩu mới</h3>

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

            <div className="w-1/3 space-y-2">
              <h3 className="ml-1 font-semibold text-primary">
                Xác thực mật khẩu
              </h3>

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
              <Button type="reset" variant="ghost" onClick={handleReset}>
                Hủy
              </Button>
              <Button type="submit" variant="default">
                Lưu
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  )
}

export default UserPassword
