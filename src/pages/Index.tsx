import Hero from "@/components/global/organisms/Hero"

import SeasonalFruit from "../components/local/home/seasonal-fruit"
import VegetableCard from "../components/local/home/vegetable-card"

function Index() {
  return (
    <div className="flex w-full flex-col gap-10">
      <Hero />
      <VegetableCard />
      <SeasonalFruit />
    </div>
  )
}

export default Index
