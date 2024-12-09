import Image from "next/image";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-[10px] absolute top-[850px] bg-[#f5f5f5]">
      <div className="w-[1050px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[40px]">

        {/* Title */}
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px]">
            EDITOR’S PICK
          </h3>
          <p className="w-[347px] h-auto font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full h-[500px] flex gap-[30px]">

          {/* Men Image */}
          <div className="relative w-[510px] h-[500px]">
            <Image
              src="/images/men.png"
              alt="men"
              className="w-full h-full object-cover rounded-md"
              width={510}
              height={500}
            />
            <button className="absolute top-[434px] left-[50%] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-[240px] h-[500px]">
            <Image
              src="/images/women.png"
              alt="women"
              className="w-full h-full object-cover"
              width={240}
              height={500}
            />
            <button className="absolute top-[434px] left-[50%] transform -translate-x-1/2 bg-white px-[48px] py-[12px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px]">
              WOMEN
            </button>
          </div>

          {/* Accessories and Kids */}
          <div className="w-[240px] h-[500px] flex flex-col gap-[30px]">

            {/* Accessories Image (Girl) */}
            <div className="relative w-[240px] h-[242px]">
              <Image
                src="/images/girl.png"
                alt="girl"
                className="w-full h-full object-cover"
                width={240}
                height={242}
              />
              <button className="absolute top-[180px] left-[50%] transform -translate-x-1/2 bg-white px-[24px] py-[12px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px]">
                ACCESSORIES
              </button>
            </div>

            {/* Kids Image (Boy) */}
            <div className="relative w-[240px] h-[242px]">
              <Image
                src="/images/boy.png"
                alt="boy"
                className="w-full h-full object-cover"
                width={240}
                height={242}
              />
              <button className="absolute top-[180px] left-[50%] transform -translate-x-1/2 bg-white px-[24px] py-[12px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px]">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
