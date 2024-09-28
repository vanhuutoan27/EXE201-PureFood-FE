import { CircleCheckBig } from "lucide-react"

function ProductGuide() {
  return (
    <ul className="space-y-4">
      <li className="flex items-start text-secondary">
        <CircleCheckBig className="text-secondary" />
        <span className="ml-5">
          <span className="font-semibold">Gọi mua hàng 1900 636 648</span>
        </span>
      </li>
      <li className="flex items-start text-secondary">
        <CircleCheckBig className="text-secondary" />
        <span className="ml-5">
          <span className="font-semibold">Đảm bảo tươi ngon</span>
        </span>
      </li>
      <li className="flex items-start text-secondary">
        <CircleCheckBig className="text-secondary" />
        <span className="ml-5">
          <span className="font-semibold">Giao hàng trực tiếp từ vườn</span>
        </span>
      </li>
      <li className="flex items-start text-secondary">
        <CircleCheckBig className="text-secondary" />
        <span className="ml-5">
          <span className="font-semibold">Đổi trả trong vòng 24h</span>
        </span>
      </li>
    </ul>
  )
}

export default ProductGuide
