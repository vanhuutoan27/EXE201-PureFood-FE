import { UserType } from "@/schemas/userSchema"

export const sampleUserData: UserType[] = [
  {
    userId: "u001",
    phoneNumber: "0963122758",
    fullName: "Nguyen Quoc Dai",
    email: "shadownguyen@gmail.com",
    password: "123As@",
    address: "Bamos Coffee",
    avatar:
      "https://images.unsplash.com/photo-1716013989492-fdf9ec971fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTIwY3V0ZXxlbnwwfHwwfHx8MA%3D%3D",
    role: "Admin",
    status: true,
    createdAt: "2024-09-12",
    updatedAt: "2024-09-12",
    createdBy: "asd",
    updatedBy: "asd"
  }
]
