import { siteConfig } from "@/configs/site"
import { Link, useLocation } from "react-router-dom"

import UserButton from "./user-button"

function Header() {
  const location = useLocation()

  return (
    <header className="sticky-nav relative bg-white py-4 drop-shadow-sm">
      <div className="container flex items-center justify-between">
        {/* Left Side - Navigation */}
        <div className="flex items-center space-x-8">
          {siteConfig.navItems.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.href}
              className={`slow relative font-semibold ${
                location.pathname === navItem.href
                  ? "active-nav-item text-primary"
                  : ""
              }`}
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        {/* Center - Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          <span className="text-primary">Pure</span>
          <span>Food</span>
        </Link>

        {/* Right Side - User */}
        <UserButton />
      </div>
    </header>
  )
}

export default Header
