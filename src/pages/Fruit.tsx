import FruitFilter from "@/components/local/fruit/fruit-filter"
import FruitList from "@/components/local/fruit/fruit-list"
import FruitSearch from "@/components/local/fruit/fruit-search"

function Fruit() {
  return (
    <div className="space-y-10">
      <FruitSearch />

      <div className="flex gap-10">
        <div className="sticky top-24 h-fit w-1/3">
          <FruitFilter />
        </div>

        <div className="w-2/3">
          <FruitList />
        </div>
      </div>
    </div>
  )
}

export default Fruit
