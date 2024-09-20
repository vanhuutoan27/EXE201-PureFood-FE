import { Link } from "react-router-dom"

import { Button } from "@/components/global/atoms/button"

function Hero() {
  return (
    <div className="relative mt-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/home-hero-image.jpg"
          alt="Home Hero Image"
          className="h-[90vh] w-full rounded-3xl object-cover"
        />
      </div>

      <div className="absolute inset-0 h-[90vh] rounded-3xl bg-black opacity-40"></div>

      <div className="relative flex h-screen select-none flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-3xl font-bold">Tươi mới & Hữu cơ</h1>
        <h2 className="mb-2 text-6xl font-extrabold uppercase">
          Rau tốt cho sức khỏe
        </h2>
        <p className="mb-8 text-lg">
          Khám phá những ưu đãi tốt nhất cho rau tươi từ trang trại
        </p>
      </div>

      <div className="absolute left-8 right-8 top-6 flex justify-between">
        <div className="flex items-center gap-8 font-semibold text-white">
          <Link to="/rau-cu">Rau củ</Link>
          <Link to="/trai-cay">Trái cây</Link>
          <Link to="/kien-thuc">Kiến thức</Link>
        </div>

        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-primary">Pure</span>
          <span>Food</span>
        </Link>

        <div className="flex gap-4">
          <Link to="/register">
            <Button
              type="button"
              variant="ghost"
              className="text-white hover:text-white/90"
            >
              Đăng ký
            </Button>
          </Link>

          <Link to="/login">
            <Button type="button" variant="default">
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
