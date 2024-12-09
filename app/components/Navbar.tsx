"use client"; // Add this line at the top

import Image from "next/image";
import Link from "next/link";  
import { useState } from "react"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="relative lg:w-[1437px] lg:h-[58px] w-full h-[532px] lg:absolute lg:top-[70px]">
      <div className="absolute left-[38px] flex items-center gap-[10px]">
        <h3 className="font-Montserrat lg:mt-[15px] lg:ml-[60px] font-semibold leading-[32px] text-[24px] hidden lg:block">Bandage</h3>
      </div>

      <div className="w-[1155px] h-[58px] absolute left-[265px] hidden lg:block">
        <div className="w-[361px] h-[25px] absolute top-[20.5px] flex gap-[15px]">
          <ul className="font-Montserrat font-semibold text-[14px] text-[#737373] gap-[15px] leading-[24px] flex justify-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>
        </div>

        <div className="w-[324px] h-[54px] absolute top-[2px] left-[832px] flex justify-between items-center">
          <div className="w-[166px] h-[54px] p-[15px] flex items-center gap-[5px]">
            <div className="w-[12px] h-[12px] mt-[6px]">
              <Image src="/images/user.png" alt="user" width={12} height={12} />
            </div>
            <span className="w-[119px] h-[24px] font-Montserrat font-semibold text-[14px] leading-[24px] text-[#23A6F0]">
              Login / Register
            </span>
          </div>

          <ul className="flex gap-[15px] items-center">
            <li>
              <Image src="/images/search.png" alt="search" width={16} height={16} />
            </li>
            <li>
              <Image src="/images/cart.png" alt="cart" width={16} height={16} />
            </li>
            <li>
              <Image src="/images/mailheart.png" alt="mailheart" width={16} height={16} />
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:hidden w-full flex items-center justify-between p-4">
        <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px]">Bandage</h3>
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black"></div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4 z-50`}
      >
        <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>
        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
}
