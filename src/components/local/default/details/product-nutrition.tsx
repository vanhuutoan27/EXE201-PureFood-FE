import { useEffect, useState } from "react"

import axios from "axios"
import { ClipLoader } from "react-spinners"

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

interface ProductNutritionProps {
  foodName: string
}

function ProductNutrition({ foodName }: ProductNutritionProps) {
  const [nutritionData, setNutritionData] = useState<Nutriments | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const calculateDailyValue = (
    value: number | undefined,
    reference: number
  ): string => {
    return value ? `${Math.round((value / reference) * 100)}%` : "N/A"
  }

  useEffect(() => {
    const getNutritionData = async (foodName: string) => {
      setLoading(true)
      try {
        const { data } = await axios.get(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodName}&search_simple=1&json=1&page=1&page_size=1`
        )

        const product: Product | undefined = data.products?.[0]
        if (product) {
          setNutritionData(product.nutriments)
        } else {
          setNutritionData(null)
        }
      } catch (err) {
        // console.error("Error fetching data:", err)
        setNutritionData(null)
      } finally {
        setLoading(false)
      }
    }

    if (foodName) {
      getNutritionData(foodName)
    }
  }, [foodName])

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <ClipLoader color="#00000" size={70} />
      </div>
    )
  }

  if (!nutritionData) {
    return (
      <p className="error-lens">
        Không có dữ liệu dinh dưỡng cho sản phẩm này.
      </p>
    )
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold">Thông tin dinh dưỡng</h3>

      <table className="mt-4 w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Chất dinh dưỡng</th>
            <th className="py-2">Lượng trên 100g</th>
            <th className="py-2">% Giá trị hằng ngày*</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Calo</td>
            <td>{nutritionData["energy-kcal_100g"] ?? "N/A"} kcal</td>
            <td>
              {calculateDailyValue(nutritionData["energy-kcal_100g"], 2000)}
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Chất béo tổng</td>
            <td>{nutritionData.fat_100g ?? "N/A"} g</td>
            <td>{calculateDailyValue(nutritionData.fat_100g, 78)}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Natri</td>
            <td>{nutritionData.sodium_100g ?? "N/A"} mg</td>
            <td>{calculateDailyValue(nutritionData.sodium_100g, 2300)}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Carbohydrate tổng</td>
            <td>{nutritionData.carbohydrates_100g ?? "N/A"} g</td>
            <td>
              {calculateDailyValue(nutritionData.carbohydrates_100g, 275)}
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Chất xơ</td>
            <td>{nutritionData.fiber_100g ?? "N/A"} g</td>
            <td>{calculateDailyValue(nutritionData.fiber_100g, 28)}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Chất đạm</td>
            <td>{nutritionData.proteins_100g ?? "N/A"} g</td>
            <td>{calculateDailyValue(nutritionData.proteins_100g, 50)}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Vitamin C</td>
            <td>{nutritionData["vitamin-c_100g"] ?? "N/A"} mg</td>
            <td>{calculateDailyValue(nutritionData["vitamin-c_100g"], 90)}</td>
          </tr>
          <tr>
            <td className="py-2">Vitamin K</td>
            <td>{nutritionData["vitamin-k_100g"] ?? "N/A"} µg</td>
            <td>{calculateDailyValue(nutritionData["vitamin-k_100g"], 120)}</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4 text-sm text-gray-500">
        *Giá trị hàng ngày dựa trên chế độ ăn 2,000 calo.
      </p>
    </div>
  )
}

export default ProductNutrition
