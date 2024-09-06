import { Dot } from "lucide-react"

import Section from "@/components/global/organisms/section"

function VegetableCard() {
  const vegetableChip = [
    {
      image:
        "https://images.pexels.com/photos/27644253/pexels-photo-27644253/free-photo-of-fresh-red-apples.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Apple",
      description: ["Sweet", "Fresh", "New"]
    },
    {
      image:
        "https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Banana",
      description: ["Organic", "Ripe", "Sweet"]
    },
    {
      image:
        "https://images.pexels.com/photos/59830/melons-water-melons-fruit-green-59830.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Watermelon",
      description: ["Organic", "Juicy", "Ripe"]
    },
    {
      image:
        "https://images.pexels.com/photos/13768938/pexels-photo-13768938.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Water spinach",
      description: ["Organic", "Crisp", "New"]
    },
    {
      image:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Tomato",
      description: ["Organic", "Fresh", "Sour"]
    },
    {
      image:
        "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cucumber",
      description: ["Organic", "Crisp", "Ripe"]
    }
  ]

  return (
    <div>
      <Section
        title="Rau củ bán chạy"
        description="Từ trang trại đến bàn ăn, hãy trải nghiệm những sản phẩm tươi ngon và lành mạnh nhất ngay từ cánh đồng."
        button="Xem thêm"
        url="/asd"
      />

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {vegetableChip.map((vegetable, index) => (
          <div
            key={index}
            className="flex items-center gap-6 rounded-xl bg-card p-4 shadow-md"
          >
            <img
              src={vegetable.image}
              alt={vegetable.title}
              className="size-20 cursor-pointer select-none rounded-lg object-cover"
            />

            <div className="space-y-1">
              <h2 className="w-fit text-lg font-semibold text-secondary">
                {vegetable.title}
              </h2>
              <ul className="flex text-gray-500">
                {vegetable.description.map((desc, i) => (
                  <li
                    key={i}
                    className="flex items-center text-[13px] font-medium"
                  >
                    {i > 0 && (
                      <i className="">
                        <Dot />
                      </i>
                    )}
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VegetableCard
