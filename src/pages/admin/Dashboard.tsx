import { useEffect, useState } from "react"

import axios from "axios"

// Define interface for nutriments data
interface Nutriments {
  "energy-kcal_100g"?: number
  fat_100g?: number
  sodium_100g?: number
  carbohydrates_100g?: number
  fiber_100g?: number
  proteins_100g?: number
  "vitamin-c_100g"?: number
  "vitamin-k_100g"?: number
}

interface Product {
  nutriments: Nutriments
}

interface NutritionInfoProps {
  foodName: string
}

const NutritionInfo = ({ foodName }: NutritionInfoProps) => {
  const [nutritionData, setNutritionData] = useState<Nutriments | null>(null)
  const [error, setError] = useState<string>("")

  // Helper function to calculate the % Daily Value
  const calculateDailyValue = (
    value: number | undefined,
    reference: number
  ): string => {
    return value ? `${Math.round((value / reference) * 100)}%` : "N/A"
  }

  // Fetch nutrition data when foodName changes
  useEffect(() => {
    const getNutritionData = async (foodName: string) => {
      try {
        const { data } = await axios.get(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodName}&search_simple=1&json=1&page=1&page_size=1`
        )

        const product: Product | undefined = data.products?.[0]
        if (product) {
          setNutritionData(product.nutriments)
          setError("")
        } else {
          setError("No data found for this food.")
          setNutritionData(null)
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("An error occurred while fetching data.")
        setNutritionData(null)
      }
    }

    if (foodName) {
      getNutritionData(foodName)
    }
  }, [foodName])

  return (
    <div>
      <h1>Nutrition Information for {foodName}</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {nutritionData && (
        <table className="mt-4 w-full border text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Nutrient</th>
              <th className="py-2">Amount per 100g</th>
              <th className="py-2">% Daily Value*</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Calories</td>
              <td>{nutritionData["energy-kcal_100g"] ?? "N/A"} kcal</td>
              <td>
                {calculateDailyValue(nutritionData["energy-kcal_100g"], 2000)}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Total Fat</td>
              <td>{nutritionData["fat_100g"] ?? "N/A"} g</td>
              <td>{calculateDailyValue(nutritionData["fat_100g"], 78)}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Sodium</td>
              <td>{nutritionData["sodium_100g"] ?? "N/A"} mg</td>
              <td>{calculateDailyValue(nutritionData["sodium_100g"], 2300)}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Total Carbohydrate</td>
              <td>{nutritionData["carbohydrates_100g"] ?? "N/A"} g</td>
              <td>
                {calculateDailyValue(nutritionData["carbohydrates_100g"], 275)}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Dietary Fiber</td>
              <td>{nutritionData["fiber_100g"] ?? "N/A"} g</td>
              <td>{calculateDailyValue(nutritionData["fiber_100g"], 28)}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Protein</td>
              <td>{nutritionData["proteins_100g"] ?? "N/A"} g</td>
              <td>{calculateDailyValue(nutritionData["proteins_100g"], 50)}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Vitamin C</td>
              <td>{nutritionData["vitamin-c_100g"] ?? "N/A"} mg</td>
              <td>
                {calculateDailyValue(nutritionData["vitamin-c_100g"], 90)}
              </td>
            </tr>
            <tr>
              <td className="py-2">Vitamin K</td>
              <td>{nutritionData["vitamin-k_100g"] ?? "N/A"} µg</td>
              <td>
                {calculateDailyValue(nutritionData["vitamin-k_100g"], 120)}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default NutritionInfo
