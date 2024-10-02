import { useEffect } from "react"

import { defaultAvatar } from "@/configs/config"
import ErrorPage from "@/pages/Error"
import Loading from "@/pages/Loading"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

import { useAuthContext } from "@/contexts/auth-context"

import { useGetUserById } from "@/apis/userApi"

import { scrollToTop } from "@/lib/utils"

import { Avatar, AvatarImage } from "@/components/global/atoms/avatar"
import LazyImage from "@/components/global/molecules/lazy-image"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/local/user/profile/profile-tabs"

function UserLayout() {
  const location = useLocation()

  const { userId } = useParams<{ userId: string }>()
  const { user } = useAuthContext()

  const { data: userData, isLoading } = useGetUserById(userId)

  const activeTab = location.pathname.includes("thong-tin-ca-nhan")
    ? "account"
    : location.pathname.includes("mat-khau")
      ? "password"
      : "order"

  useEffect(() => {
    scrollToTop()
  }, [location])

  if (user?.userId !== userId) return <ErrorPage statusCode={404} />
  if (!userData || isLoading) return <Loading />

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <LazyImage
          src="/images/user-cover-image.png"
          alt="User cover image"
          className="select-none rounded-xl shadow-md"
        />

        <Avatar className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 cursor-pointer select-none border-4 border-primary">
          <AvatarImage
            src={user?.avatar || defaultAvatar}
            alt="avatar"
            className="object-cover"
          />
        </Avatar>
      </div>

      <div className="mt-20 space-y-2 text-center">
        <h3 className="cursor-pointer text-xl font-semibold tracking-wider text-secondary">
          {user?.fullName}
        </h3>
        <p className="text-muted-foreground">{user?.email}</p>
      </div>

      <Tabs value={activeTab}>
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="account" asChild>
            <Link to={`/thong-tin-ca-nhan/${userId}`} className="w-full">
              Thông tin cá nhân
            </Link>
          </TabsTrigger>

          <TabsTrigger value="password" asChild>
            <Link to={`/mat-khau/${userId}`} className="w-full">
              Mật khẩu
            </Link>
          </TabsTrigger>

          <TabsTrigger value="order" asChild>
            <Link to={`/don-hang/${userId}`} className="w-full">
              Đơn hàng
            </Link>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Outlet context={{ userData }} />
        </TabsContent>

        <TabsContent value="password">
          <Outlet context={{ userId }} />
        </TabsContent>

        <TabsContent value="order">
          <Outlet context={{ userId }} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default UserLayout
