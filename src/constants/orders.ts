import { OrderType } from "@/schemas/orderSchema"

export const exampleOrdersData: OrderType[] = [
  {
    orderId: "OD001",
    fullName: "Phan Văn Khải",
    phoneNumber: "0987654321",
    email: "nguyenvana@example.com",
    address: "123 Đường ABC",
    commune: "Phường XYZ",
    district: "Quận 1",
    province: "Hồ Chí Minh",
    paymentMethod: "COD",
    orderSummary: [
      {
        productId: "P001",
        productName: "Táo hữu cơ (1kg)",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F23.1.jpg?alt=media&token=89866b0d-5eec-4f5a-8c9b-9eaa2459926b",
        quantity: 1,
        price: 59900
      },
      {
        productId: "P002",
        productName: "Cà rốt",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F5.1.jpg?alt=media&token=98b82bfa-dc94-4960-b091-fe1307b9ee56",
        quantity: 2,
        price: 34900
      },
      {
        productId: "P003",
        productName: "Bơ chín (3 quả)",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F16.1.jpeg?alt=media&token=240f0de8-7539-4c58-8009-275016b88a46",
        quantity: 3,
        price: 49900
      }
    ],
    totalAmount: 249500,
    orderStatus: "Pending",
    createdAt: "2024-10-30T00:00:00",
    updatedAt: "2024-10-30T00:00:00"
  },
  {
    orderId: "OD002",
    fullName: "Văn Hữu Toàn",
    phoneNumber: "0987654321",
    email: "nguyenvana@example.com",
    address: "123 Đường ABC",
    commune: "Phường XYZ",
    district: "Quận 1",
    province: "Hồ Chí Minh",
    paymentMethod: "VNPAY",
    orderSummary: [
      {
        productId: "P001",
        productName: "Táo hữu cơ (1kg)",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F23.1.jpg?alt=media&token=89866b0d-5eec-4f5a-8c9b-9eaa2459926b",
        quantity: 1,
        price: 59900
      },
      {
        productId: "P002",
        productName: "Cà rốt",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F5.1.jpg?alt=media&token=98b82bfa-dc94-4960-b091-fe1307b9ee56",
        quantity: 2,
        price: 34900
      },
      {
        productId: "P003",
        productName: "Bơ chín (3 quả)",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F16.1.jpeg?alt=media&token=240f0de8-7539-4c58-8009-275016b88a46",
        quantity: 3,
        price: 49900
      }
    ],
    totalAmount: 249500,
    orderStatus: "Processing",
    createdAt: "2024-10-30T00:00:00",
    updatedAt: "2024-10-30T00:00:00"
  },
  {
    orderId: "OD003",
    fullName: "Nguyễn Quốc Đại",
    phoneNumber: "0987654321",
    email: "nguyenvana@example.com",
    address: "123 Đường ABC",
    commune: "Phường XYZ",
    district: "Quận 1",
    province: "Hồ Chí Minh",
    paymentMethod: "VNPAY",
    orderSummary: [
      {
        productId: "P001",
        productName: "Táo hữu cơ (1kg)",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F23.1.jpg?alt=media&token=89866b0d-5eec-4f5a-8c9b-9eaa2459926b",
        quantity: 1,
        price: 59900
      },
      {
        productId: "P002",
        productName: "Cà rốt",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F5.1.jpg?alt=media&token=98b82bfa-dc94-4960-b091-fe1307b9ee56",
        quantity: 2,
        price: 34900
      },
      {
        productId: "P003",
        productName: "Bơ chín (3 quả)",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F16.1.jpeg?alt=media&token=240f0de8-7539-4c58-8009-275016b88a46",
        quantity: 3,
        price: 49900
      }
    ],
    totalAmount: 249500,
    orderStatus: "Completed",
    createdAt: "2024-10-30T00:00:00",
    updatedAt: "2024-10-30T00:00:00"
  },
  {
    orderId: "OD004",
    fullName: "Nguyễn Quốc Đại",
    phoneNumber: "0987654321",
    email: "nguyenvana@example.com",
    address: "123 Đường ABC",
    commune: "Phường XYZ",
    district: "Quận 1",
    province: "Hồ Chí Minh",
    paymentMethod: "VNPAY",
    orderSummary: [
      {
        productId: "P001",
        productName: "Táo hữu cơ (1kg)",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F23.1.jpg?alt=media&token=89866b0d-5eec-4f5a-8c9b-9eaa2459926b",
        quantity: 1,
        price: 59900
      },
      {
        productId: "P002",
        productName: "Cà rốt",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F5.1.jpg?alt=media&token=98b82bfa-dc94-4960-b091-fe1307b9ee56",
        quantity: 2,
        price: 34900
      },
      {
        productId: "P003",
        productName: "Bơ chín (3 quả)",
        productImage:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F16.1.jpeg?alt=media&token=240f0de8-7539-4c58-8009-275016b88a46",
        quantity: 3,
        price: 49900
      }
    ],
    totalAmount: 249500,
    orderStatus: "Cancelled",
    createdAt: "2024-10-30T00:00:00",
    updatedAt: "2024-10-30T00:00:00"
  }
]
