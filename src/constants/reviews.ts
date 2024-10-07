import { ReviewType } from "@/schemas/reviewSchema"

export const sampleReviewData: ReviewType[] = [
  {
    reviewId: "r001",
    product: "p001",
    user: "u001",
    author: "Nguyen Pham Khanh",
    rating: 5,
    comment:
      "Sản phẩm rất tốt, đúng như mô tả. Rau tươi và rất sạch, sẽ tiếp tục ủng hộ!",
    flag: false,
    createdAt: "2024-09-26",
    updatedAt: "2024-09-26"
  },
  {
    reviewId: "r002",
    product: "p002",
    user: "u002",
    author: "Nguyen Quoc Dai",
    rating: 4,
    comment: "Sản phẩm khá ổn, giao hàng nhanh nhưng bao bì cần cải thiện.",
    flag: false,
    createdAt: "2024-09-25",
    updatedAt: "2024-09-25"
  },
  {
    reviewId: "r003",
    product: "p003",
    user: "u003",
    author: "Do Thu Ha",
    rating: 3,
    comment: "Chất lượng sản phẩm ổn nhưng giá hơi cao so với kỳ vọng.",
    flag: true,
    createdAt: "2024-09-24",
    updatedAt: "2024-09-24"
  }
]
