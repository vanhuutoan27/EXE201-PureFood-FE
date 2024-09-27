interface ProductDescriptionProps {
  description: string
}

function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold">Mô tả sản phẩm</h3>

      <div
        className="product-desc-lens"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default ProductDescription
