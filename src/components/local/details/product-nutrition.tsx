function ProductNutrition() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold">Thông tin dinh dưỡng</h3>

      <table className="w-full text-left">
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
            <td>31</td>
            <td>2%</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Total Fat</td>
            <td>0.3g</td>
            <td>0%</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Sodium</td>
            <td>33mg</td>
            <td>1%</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Total Carbohydrate</td>
            <td>6g</td>
            <td>2%</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Dietary Fiber</td>
            <td>2.6g</td>
            <td>9%</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Protein</td>
            <td>2.5g</td>
            <td>5%</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Vitamin C</td>
            <td>89.2mg</td>
            <td>99%</td>
          </tr>
          <tr>
            <td className="py-2">Vitamin K</td>
            <td>101.6µg</td>
            <td>85%</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 text-sm text-gray-500">
        *Percent Daily Values are based on a 2,000 calorie diet.
      </p>
    </div>
  )
}

export default ProductNutrition
