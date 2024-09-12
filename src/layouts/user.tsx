import { defaultAvatar } from "@/configs/config"
import { exampleUsers } from "@/data/userExample"
import ErrorPage from "@/pages/Error"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

import { UserType } from "@/schemas/userSchema"

import { Avatar, AvatarImage } from "@/components/global/atoms/avatar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/local/profile/profile-tabs"

function UserLayout() {
  const location = useLocation()

  const { userId } = useParams<{ userId: string }>()

  const user = exampleUsers.find((veg: UserType) => veg.userId === userId)

  if (!user) {
    return <ErrorPage statusCode={404} />
  }

  const activeTab = location.pathname.includes("thong-tin-ca-nhan")
    ? "account"
    : location.pathname.includes("mat-khau")
      ? "password"
      : "history"

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <img
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

      <div className="mt-20 text-center">
        <h3 className="cursor-pointer text-xl font-semibold tracking-wider text-secondary">
          {user?.username}
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

          <TabsTrigger value="history" asChild>
            <Link to={`/lich-su/${userId}`} className="w-full">
              Lịch sử
            </Link>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Outlet />
        </TabsContent>

        <TabsContent value="password">
          <Outlet />
        </TabsContent>

        <TabsContent value="history">
          <Outlet />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default UserLayout
