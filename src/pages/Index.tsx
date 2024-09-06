import Hero from "./hero"
import SeasonalFruit from "./seasonalFruit"
import Vegetables from "./vegetableChip"

function Index() {
  return (
    <div className="flex w-full flex-col gap-10">
      <Hero />
      <Vegetables />
      <SeasonalFruit />
    </div>
  )
}

export default Index
