import Image from "next/image"

export default function GreenHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#23856D]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left: Contact */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <Image src="/images/phone.png" alt="phone" width={16} height={16} />
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <Image src="/images/mail.png" alt="mail" width={16} height={16} />
            <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center: Follow Us and discounts*/}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px]">
            <Image src="/images/insta.png" alt="insta" width={16} height={16} />
            <Image src="/images/youtube.png" alt="yt" width={16} height={16} />
            <Image src="/images/fb.png" alt="fb" width={16} height={16} />
            <Image src="/images/twitter.png" alt="twit" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
