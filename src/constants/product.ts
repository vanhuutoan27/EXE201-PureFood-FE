import { ProductType } from "@/schemas/productSchema"

export const exampleProductsData: ProductType[] = [
  {
    productId: "p001",
    category: "rau-cu",
    supplier: "Công ty Nông sản Xanh",
    productName: "Cải Bó Xôi",
    foodName: "Spinach",
    slug: "cai-bo-xoi-yk8pgx",
    description: `
    <p>Cải bó xôi sạch, không sử dụng hóa chất, tốt cho sức khỏe, có nhiều lợi ích dinh dưỡng.</p>
    <ul>
      <li>Sản phẩm hữu cơ, không chứa thuốc bảo vệ thực vật</li>
      <li>Giàu vitamin A, C và các khoáng chất</li>
      <li>Tốt cho hệ tiêu hóa và sức khỏe tim mạch</li>
      <li>Thích hợp chế biến nhiều món ăn khác nhau</li>
      <li>Được trồng và chăm sóc tại các trang trại uy tín</li>
    </ul>
  `,
    price: 25000,
    stock: 150,
    weight: 0.5,
    unit: "kg",
    origin: "Đà Lạt",
    organic: true,
    images: [
      "https://placehold.jp/600x400.png",
      "https://placehold.jp/500x400.png",
      "https://placehold.jp/400x400.png",
      "https://placehold.jp/300x400.png"
    ],
    status: true,
    entryDate: "2024-09-25",
    expiryDate: "2024-10-10",
    createdAt: "2024-09-25",
    createdBy: "asd",
    updatedAt: "2024-09-25",
    updatedBy: "asd"
  },
  {
    productId: "p002",
    category: "rau-cu",
    supplier: "Trang Trại Việt Hưng",
    productName: "Rau Muống",
    foodName: "Spinach",
    slug: "rau-muong-z3ko4p",
    description: `
    <p>Rau muống tươi ngon, giàu chất xơ, sản phẩm sạch từ nông trại, có nhiều giá trị dinh dưỡng.</p>
    <ul>
      <li>Giàu chất xơ, tốt cho hệ tiêu hóa</li>
      <li>Giàu vitamin A và C</li>
      <li>Không thuốc bảo vệ thực vật</li>
      <li>Thích hợp chế biến các món xào, nấu canh</li>
      <li>Được trồng tại các nông trại xanh</li>
    </ul>
  `,
    price: 18000,
    stock: 100,
    weight: 0.5,
    unit: "kg",
    origin: "Hà Nam",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-20",
    expiryDate: "2024-09-28",
    createdAt: "2024-09-20",
    createdBy: "asd",
    updatedAt: "2024-09-20",
    updatedBy: "asd"
  },
  {
    productId: "p003",
    category: "rau-cu",
    supplier: "Nông Trại Xanh",
    productName: "Khoai Tây",
    foodName: "Potato",
    slug: "khoai-tay-okce88",
    description: `
    <p>Khoai tây sạch, tự nhiên, mang lại nhiều giá trị dinh dưỡng cho sức khỏe.</p>
    <ul>
      <li>Giàu carbohydrate cung cấp năng lượng</li>
      <li>Tốt cho sức khỏe tim mạch</li>
      <li>Thích hợp cho các món chiên, nướng</li>
      <li>Không thuốc bảo vệ thực vật</li>
      <li>Được trồng tại các nông trại hữu cơ</li>
    </ul>
    `,
    price: 30000,
    stock: 200,
    weight: 1,
    unit: "kg",
    origin: "Sơn La",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-24",
    expiryDate: "2024-10-10",
    createdAt: "2024-09-24",
    createdBy: "asd",
    updatedAt: "2024-09-24",
    updatedBy: "asd"
  },
  {
    productId: "p004",
    category: "trai-cay",
    supplier: "Hợp tác xã Nông sản Việt",
    productName: "Táo Mèo",
    foodName: "Potato",
    slug: "tao-meo-zd26k5",
    description: `
    <p>Táo mèo tươi ngon, giàu chất dinh dưỡng, thích hợp cho sức khỏe.</p>
    <ul>
      <li>Tốt cho hệ tiêu hóa</li>
      <li>Giàu vitamin C và chất chống oxy hóa</li>
      <li>Không thuốc trừ sâu, an toàn cho sức khỏe</li>
      <li>Thích hợp cho món tráng miệng, làm nước ép</li>
      <li>Được trồng tự nhiên tại vùng cao Tây Bắc</li>
    </ul>
  `,
    price: 50000,
    stock: 50,
    weight: 1,
    unit: "kg",
    origin: "Tây Bắc",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-23",
    expiryDate: "2024-10-05",
    createdAt: "2024-09-23",
    createdBy: "asd",
    updatedAt: "2024-09-23",
    updatedBy: "asd"
  },
  {
    productId: "p005",
    category: "rau-cu",
    supplier: "Công Ty Rau Sạch Việt",
    productName: "Red Amaranth",
    foodName: "Potato",
    slug: "rau-den-do-7ujuqv",
    description: `
    <p>Rau dền đỏ giàu vitamin và khoáng chất, tốt cho sức khỏe tổng thể.</p>
    <ul>
      <li>Giàu vitamin A và C</li>
      <li>Không sử dụng hóa chất</li>
      <li>Tốt cho sức khỏe mắt và da</li>
      <li>Thích hợp cho món xào, luộc, nấu canh</li>
      <li>Được trồng tại các trang trại hữu cơ uy tín</li>
    </ul>
  `,
    price: 22000,
    stock: 120,
    weight: 0.5,
    unit: "kg",
    origin: "Đà Lạt",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-22",
    expiryDate: "2024-10-05",
    createdAt: "2024-09-22",
    createdBy: "asd",
    updatedAt: "2024-09-22",
    updatedBy: "asd"
  },
  {
    productId: "p006",
    category: "rau-cu",
    supplier: "Trang Trại Đồng Quê",
    productName: "Cà Rốt",
    foodName: "Carrot",
    slug: "ca-rot-dexyv7",
    description: `
    <p>Cà rốt hữu cơ, giàu beta-carotene, tốt cho sức khỏe mắt và hệ miễn dịch.</p>
    <ul>
      <li>Giàu beta-carotene, chuyển hóa thành vitamin A</li>
      <li>Giúp tăng cường thị lực</li>
      <li>Không chứa hóa chất và thuốc trừ sâu</li>
      <li>Thích hợp cho các món salad, nấu canh, hầm</li>
      <li>Được trồng tại các nông trại uy tín</li>
    </ul>
  `,
    price: 28000,
    stock: 180,
    weight: 1,
    unit: "kg",
    origin: "Ninh Thuận",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-21",
    expiryDate: "2024-10-05",
    createdAt: "2024-09-21",
    createdBy: "asd",
    updatedAt: "2024-09-21",
    updatedBy: "asd"
  },
  {
    productId: "p007",
    category: "trai-cay",
    supplier: "Trang Trại trai-cay Sạch",
    productName: "Xoài Cát",
    foodName: "Mango Cat",
    slug: "xoai-cat-uju54f",
    description: `
    <p>Xoài cát ngọt, giàu vitamin, thích hợp cho mọi bữa ăn tráng miệng.</p>
    <ul>
      <li>Giàu vitamin C, tốt cho hệ miễn dịch</li>
      <li>Không thuốc trừ sâu</li>
      <li>Thích hợp làm nước ép, sinh tố hoặc ăn trực tiếp</li>
      <li>Được trồng tại trang trại trai-cay sạch</li>
    </ul>
    `,
    price: 45000,
    stock: 80,
    weight: 1,
    unit: "kg",
    origin: "Tiền Giang",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-26",
    expiryDate: "2024-10-10",
    createdAt: "2024-09-26",
    createdBy: "asd",
    updatedAt: "2024-09-26",
    updatedBy: "asd"
  },
  {
    productId: "p008",
    category: "rau-cu",
    supplier: "Nông trại Hữu Cơ Việt",
    productName: "Cà Chua",
    foodName: "Mango Tomato",
    slug: "ca-chua-v6jvre",
    description: `
    <p>Cà chua đỏ tươi, giàu vitamin C, là thành phần không thể thiếu trong các món ăn.</p>
    <ul>
      <li>Giàu vitamin C và chất chống oxy hóa</li>
      <li>Giúp tăng cường hệ miễn dịch</li>
      <li>Không chứa hóa chất bảo quản</li>
      <li>Thích hợp cho món salad, sốt cà, nấu canh</li>
      <li>Được trồng tự nhiên tại các nông trại hữu cơ</li>
    </ul>
  `,
    price: 35000,
    stock: 60,
    weight: 1,
    unit: "kg",
    origin: "Lâm Đồng",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-27",
    expiryDate: "2024-10-08",
    createdAt: "2024-09-27",
    createdBy: "asd",
    updatedAt: "2024-09-27",
    updatedBy: "asd"
  },
  {
    productId: "p009",
    category: "rau-cu",
    supplier: "Hợp tác xã Hữu Cơ",
    productName: "Củ Dền",
    foodName: "Beetroot",
    slug: "cu-den-36mylu",
    description: `
    <p>Củ dền tươi ngon, giàu dinh dưỡng, rất tốt cho sức khỏe.</p>
    <ul>
      <li>Giàu chất sắt và vitamin C</li>
      <li>Giúp tăng cường sức khỏe máu và hệ miễn dịch</li>
      <li>Không chứa thuốc bảo vệ thực vật</li>
      <li>Thích hợp cho các món nước ép, hầm</li>
      <li>Được trồng tại các nông trại xanh</li>
    </ul>
    `,
    price: 27000,
    stock: 70,
    weight: 1,
    unit: "kg",
    origin: "Ninh Bình",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-26",
    expiryDate: "2024-10-10",
    createdAt: "2024-09-26",
    createdBy: "asd",
    updatedAt: "2024-09-26",
    updatedBy: "asd"
  },
  {
    productId: "p010",
    category: "trai-cay",
    supplier: "Công ty Xuất khẩu Nông sản",
    productName: "Bưởi Da Xanh",
    foodName: "Green Skin Grapefruit",
    slug: "buoi-da-xanh-vy0xdz",
    description: `
    <p>Bưởi da xanh ngọt, thanh mát, giàu vitamin C, thích hợp cho món tráng miệng.</p>
    <ul>
      <li>Giàu vitamin C, tốt cho sức khỏe tổng thể</li>
      <li>Không chứa hóa chất</li>
      <li>Thích hợp làm nước ép, ăn trực tiếp</li>
      <li>Được trồng tự nhiên tại vùng đất Bến Tre</li>
    </ul>
  `,
    price: 60000,
    stock: 40,
    weight: 1,
    unit: "kg",
    origin: "Bến Tre",
    organic: true,
    images: ["https://placehold.jp/250x192.png"],
    status: true,
    entryDate: "2024-09-25",
    expiryDate: "2024-10-10",
    createdAt: "2024-09-25",
    createdBy: "asd",
    updatedAt: "2024-09-25",
    updatedBy: "asd"
  }
]
