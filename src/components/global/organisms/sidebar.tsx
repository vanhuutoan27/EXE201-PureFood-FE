import { useEffect, useState } from "react"

import { motion } from "framer-motion"
import {
  BarChart,
  ChevronDown,
  ChevronUp,
  Dot,
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  ShoppingCart,
  Ticket,
  Users
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import { Button } from "../atoms/button"

interface SidebarButtonProps {
  icon: React.ElementType
  label: string
  href?: string
  onClick?: () => void
  hasSubItems?: boolean
  isOpen?: boolean
}

function SidebarButton({
  icon: Icon,
  label,
  href,
  onClick,
  hasSubItems,
  isOpen
}: SidebarButtonProps) {
  const location = useLocation()
  const isActive = href && location.pathname === href

  return href ? (
    <Link to={href}>
      <Button
        type="button"
        variant="ghost"
        className={`slow h-11 w-full justify-start hover:bg-[#f6f6f7] ${isActive ? "bg-[#f6f6f7]" : ""}`}
        onClick={onClick}
      >
        <Icon size={18} className="mr-4" />
        <span className="truncate">{label}</span>
        {hasSubItems && <ChevronDown size={18} className="ml-auto" />}
      </Button>
    </Link>
  ) : (
    <Button
      type="button"
      variant="ghost"
      className="slow h-11 w-full justify-start hover:bg-[#f6f6f7]"
      onClick={onClick}
    >
      <Icon size={18} className="mr-4" />
      <span className="truncate">{label}</span>
      {hasSubItems && (
        <span className="ml-auto">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      )}
    </Button>
  )
}

interface CollapsibleProps {
  open: boolean
  children: React.ReactNode
}

function Collapsible({ open, children }: CollapsibleProps) {
  return (
    <motion.div
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  )
}

const sidebarMenu = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
    items: []
  },
  {
    label: "Báo cáo",
    icon: BarChart,
    href: "#",
    items: [
      { label: "Doanh thu", icon: Dot, href: "/admin/bao-cao/doanh-thu" },
      { label: "Lợi nhuận", icon: Dot, href: "/admin/bao-cao/loi-nhuan" },
      {
        label: "Sản phẩm bán chạy",
        icon: Dot,
        href: "/admin/bao-cao/san-pham-ban-chay"
      }
    ]
  },
  {
    label: "Sản phẩm",
    icon: Package,
    href: "#",
    items: [
      { label: "Rau Củ", icon: Dot, href: "/admin/san-pham/rau-cu" },
      { label: "Trái Cây", icon: Dot, href: "/admin/san-pham/trai-cay" },
      { label: "Tạo Mới", icon: Dot, href: "/admin/san-pham/tao-moi" }
    ]
  },
  {
    label: "Đơn hàng",
    icon: ShoppingCart,
    href: "#",
    items: [
      { label: "Tất cả đơn hàng", icon: Dot, href: "/admin/don-hang/tat-ca" },
      { label: "Đơn hàng mới", icon: Dot, href: "/admin/don-hang/moi" },
      {
        label: "Đơn hàng đã xử lý",
        icon: Dot,
        href: "/admin/don-hang/da-xu-ly"
      }
    ]
  },
  {
    label: "Khuyến mãi",
    icon: Ticket,
    href: "/admin/khuyen-mai",
    items: []
  },
  {
    label: "Khách hàng",
    icon: Users,
    href: "/admin/khach-hang",
    items: []
  },
  {
    label: "Cài đặt",
    icon: Settings,
    href: "/admin/cai-dat",
    items: []
  }
]

function Sidebar() {
  const location = useLocation()
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  useEffect(() => {
    sidebarMenu.forEach((menu, index) => {
      if (menu.items.some((item) => item.href === location.pathname)) {
        setOpenMenuIndex(index)
      }
    })
  }, [location.pathname])

  const toggleMenu = (index: number) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="fixed flex h-screen w-72 flex-col px-3 py-4 shadow-lg">
      <div className="mb-8 mt-4">
        <Link
          to="/"
          className="flex select-none justify-center text-3xl font-bold text-primary"
        >
          Pure <span className="text-secondary">Food</span>
        </Link>
      </div>

      <div className="flex-grow">
        {sidebarMenu.map((menu, index) => {
          const isOpen = openMenuIndex === index
          return (
            <div key={index} className="py-1">
              {menu.items.length === 0 ? (
                <SidebarButton
                  icon={menu.icon}
                  label={menu.label}
                  href={menu.href}
                />
              ) : (
                <>
                  <SidebarButton
                    icon={menu.icon}
                    label={menu.label}
                    hasSubItems={menu.items.length > 0}
                    isOpen={isOpen}
                    onClick={() => toggleMenu(index)}
                  />
                  <Collapsible open={isOpen}>
                    {menu.items.map((item, idx) => (
                      <SidebarButton
                        key={idx}
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                      />
                    ))}
                  </Collapsible>
                </>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-auto">
        <Link to="/">
          <Button
            type="button"
            variant="ghost"
            className="slow h-11 w-full hover:bg-[#f6f6f7] hover:text-red-500"
          >
            <LogOut size={18} className="mr-4" />
            <span className="truncate">Đăng xuất</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
