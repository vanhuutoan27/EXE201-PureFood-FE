import { FaFacebook, FaGithub, FaTiktok, FaYoutube } from "react-icons/fa"

export const siteConfig = {
  navItems: [
    { label: "Rau Củ", href: "/rau-cu" },
    { label: "Trái Cây", href: "/trai-cay" },
    { label: "Kiến thức", href: "/kien-thuc" }
  ],
  footerMenuItems: [
    {
      title: "Công ty",
      links: [
        { label: "Trang chủ", href: "/" },
        { label: "Về PureFood", href: "/ve-purefood" },
        { label: "Kiến thức", href: "/kien-thuc" },
        { label: "Liên hệ", href: "/lien-he" }
      ]
    },
    {
      title: "Chính sách",
      links: [
        { label: "Chính sách & Quy định", href: "/chinh-thuc-quy-dinh" },
        { label: "Quy chế hoạt động", href: "/quy-che-hoat-dong" },
        { label: "Bảo mật thông tin", href: "/bao-mat-thong-tin" },
        { label: "Giải quyết tranh chấp", href: "/giai-quyet-tranh-chap" }
      ]
    },
    {
      title: "Tìm hiểu thêm",
      links: [
        { label: "Hướng dẫn chung", href: "/ho-tro/huong-dan-chung" },
        { label: "Hướng dẫn đặt hàng", href: "/ho-tro/huong-dan-dat-hang" },
        { label: "Hướng dẫn thanh toán", href: "/ho-tro/huong-dan-thanh-toan" },
        { label: "Câu hỏi thường gặp", href: "/ho-tro/cau-hoi-thuong-gap" }
      ]
    },
    {
      title: "Hỗ trợ",
      links: [
        { label: "Hỗ trợ khách hàng", href: "/ho-tro/ho-tro-khach-hang" },
        {
          label: "Điều khoản & Điều kiện",
          href: "/ho-tro/dieu-khoan-dieu-kien"
        },
        { label: "Giấy phép", href: "/ho-tro/giay-phep" },
        { label: "Chính sách bảo mật", href: "/ho-tro/chinh-sach-bao-mat" }
      ]
    }
  ],
  socialMedias: [
    { icon: FaFacebook, label: "Facebook", href: "" },
    { icon: FaYoutube, label: "YouTube", href: "" },
    { icon: FaTiktok, label: "TikTok", href: "" },
    { icon: FaGithub, label: "GitHub", href: "" }
  ]
}
