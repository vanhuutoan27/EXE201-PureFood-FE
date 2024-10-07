import { CircleCheckBig } from "lucide-react"

function ProductBuyGuide() {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-secondary">
        Hướng dẫn mua hàng
      </h3>

      <ul className="space-y-4">
        <li className="flex items-start text-secondary">
          <CircleCheckBig className="text-primary" />
          <span className="ml-5">
            <span className="font-semibold">Cách 1:</span> Quý khách vui lòng
            bấm nút "Gửi tin nhắn" hoặc liên hệ qua Hotline{" "}
            <span className="font-semibold">0987.654.321</span>, gặp trực tiếp
            nhân viên chăm sóc khách hàng để được tư vấn và đặt hàng.
          </span>
        </li>
        <li className="flex items-start text-secondary">
          <CircleCheckBig className="text-primary" />
          <span className="ml-5">
            <span className="font-semibold">Cách 2:</span> Quý khách bấm vào nút
            "Thêm vào giỏ hàng", sau đó chọn thanh toán để hoàn tất việc cung
            cấp thông tin, thanh toán và đặt hàng.
          </span>
        </li>
      </ul>
    </div>
  )
}

export default ProductBuyGuide
