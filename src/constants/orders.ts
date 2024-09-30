export const exampleOrdersData = {
  customerInfo: {
    fullName: "Nguyễn Quốc Đại",
    phoneNumber: "0987654321",
    email: "nguyenvana@example.com"
  },
  shippingAddress: {
    address: "123 Đường ABC",
    commune: "Phường XYZ",
    district: "Quận 1",
    province: "Hồ Chí Minh"
  },
  paymentMethod: "VNPAY", // COD or VNPAY
  orderSummary: {
    items: [
      {
        productName: "Táo hữu cơ (1kg)",
        quantity: 1,
        price: 59900
      },
      {
        productName: "Cải bó xôi tươi (500g)",
        quantity: 2,
        price: 34900
      },
      {
        productName: "Bơ chín (3 quả)",
        quantity: 3,
        price: 49900
      }
    ],
    totalAmount: 249500
  }
}
