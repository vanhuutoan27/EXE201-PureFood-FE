import { siteConfig } from "@/configs/site"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="mt-40 bg-secondary">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pt-16">
          <div className="flex flex-col gap-4">
            <div className="flex w-fit cursor-pointer items-center space-x-6 text-2xl font-medium">
              {/* <img src="/Moncati Siuuuuuuuuu Logo.svg" className="h-24 w-24" /> */}
              <h2 className="slow cursor-pointer text-5xl font-bold uppercase text-white">
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
          <div className="mt-12 xl:grid xl:grid-cols-4 xl:gap-8">
            {siteConfig.footerMenuItems.map(({ title, links }) => (
              <div key={title} className="mt-12 xl:mt-0">
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
          <div className="mt-12 border-t border-gray-400/30 pt-8 sm:mt-16 lg:mt-20">
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
