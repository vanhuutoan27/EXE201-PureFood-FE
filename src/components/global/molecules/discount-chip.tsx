interface DiscountChipProps {
  rate: number
}

function DiscountChip({ rate }: DiscountChipProps) {
  return (
    <span className="select-none rounded-lg bg-green-100 px-4 py-1 text-sm font-semibold text-secondary">
      Save {rate}%
    </span>
  )
}

export default DiscountChip
