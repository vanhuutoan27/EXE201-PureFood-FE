import { FaFacebook, FaGithub, FaTiktok, FaYoutube } from "react-icons/fa"

export const siteConfig = {
  navItems: [
    { label: "Rau Củ", href: "/rau-cu" },
    { label: "Trái Cây", href: "/trai-cay" },
    { label: "Kiến thức", href: "/kien-thuc" }
  ],
  footerMenuItems: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blogs", href: "/blogs" }
      ]
    },
    {
      title: "Help center",
      links: [
        { label: "Discord", href: "/discord" },
        { label: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "privacy-policy" },
        { label: "Terms & Conditions", href: "terms-conditions" }
      ]
    }
  ],
  socialMedias: [
    { icon: FaFacebook, label: "Facebook", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
    { icon: FaTiktok, label: "TikTok", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "#" }
  ]
}
