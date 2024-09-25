import { FaFacebook, FaGithub, FaTiktok, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

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

function Footer() {
  return (
    <div className="mt-40 bg-secondary">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pt-16">
          <div className="flex flex-col gap-4">
            <div className="flex w-fit cursor-pointer items-center space-x-6 text-2xl font-medium">
              {/* <img src="/Moncati Siuuuuuuuuu Logo.svg" className="h-24 w-24" /> */}
              <h2 className="slow cursor-pointer text-7xl font-bold uppercase text-white">
                PureFood
              </h2>
            </div>
            <div className="max-w-xl pr-16 text-card">
              PureFood là nơi chia sẻ kiến thức về thực phẩm sạch, cách chế biến
              thực phẩm an toàn và nhiều hơn nữa.
            </div>
            <div className="mt-4 flex gap-4">
              {siteConfig.socialMedias.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  to={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 xl:grid xl:grid-cols-4 xl:gap-8">
            {siteConfig.footerMenuItems.map(({ title, links }) => (
              <div key={title} className="mt-16 xl:mt-0">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        to={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="slow text-card hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-center text-card">
              &copy; 2024 PureFood. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
