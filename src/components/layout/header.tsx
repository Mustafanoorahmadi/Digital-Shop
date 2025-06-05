"use client";

import Link from "next/link";
import React from "react";
import CartDropdown from "../cart";
import { HeaderSearch } from "../provider/HeaderSearch";
import { Gem, User, LayoutGrid } from "lucide-react";

const categories = [
  { name: "Rings", href: "/shop?category=rings" },
  { name: "Earrings", href: "/shop?category=earrings" },
  { name: "Necklace", href: "/shop?category=necklace" },
  { name: "Chain", href: "/shop?category=chain" },
  { name: "Bangles", href: "/shop?category=bangles" },
];

function Header() {
  return (

    <>
      {/* لایه بالایی */}
      <div className="w-full bg-white shadow-md top-0">
          <div className="w-full flex items-center justify-between py-3 px-20">
          {/* لوگو و برند */}
          <div className="flex items-center gap-2">
            <Gem className="w-7 h-7 text-green-900" />
            <Link href="/" className="font-bold text-2xl text-green-900">
              Digital Shop
            </Link>
          </div>
          {/* جستجو */}
          <div className="flex-1 flex justify-center mx-8 max-w-xl">
            <HeaderSearch />
          </div>
          {/* آیکون‌ها */}
          <div className="flex items-center gap-4">
            <Link
              href="/account"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <User className="w-6 h-6 text-green-900" />
            </Link>
            <CartDropdown />
          </div>
          </div>
        {/* لایه پایینی: نوار منو و دسته‌بندی */}
        <div className="w-full h-16 bg-green-900 text-white top-[70px] left-0 border-green-800 flex items-center">
        <div className="w-full mx-auto flex justify-between items-center h-full px-20">
          {/* دسته‌بندی‌ها */}
          <div className="flex gap-5 items-center h-full">
            <div className="flex w-80 h-full bg-green-950 gap-4 items-center px-4 rounded-lg">
              <LayoutGrid className="w-6 h-6 text-green-200" />
              <span className="font-bold text-lg">Categories</span>
            </div>
            {/* منوی اصلی */}
            <nav className="flex gap-10 text-white font-medium text-base">
              <Link href="/" className="hover:text-green-200 transition">
                Home
              </Link>
              <Link href="/shop" className="hover:text-green-200 transition">
                Shop
              </Link>
              <Link href="/blog" className="hover:text-green-200 transition">
                Blog
              </Link>
              <Link href="/about" className="hover:text-green-200 transition">
                About Us
              </Link>
            </nav>
          </div>
          <div>
            <Link href="/contact" className="hover:text-green-200 transition">
              Contact Us
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Header;
