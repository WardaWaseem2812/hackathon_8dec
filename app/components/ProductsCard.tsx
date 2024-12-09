import Image from "next/image";
import CardText from "./CardText";

export default function ProductsCard() {
  return (
    <div className="w-full absolute top-[1470px] left-0 flex justify-center">
      <div className="w-[1124px] py-[80px] flex flex-col gap-[80px]">
        {/* Text Content */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>
        
        {/* Card Content */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          
          {/* Products Card */}
          {[
            "/images/product-cover-5.png",
            "/images/product-cover-5-1.png",
            "/images/product-cover-5-2.png",
            "/images/product-cover-5-3.png",
            "/images/product-cover-5-4.png",
            "/images/product-cover-5-5.png",
            "/images/product-cover-5-6.png",
            "/images/product-cover-5-7.png"
          ].map((pic, index) => (
            <div key={index} className="w-[238px] h-[615px] mx-auto">
              <div className="w-full h-full">
                <div className="w-[239px] h-[427px]">
                  <Image src={pic} alt={`picture${index + 1}`} width={239} height={427} />
                </div>
                <CardText />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
