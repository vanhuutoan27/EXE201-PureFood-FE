import { productType } from "@/schemas/productSchema"

export const exampleVegetables: productType[] = [
  {
    productId: "veg_001",
    category: "Quả",
    name: "Cà rốt",
    description:
      "Cà rốt hữu cơ tươi từ Đà Lạt, không sử dụng phân bón hóa học, chứa nhiều vitamin A và chất xơ, giúp tăng cường sức khỏe và hỗ trợ tiêu hóa. Sản phẩm phù hợp cho các món hầm, súp, salad và nước ép, đem lại hương vị tươi ngon và an toàn cho sức khỏe",
    price: 30000,
    stock: 50,
    weight: 1,

    unit: "kg",
    images: [
      "https://plus.unsplash.com/premium_photo-1663926032098-62d3593c3200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2Fycm90fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fENhcnJvdHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    blog: [
      {
        type: "Món ăn",
        title: "Lợi ích sức khỏe của cà rốt hữu cơ",
        content:
          "Cà rốt chứa nhiều vitamin A và chất chống oxy hóa, giúp tăng cường sức khỏe mắt, làm đẹp da và hỗ trợ hệ tiêu hóa. Cà rốt hữu cơ đảm bảo an toàn, không chứa hóa chất độc hại.",
        createdAt: "2024-09-01",
        author: "Nguyễn Văn A",
        image:
          "https://plus.unsplash.com/premium_photo-1675366071314-858486761d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNhcm90fGVufDB8fDB8fHww"
      },
      {
        type: "Món ăn",
        title: "Cách chế biến dưa leo ngon miệng",
        content:
          "Dưa leo là thực phẩm giàu nước và dễ chế biến. Bạn có thể sử dụng dưa leo để làm salad, sinh tố hoặc ăn trực tiếp để giải nhiệt cơ thể trong những ngày hè nóng bức.",
        createdAt: "2024-09-02",
        author: "Trần Thị B",
        image:
          "https://plus.unsplash.com/premium_photo-1687975124273-59c1cae2e580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D"
      }
    ],
    origin: "Đà Lạt",
    organic: true,
    status: true,
    entryDate: "2024-09-08",
    expiryDate: "2024-10-08",
    createdAt: "2024-09-08",
    updatedAt: "2024-09-08",
    createdBy: "2024-09-08",
    updatedBy: "2024-09-08"
  },
  {
    productId: "veg_002",
    category: "Quả",
    name: "Dưa leo",
    description:
      "Dưa chuột xanh từ Nha Trang, không hữu cơ, giàu nước, vitamin và khoáng chất. Vỏ mỏng, hương vị mát lành, thích hợp dùng trực tiếp hoặc làm salad. Dưa leo có thể giúp giải nhiệt cơ thể, làm đẹp da và bổ sung lượng nước tự nhiên",
    price: 23000,
    stock: 30,
    weight: 1,
    unit: "kg",
    images: [
      "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1602343244137-a142ba5c7b22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEN1Y3VtYmVyfGVufDB8fDB8fHww"
    ],
    blog: [
      {
        type: "Món ăn",
        title: "Cách chế biến dưa leo ngon miệng",
        content:
          "Dưa leo là thực phẩm giàu nước và dễ chế biến. Bạn có thể sử dụng dưa leo để làm salad, sinh tố hoặc ăn trực tiếp để giải nhiệt cơ thể trong những ngày hè nóng bức.",
        createdAt: "2024-09-02",
        author: "Trần Thị B",
        image:
          "https://plus.unsplash.com/premium_photo-1687975124273-59c1cae2e580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D"
      }
    ],
    origin: "Nha Trang",
    organic: false,
    status: true,
    entryDate: "2024-09-08",
    expiryDate: "2024-10-08",
    createdAt: "2024-09-08",
    updatedAt: "2024-09-08",
    createdBy: "2024-09-08",
    updatedBy: "2024-09-08"
  },
  {
    productId: "veg_003",
    category: "Quả",
    name: "Dưa hấu",
    description:
      "Dưa hấu ngọt tự nhiên từ Nha Trang, trồng hữu cơ, không chất bảo quản, giúp giải khát và cung cấp nhiều vitamin C. Vỏ mỏng, thịt quả đỏ, mọng nước và vị ngọt thanh. Dưa hấu là lựa chọn hoàn hảo cho ngày hè",
    price: 42000,
    stock: 30,
    weight: 1,
    unit: "kg",
    images: [
      "https://media.istockphoto.com/id/649824716/photo/summer-fruit-green-watermelon.webp?a=1&b=1&s=612x612&w=0&k=20&c=bbrrFe00223c-JZqXguzXtT3Fkrn_d2h5Q-Hw9KFr0A=",
      "https://images.unsplash.com/photo-1526841535633-ef3be0b21fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGVybWVsb258ZW58MHx8MHx8fDA%3D"
    ],
    blog: [
      {
        type: "Món ăn",
        title: "Lợi ích của dưa hấu hữu cơ",
        content:
          "Dưa hấu hữu cơ không chỉ giúp giải khát mà còn cung cấp nhiều vitamin C và chất chống oxy hóa, rất tốt cho da và hệ miễn dịch. Dưa hấu hữu cơ đảm bảo an toàn, không chứa thuốc trừ sâu hay hóa chất độc hại.",
        createdAt: "2024-09-03",
        author: "Lê Hoàng C",
        image:
          "https://images.unsplash.com/photo-1592498642474-74f9ee88248d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGVyJTIwbWVsb258ZW58MHx8MHx8fDA%3D"
      }
    ],
    origin: "Nha Trang",

    organic: true,
    status: true,
    entryDate: "2024-09-08",
    expiryDate: "2024-10-08",
    createdAt: "2024-09-08",
    updatedAt: "2024-09-08",
    createdBy: "2024-09-08",
    updatedBy: "2024-09-08"
  },
  {
    productId: "veg_004",
    category: "Quả",
    name: "Dưa hấu",
    description:
      "Chuối vàng từ Nha Trang, không sử dụng chất bảo quản hay hóa chất, đảm bảo chất lượng sạch. Vị ngọt tự nhiên, thơm ngon, thích hợp dùng cho bữa sáng, ăn trực tiếp hoặc làm nguyên liệu cho các món bánh, sinh tố",
    price: 37000,
    stock: 30,
    weight: 1,
    unit: "kg",
    images: [
      "https://images.unsplash.com/photo-1543218024-57a70143c369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1685946109192-b9b1867bf0c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    blog: [
      {
        type: "Món ăn",
        title: "Lợi ích của chuối vàng sạch",
        content:
          "Chuối vàng là nguồn cung cấp năng lượng dồi dào, chứa nhiều kali và vitamin B6. Chuối vàng không hóa chất đảm bảo an toàn, thích hợp cho cả người lớn và trẻ nhỏ, giúp tăng cường sức khỏe.",
        createdAt: "2024-09-04",
        author: "Phạm Văn D",
        image:
          "https://images.unsplash.com/photo-1623227774049-032b11960e7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww"
      }
    ],
    origin: "Nha Trang",
    organic: true,
    status: true,
    entryDate: "2024-09-08",
    expiryDate: "2024-10-08",
    createdAt: "2024-09-08",
    updatedAt: "2024-09-08",
    createdBy: "2024-09-08",
    updatedBy: "2024-09-08"
  }
]
