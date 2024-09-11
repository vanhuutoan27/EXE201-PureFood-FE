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
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" }
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
    <footer className="mt-20 bg-secondary text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-bold">Purefood</h2>
            </Link>
          </div>

          {/* Mapping through footerMenuItems */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {siteConfig.footerMenuItems.map((menuItem, index) => (
              <div key={index}>
                <h2 className="mb-6 font-semibold uppercase text-gray-300">
                  {menuItem.title}
                </h2>
                <ul className="font-medium">
                  {menuItem.links.map((link, linkIndex) => (
                    <li className="mb-4" key={linkIndex}>
                      <Link to={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm sm:text-center">
            © 2023{" "}
            <Link to="/purefood" className="hover:underline">
              PureFood
            </Link>
            . All Rights Reserved.
          </p>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            {/* Social Media Links */}
            {siteConfig.socialMedias.map((social, index) => (
              <Link
                key={index}
                to={social.href}
                className="slow ms-5 hover:text-gray-300"
              >
                <social.icon className="h-4 w-4" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
