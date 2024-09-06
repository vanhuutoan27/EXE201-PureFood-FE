import Hero from "@/components/global/organisms/hero"

import SaleFruit from "../components/local/home/seasonal-fruit"
import VegetableCard from "../components/local/home/vegetable-card"

function Index() {
  return (
    <div className="mb-20 flex w-full flex-col gap-10">
      <Hero />
      <VegetableCard />
      <SaleFruit />
    </div>
  )
}

export default Index
