import Navbar from "../components/Navbar";
import GreenHeader from "../components/GreenHeader";

export default function ShopPage() {
  return (
    <div>
      <GreenHeader />
      <Navbar />

      {/* Shop Content */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[92px] py-[24px] flex flex-col items-center">
        <div className="w-[1049px] h-[44px] flex gap-[1000px] items-center py-[40px]">

          {/* Shop Title */}
          <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
          </div>

          <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              <img src="/images/arrow.png" alt="arrow" width={8.26} height={6} />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="w-[1440px] h-[271px] bg-[#FAFAFA]">
        <div className="w-[1088px] h-[271px] absolute top-[200px] left-[176px] pb-[48px]">
          <div className="w-[1088px] h-[223px] flex gap-[15px]">
            <img src="/images/card-item.png" alt="1" />
            <img src="/images/card-item-1.png" alt="2" />
            <img src="/images/card-item-2.png" alt="3" />
            <img src="/images/card-item-3.png" alt="4" />
            <img src="/images/card-item-4.png" alt="5" />
          </div>
        </div>
      </div>

      {/* Popularity */}
      <div className="w-[1440px] h-[98px] absolute justify-center top-[500px]">
        <div className="w-[1050px] h-[98px]  absolute left-[195px] py-[24px] flex gap-[80px]">
          <div className="w-[1040px] h-[50px] flex justify-between">
            <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
              Showing all 12 results
            </div>
          </div>
          <div className="w-[177px] h-[46px]  px-[1px] flex gap-[15px] justify-center">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
              Views:
            </h6>
            <img src="/images/frame.png" alt="frame" className="flex justify-center" />
          </div>
          <div className="w-[252px] px-[1px] flex  gap-[15px]">
            <button className="w-[141px] h-[50px] border border-[#DDDDDD]">
              <p className=" font-Montserrat text-[14px] leading-[28px] text-[#737373]">
                Popularity
              </p>
              <img
                src="/images/drop.png"
                alt="drop"
                className="absolute top-[10px] left-[10px]"
              />
            </button>
            <button className="w-[94px] h-[50px] px-[20px] py-[10px] flex gap-[10px] bg-[#23A6F0]">
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                Filter
              </h6>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Clients */}
      <img src="/images/clients.png" alt="clients" className="absolute top-[600px]" />

      {/* Footer */}
      <footer className="bg-white absolute top-[800px] left-[100px]">
        {/* Top */}
        <section className="bg-[#ffffff] py-10">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
            </div>
            <div className="flex gap-6">
              <img src="/images/design-facebook.png" alt="fb" className="w-6 h-6 " />
              <img src="/images/design-instagram.png" alt="fb" className="w-6 h-6 " />
              <img src="/images/design-twitter.png" alt="fb" className="w-6 h-6 " />
            </div>
          </div>
        </section>

        <div className="border-t border-[#e6e6e6]" />
      </footer>
    </div>
  );
}
