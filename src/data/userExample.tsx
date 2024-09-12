import { UserType } from "@/schemas/userSchema"

export const exampleUsers: UserType[] = [
  {
    userId: "user-001",
    phoneNumber: "0963122758",
    fullName: "Nguyen Quoc Dai",
    email: "DaiNguyen@gmail.com",
    password: "Passw0rd!",
    address: "182, Lã Xuân Oai, Quận 9, Thành Phố Hồ Chí Minh",
    avatar:
      "https://images.unsplash.com/photo-1716013989492-fdf9ec971fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTIwY3V0ZXxlbnwwfHwwfHx8MA%3D%3D",
    role: "admin",
    status: true,
    createdAt: "2024-09-12T08:00:00Z",
    updatedAt: "2024-09-12T08:00:00Z",
    createdBy: "Admin",
    updatedBy: "Admin"
  }
]
