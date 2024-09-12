import { exampleUsers } from "@/data/userExample"
import { useParams } from "react-router-dom"

import { UserType } from "@/schemas/userSchema"

import UserPassword from "@/components/local/details/user-password"

import ErrorPage from "./Error"

function Password() {
  const { userId } = useParams<{ userId: string }>()

  const user = exampleUsers.find((veg: UserType) => veg.userId === userId)
  if (!user) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      <UserPassword />
    </div>
  )
}

export default Password
