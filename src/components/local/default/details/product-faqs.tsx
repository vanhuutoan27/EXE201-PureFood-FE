import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/global/atoms/accordion"

function ProductFaqs() {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold text-secondary">
        Câu Hỏi Thường Gặp
      </h3>

      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="border-b text-base">
            Tại sao nên chọn mua rau củ quả sạch tại cửa hàng chúng tôi?
          </AccordionTrigger>
          <AccordionContent className="mt-4">
            <ul className="list-disc pl-5">
              <h4 className="mb-1 text-base font-semibold">
                Lợi ích của sản phẩm rau củ quả sạch
              </h4>
              <li className="text-secondary">
                Nguồn gốc rõ ràng, kiểm định chất lượng nghiêm ngặt.
              </li>
              <li className="text-secondary">
                Không chứa hóa chất độc hại, an toàn cho sức khỏe.
              </li>
              <li className="text-secondary">
                Đảm bảo tươi ngon, giàu dinh dưỡng.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="border-b text-base">
            Dịch vụ sau khi mua hàng
          </AccordionTrigger>
          <AccordionContent className="mt-4">
            <ul className="list-disc pl-5">
              <li className="text-secondary">
                Miễn phí giao hàng cho đơn hàng trên 500,000 VND.
              </li>
              <li className="text-secondary">
                Hỗ trợ đổi trả trong 24 giờ nếu sản phẩm không đạt chất lượng.
              </li>
              <li className="text-secondary">
                Tư vấn dinh dưỡng và cách bảo quản rau củ quả miễn phí.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="border-b text-base">
            Câu hỏi thường gặp
          </AccordionTrigger>
          <AccordionContent className="mt-4">
            <ul className="list-disc pl-5">
              <h4 className="mb-1 font-semibold">
                Làm thế nào để biết rau củ quả có nguồn gốc rõ ràng?
              </h4>
              <li className="text-secondary">
                Mỗi sản phẩm đều có tem chứng nhận, khách hàng có thể tra cứu
                thông tin nguồn gốc sản phẩm trên hệ thống website.
              </li>
            </ul>

            <ul className="mt-4 list-disc pl-5">
              <h4 className="mb-1 font-semibold">
                Cửa hàng có giao hàng tận nơi không?
              </h4>
              <li className="text-secondary">
                Cửa hàng chúng tôi hỗ trợ giao hàng tận nơi trên toàn quốc. Thời
                gian giao hàng từ 1-3 ngày tùy thuộc vào địa chỉ nhận hàng.
              </li>
            </ul>

            <ul className="mt-4 list-disc pl-5">
              <h4 className="mb-1 font-semibold">
                Tôi có thể đổi trả sản phẩm không đạt chất lượng không?
              </h4>
              <li className="text-secondary">
                Cửa hàng hỗ trợ đổi trả miễn phí trong vòng 24 giờ nếu sản phẩm
                không đạt chất lượng hoặc có lỗi do vận chuyển.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ProductFaqs
