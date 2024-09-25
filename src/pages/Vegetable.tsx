import VegetableFilter from "@/components/local/vegetable/vegetable-filter"
import VegetableList from "@/components/local/vegetable/vegetable-list"
import VegetableSearch from "@/components/local/vegetable/vegetable-search"

function Vegetable() {
  return (
    <div className="space-y-10">
      <VegetableSearch />

      <div className="flex gap-10">
        <div className="sticky top-24 h-fit w-1/3">
          <VegetableFilter />
        </div>

        <div className="w-2/3">
          <VegetableList />
        </div>
      </div>
    </div>
  )
}

export default Vegetable
