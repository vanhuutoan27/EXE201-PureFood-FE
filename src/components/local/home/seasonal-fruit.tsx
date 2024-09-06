import { Button } from "@/components/global/atoms/button"
import Section from "@/components/global/organisms/section"

function SaleFruit() {
  const vegetableSeason = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1667051230160-5906f5683a59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZydWl0fGVufDB8fDB8fHww",

      title: "Trái cây",
      description: "Giảm giá 40% cho sản phẩm"
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",

      title: "Rau củ",
      description: "Giảm giá 40% cho sản phẩm"
    }
  ]

  return (
    <div>
      <Section
        title="Trái Cây Tươi Giảm Giá Đặc Biệt"
        description="Hãy nhanh tay chọn cho mình những loại trái cây yêu thích, bổ sung vitamin và khoáng chất cho cơ thể mỗi ngày."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {vegetableSeason.map((item, index) => (
          <div
            key={index}
            className="flex h-[40vh] select-none items-end justify-center rounded-xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="mb-6 flex flex-col items-center gap-6">
              <h3 className="cursor-pointer text-3xl font-semibold text-white duration-300 hover:text-secondary">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-white">
                {item.description}
              </p>
              <Button variant={"default"}>Xem thêm</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SaleFruit
