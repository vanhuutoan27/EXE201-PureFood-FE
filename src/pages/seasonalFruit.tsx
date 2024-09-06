function SeasonalFruit() {
  const vegetableSeason = [
    {
      img: "https://images.pexels.com/photos/40731/ladybug-drop-of-water-rain-leaf-40731.jpeg?auto=compress&cs=tinysrgb&w=600",
      season: "Spring",
      vegetables: ["Kohlrabi", "Coriander", "Cabbage"]
    },
    {
      img: "https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&w=600",
      season: "Summer",
      vegetables: ["Tomatoes", "Cucumbers", "Bell Peppers"]
    },
    {
      img: "https://images.pexels.com/photos/756903/pexels-photo-756903.jpeg?auto=compress&cs=tinysrgb&w=600",
      season: "Fall",
      vegetables: ["Sweet Potatoes", "Pumpkins", "Cabbage"]
    },
    {
      img: "https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=600",
      season: "Winter",
      vegetables: ["Mustard", "Carrots", "Kohlrabi"]
    }
  ]

  return (
    <div className="mb-20 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Season vegetable</h1>
        <p className="text-xs font-medium text-gray-500">
          From farm to table, experience the freshest and healthiest produce
          straight from our fields.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {vegetableSeason.map((item, index) => (
          <div key={index} className="w-full rounded-lg shadow-lg">
            <div
              className="relative flex h-[250px] w-full items-center justify-center rounded-lg border border-gray-300 bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute inset-0 rounded-lg bg-black opacity-10" />

              <div className="w-full border bg-slate-200 text-center text-primary opacity-70">
                {item.season}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 text-gray-500">
              <ul className="flex justify-between gap-10 text-sm text-gray-500">
                {item.vegetables.map((item, i) => (
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
