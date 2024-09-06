import { Dot } from "lucide-react"

import { Button } from "@/components/global/atoms/button"

function Vegetables() {
  const vegetableChip = [
    {
      img: "https://images.pexels.com/photos/27644253/pexels-photo-27644253/free-photo-of-fresh-red-apples.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Apple",
      description: ["Sweet", "Fresh", "New"]
    },
    {
      img: "https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Banana",
      description: ["Organic", "Ripe", "Sweet"]
    },
    {
      img: "https://images.pexels.com/photos/59830/melons-water-melons-fruit-green-59830.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Watermelon",
      description: ["Organic", "Juicy", "Ripe"]
    },
    {
      img: "https://images.pexels.com/photos/13768938/pexels-photo-13768938.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Water spinach",
      description: ["Organic", "Crisp", "New"]
    },
    {
      img: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Tomato",
      description: ["Organic", "Fresh", "Sour"]
    },
    {
      img: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cucumber",
      description: ["Organic", "Crisp", "Ripe"]
    }
  ]

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Best selling product</h1>
          <p className="text-xs font-medium text-gray-500">
            From farm to table, experience the freshest and healthiest produce
            straight from our fields.
          </p>
        </div>
        <Button variant={"secondary"}>See more</Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {vegetableChip.map((vegetable, index) => (
          <div
            key={index}
            className="flex items-center rounded-xl bg-gray-100 p-2 shadow-md"
          >
            <img
              src={vegetable.img}
              alt={vegetable.title}
              className="h-20 w-20 cursor-pointer select-none rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-1 p-6">
              <h2 className="cursor-pointer text-base font-semibold hover:text-gray-500">
                {vegetable.title}
              </h2>
              <ul className="flex text-gray-500">
                {vegetable.description.map((desc, i) => (
                  <li key={i} className="flex items-center text-xs font-medium">
                    {i > 0 && (
                      <i className="ml-2 mr-2">
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

export default Vegetables
