import { ShieldCheck } from "lucide-react"

function ProductQualityCommitment() {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold text-secondary">
        Cam Kết Chất Lượng
      </h3>

      <ul className="space-y-4">
        <li className="flex items-start text-secondary">
          <ShieldCheck className="text-primary" />
          <span className="ml-5">
            100% rau củ quả tại PureFood được tuyển chọn kỹ lưỡng, đảm bảo nguồn
            gốc rõ ràng và chất lượng cao.
          </span>
        </li>
        <li className="flex items-start text-secondary">
          <ShieldCheck className="text-primary" />
          <span className="ml-5">
            Sản phẩm được canh tác tự nhiên, không sử dụng thuốc trừ sâu độc hại
            và hoá chất bảo vệ thực vật.
          </span>
        </li>
        <li className="flex items-start text-secondary">
          <ShieldCheck className="text-primary" />
          <span className="ml-5">
            Quy trình kiểm tra nghiêm ngặt, từ khâu trồng trọt đến thu hoạch,
            đóng gói, đảm bảo an toàn vệ sinh thực phẩm.
          </span>
        </li>
        <li className="flex items-start text-secondary">
          <ShieldCheck className="text-primary" />
          <span className="ml-5">
            Tất cả các sản phẩm tại PureFood đều có giấy chứng nhận đạt tiêu
            chuẩn VietGAP và GlobalGAP.
          </span>
        </li>
        <li className="flex items-start text-secondary">
          <ShieldCheck className="text-primary" />
          <span className="ml-5">
            Chính sách đổi trả linh hoạt và bảo hành chất lượng đối với mọi sản
            phẩm rau củ quả tại PureFood.
          </span>
        </li>
      </ul>
    </div>
  )
}

export default ProductQualityCommitment
