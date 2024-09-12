import { exampleUsers } from "@/data/userExample"

import UserDetails from "@/components/local/profile/user-detail"

function Account() {
  const user = exampleUsers[0]

  return (
    <div>
      <UserDetails user={user} />
    </div>
  )
}

export default Account
