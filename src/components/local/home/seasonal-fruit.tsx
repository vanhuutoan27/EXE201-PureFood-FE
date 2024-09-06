import Section from "@/components/global/organisms/section"

function SeasonalFruit() {
  const vegetableSeason = [
    {
      image:
        "https://images.pexels.com/photos/40731/ladybug-drop-of-water-rain-leaf-40731.jpeg?auto=compress&cs=tinysrgb&w=600",
      season: "Spring",
      vegetables: ["Kohlrabi", "Coriander", "Cabbage"]
    },
    {
      image:
        "https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&w=600",
      season: "Summer",
      vegetables: ["Tomatoes", "Cucumbers", "Bell Peppers"]
    },
    {
      image:
        "https://images.pexels.com/photos/756903/pexels-photo-756903.jpeg?auto=compress&cs=tinysrgb&w=600",
      season: "Fall",
      vegetables: ["Sweet Potatoes", "Pumpkins", "Cabbage"]
    },
    {
      image:
        "https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=600",
      season: "Winter",
      vegetables: ["Mustard", "Carrots", "Kohlrabi"]
    }
  ]

  return (
    <div>
      <Section
        title="Rau củ theo mùa"
        description="Rau theo mùa tươi, bổ dưỡng, thân thiện với môi trường và hỗ trợ nông nghiệp địa phương."
      />

      <div className="grid grid-cols-2 gap-6">
        {vegetableSeason.map((item, index) => (
          <div key={index} className="w-full rounded-lg shadow-lg">
            <div
              className="relative flex h-[250px] w-full items-center justify-center rounded-lg border border-gray-300 bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 rounded-lg bg-black opacity-10" />

              <div className="w-full border bg-slate-200 text-center text-primary opacity-70">
                {item.season}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 text-gray-500">
              <ul className="flex justify-between gap-10 text-sm text-gray-500">
                {item.vegetables.map((item) => (
                  <p className="cursor-pointer hover:text-primary">{item}</p>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SeasonalFruit
