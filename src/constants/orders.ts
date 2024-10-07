import { OrderType } from "@/schemas/orderSchema"

export const sampleOrderData: OrderType[] = [
  {
    orderId: "o001",
    user: "DB620724-B051-4B8E-9FFD-08DCE2FA2BF4",
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
        product: "p001",
        productName: "Táo hữu cơ (1kg)",
        image:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F23.1.jpg?alt=media&token=89866b0d-5eec-4f5a-8c9b-9eaa2459926b",
        quantity: 1,
        price: 59900
      },
      {
        product: "p002",
        productName: "Cà rốt",
        image:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F5.1.jpg?alt=media&token=98b82bfa-dc94-4960-b091-fe1307b9ee56",
        quantity: 2,
        price: 34900
      },
      {
        product: "p003",
        productName: "Bơ chín (3 quả)",
        image:
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
    orderId: "o002",
    user: "DB620724-B051-4B8E-9FFD-08DCE2FA2BF4",
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
        product: "p001",
        productName: "Táo hữu cơ (1kg)",
        image:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F23.1.jpg?alt=media&token=89866b0d-5eec-4f5a-8c9b-9eaa2459926b",
        quantity: 1,
        price: 59900
      },
      {
        product: "p002",
        productName: "Cà rốt",
        image:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F5.1.jpg?alt=media&token=98b82bfa-dc94-4960-b091-fe1307b9ee56",
        quantity: 2,
        price: 34900
      },
      {
        product: "p003",
        productName: "Bơ chín (3 quả)",
        image:
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
    orderId: "o003",
    user: "DB620724-B051-4B8E-9FFD-08DCE2FA2BF4",
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
        product: "p001",
        productName: "Táo hữu cơ (1kg)",
        image:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F23.1.jpg?alt=media&token=89866b0d-5eec-4f5a-8c9b-9eaa2459926b",
        quantity: 1,
        price: 59900
      },
      {
        product: "p002",
        productName: "Cà rốt",
        image:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F5.1.jpg?alt=media&token=98b82bfa-dc94-4960-b091-fe1307b9ee56",
        quantity: 2,
        price: 34900
      },
      {
        product: "p003",
        productName: "Bơ chín (3 quả)",
        image:
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
    orderId: "o004",
    user: "DB620724-B051-4B8E-9FFD-08DCE2FA2BF4",
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
        product: "p001",
        productName: "Táo hữu cơ (1kg)",
        image:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F23.1.jpg?alt=media&token=89866b0d-5eec-4f5a-8c9b-9eaa2459926b",
        quantity: 1,
        price: 59900
      },
      {
        product: "p002",
        productName: "Cà rốt",
        image:
          "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F5.1.jpg?alt=media&token=98b82bfa-dc94-4960-b091-fe1307b9ee56",
        quantity: 2,
        price: 34900
      },
      {
        product: "p003",
        productName: "Bơ chín (3 quả)",
        image:
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
