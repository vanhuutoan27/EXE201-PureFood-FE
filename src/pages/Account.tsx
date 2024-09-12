import { exampleUsers } from "@/data/userExample"
import { useParams } from "react-router-dom"

import { UserType } from "@/schemas/userSchema"

import UserDetail from "@/components/local/details/user-detail"

import ErrorPage from "./Error"

function Account() {
  const { userId } = useParams<{ userId: string }>()

  const user = exampleUsers.find((veg: UserType) => veg.userId === userId)

  if (!user) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      <UserDetail user={user} />
    </div>
  )
}

export default Account
