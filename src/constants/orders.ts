import { OrderType } from "@/schemas/orderSchema"

export const exampleOrdersData: OrderType[] = [
  {
    orderId: "OD001",
    customerInfo: {
      fullName: "Phan Văn Khải",
      phoneNumber: "0987654321",
      email: "nguyenvana@example.com"
    },
    shippingAddress: {
      address: "123 Đường ABC",
      commune: "Phường XYZ",
      district: "Quận 1",
      province: "Hồ Chí Minh"
    },
    paymentMethod: "COD",
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
    },
    orderStatus: "Pending",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "Admin",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "Admin"
  },
  {
    orderId: "OD102",
    customerInfo: {
      fullName: "văn hữu toàn",
      phoneNumber: "0987654321",
      email: "nguyenvana@example.com"
    },
    shippingAddress: {
      address: "123 Đường ABC",
      commune: "Phường XYZ",
      district: "Quận 1",
      province: "Hồ Chí Minh"
    },
    paymentMethod: "VNPAY",
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
    },
    orderStatus: "Processing",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "Admin",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "Admin"
  },
  {
    orderId: "OD102",
    customerInfo: {
      fullName: "anh yeu em",
      phoneNumber: "0987654321",
      email: "nguyenvana@example.com"
    },
    shippingAddress: {
      address: "123 Đường ABC",
      commune: "Phường XYZ",
      district: "Quận 1",
      province: "Hồ Chí Minh"
    },
    paymentMethod: "VNPAY",
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
    },
    orderStatus: "Shipping",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "Admin",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "Admin"
  },
  {
    orderId: "OD102",
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
    paymentMethod: "VNPAY",
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
    },
    orderStatus: "Completed",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "Admin",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "Admin"
  },
  {
    orderId: "OD102",
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
    paymentMethod: "VNPAY",
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
    },
    orderStatus: "Cancel",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "Admin",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "Admin"
  }
]
