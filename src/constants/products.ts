import { ProductType } from "@/schemas/productSchema"

export const exampleProductsData: ProductType[] = [
  {
    productId: "p001",
    category: "rau-cu",
    supplier: "PureFood",
    productName: "Rau muống",
    foodName: "Water spinach",
    slug: "rau-muong-400-gr-zk7dwx",
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
    price: 8000,
    stock: 100,
    weight: 400,
    unit: "Gr",
    origin: "Long An",
    organic: true,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F1.1.jpg?alt=media&token=8aa2db36-a902-45d3-bd89-577a7e1051b9",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F1.2.jpg?alt=media&token=5ed9e2ad-a0ab-4144-bb83-b7a0bc943f79",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F1.3.jpg?alt=media&token=85f219cc-ca82-4f76-8813-4b2d01396a54",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F1.4.jpg?alt=media&token=7cdbdbd1-c9d2-44ea-9472-24a8ad85fc18"
    ],
    status: true,
    entryDate: "2024-10-30T00:00:00",
    expiryDate: "2024-10-30T00:00:00",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "asd",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "asd"
  },
  {
    productId: "p002",
    category: "rau-cu",
    supplier: "PureFood",
    productName: "Bắp cải",
    foodName: "Cabbage",
    slug: "bap-cai-500-gr-rkwi1a",
    description: `
    <p>Bắp cải tươi ngon, giòn ngọt, sản phẩm hữu cơ giàu vitamin và chất xơ.</p>
    <ul>
      <li>Giàu vitamin K và C, tốt cho sức khỏe xương và hệ miễn dịch</li>
      <li>Hàm lượng chất chống oxy hóa cao</li>
      <li>Không sử dụng thuốc trừ sâu</li>
      <li>Thích hợp chế biến món luộc, xào và salad</li>
      <li>Trồng tại các nông trại hữu cơ</li>
    </ul>
  `,
    price: 12500,
    stock: 100,
    weight: 500,
    unit: "Gr",
    origin: "Lâm Đồng",
    organic: true,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F2.1.jpg?alt=media&token=9ebd04cb-02b4-4662-8618-53791f069691",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F2.2.jpg?alt=media&token=75e12cd9-1e2f-4b83-be28-629f06529e91",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F2.3.jpg?alt=media&token=ffc5cba6-f45f-43d4-a2ae-d181efc60d32",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F2.4.jpg?alt=media&token=b0fa6d72-c3f6-4eb1-a260-00a9e002b6a5"
    ],
    status: true,
    entryDate: "2024-10-30T00:00:00",
    expiryDate: "2024-10-30T00:00:00",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "asd",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "asd"
  },
  {
    productId: "p003",
    category: "rau-cu",
    supplier: "PureFood",
    productName: "Giá sống",
    foodName: "Bean sprouts",
    slug: "gia-song-200-gr-fb1ihn",
    description: `
    <p>Giá sống tươi mát, giàu dinh dưỡng, sản phẩm sạch từ nông trại.</p>
    <ul>
      <li>Giàu chất xơ và vitamin E</li>
      <li>Tốt cho hệ tiêu hóa và làn da</li>
      <li>Không thuốc bảo vệ thực vật</li>
      <li>Dùng trong các món gỏi, xào, và phở</li>
      <li>Được trồng tại các nông trại xanh</li>
    </ul>
    `,
    price: 6800,
    stock: 100,
    weight: 200,
    unit: "Gr",
    origin: "Tiền Giang",
    organic: true,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F3.1.jpg?alt=media&token=d0673683-e125-4784-b417-7d91f36b5487",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F3.2.jpg?alt=media&token=768cda30-028d-4750-9b40-fc47b06852f6",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F3.3.jpg?alt=media&token=a6782085-e680-4bd7-98be-4bbbf1755a51",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F3.4.jpg?alt=media&token=9b436fa5-ff2a-4bd9-99d1-50cad660d704"
    ],
    status: true,
    entryDate: "2024-10-30T00:00:00",
    expiryDate: "2024-10-30T00:00:00",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "asd",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "asd"
  },
  {
    productId: "p004",
    category: "trai-cay",
    supplier: "PureFood",
    productName: "Dưa hấu",
    foodName: "Watermelon",
    slug: "dua-hau-2-kg-im862u",
    description: `
    <p>Dưa hấu ngọt mát, tươi ngon, sản phẩm sạch từ nông trại.</p>
    <ul>
      <li>Giàu nước, giúp giải khát hiệu quả</li>
      <li>Chứa nhiều vitamin A và C</li>
      <li>Không hóa chất bảo quản</li>
      <li>Thích hợp ăn trực tiếp và làm nước ép</li>
      <li>Trồng tại các nông trại hữu cơ</li>
    </ul>
  `,
    price: 35400,
    stock: 100,
    weight: 2,
    unit: "Kg",
    origin: "Long An",
    organic: true,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F18.1.jpg?alt=media&token=b05ea5eb-c364-4017-9727-b29a9ba39139",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F18.2.jpg?alt=media&token=f41c8267-27a0-46a1-ac00-183aa7bc303e",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F18.3.jpg?alt=media&token=d61ca12f-1e94-4b50-a420-a4a83e0ccfc1",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F18.4.jpg?alt=media&token=f9bddef4-1395-485e-9513-445289e0ef74"
    ],
    status: true,
    entryDate: "2024-10-30T00:00:00",
    expiryDate: "2024-10-30T00:00:00",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "asd",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "asd"
  },
  {
    productId: "p005",
    category: "trai-cay",
    supplier: "PureFood",
    productName: "Cam sành",
    foodName: "Orange",
    slug: "cam-sanh-1-kg-3tqshu",
    description: `
    <p>Cam sành tươi ngon, mọng nước, giàu vitamin C, sản phẩm sạch từ nông trại.</p>
    <ul>
      <li>Giàu vitamin C, tốt cho sức khỏe tổng thể</li>
      <li>Hương vị ngọt mát, nhiều nước</li>
      <li>Không thuốc bảo vệ thực vật</li>
      <li>Thích hợp ăn trực tiếp và làm nước ép</li>
      <li>Trồng tại các nông trại hữu cơ</li>
    </ul>
  `,
    price: 17900,
    stock: 100,
    weight: 1,
    unit: "Kg",
    origin: "Vĩnh Long",
    organic: true,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F28.1.jpg?alt=media&token=3eb98a98-2398-4d0b-93a3-89b67bdd2e84",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F28.2.jpg?alt=media&token=89c90c2d-8d09-417f-9391-dad2c97b25ee",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F28.3.jpg?alt=media&token=66352262-c0aa-4b17-b4b2-e018a2c6aa34",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F28.4.jpg?alt=media&token=6eb34cbd-e2da-445e-9f49-24a06fca8432"
    ],
    status: true,
    entryDate: "2024-10-30T00:00:00",
    expiryDate: "2024-10-30T00:00:00",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "asd",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "asd"
  },
  {
    productId: "p006",
    category: "trai-cay",
    supplier: "PureFood",
    productName: "Kiwi xanh",
    foodName: "Green kiwi",
    slug: "kiwi-xanh-250-gr-6kodf3",
    description: `
    <p>Kiwi xanh tươi ngon, giàu vitamin và chất xơ, sản phẩm nhập khẩu chất lượng cao.</p>
    <ul>
      <li>Giàu vitamin C và chất xơ, tốt cho hệ miễn dịch</li>
      <li>Chứa nhiều chất chống oxy hóa</li>
      <li>Không hóa chất bảo quản</li>
      <li>Thích hợp ăn trực tiếp, làm salad và sinh tố</li>
      <li>Nhập khẩu từ các trang trại hữu cơ</li>
    </ul>

  `,
    price: 39000,
    stock: 100,
    weight: 250,
    unit: "Gr",
    origin: "Lâm Đồng",
    organic: true,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F27.1.jpg?alt=media&token=d954ccd7-d969-463f-a80a-4da254da10ec",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F27.3.jpg?alt=media&token=3f7ebe66-c153-4b50-bc7d-405100655377",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F27.5.jpg?alt=media&token=d547bde3-c871-4788-a63a-3d25c1b44b2f",
      "https://firebasestorage.googleapis.com/v0/b/diamoondb-1412.appspot.com/o/PureFood%2FProductEx%2F27.6.jpg?alt=media&token=244e0070-c373-4833-a87c-25d11cb513a1"
    ],
    status: true,
    entryDate: "2024-10-30T00:00:00",
    expiryDate: "2024-10-30T00:00:00",
    createdAt: "2024-10-30T00:00:00",
    createdBy: "asd",
    updatedAt: "2024-10-30T00:00:00",
    updatedBy: "asd"
  }
]
