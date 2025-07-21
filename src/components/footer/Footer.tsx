import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  CreditCard,
  Gem,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-1">
      <div className="relative w-full h-[250px] md:h-[300px] lg:h-[430px]">
        {/* Background image */}
        <Image
          alt="background"
          src="/images/gallery/g3.jpg"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-full  mx-auto text-center px-4 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-white drop-shadow">
              Stay Informed with Our
            </h2>
            <h1 className="text-7xl font-serif py-5 md:text-6xl  text-white drop-shadow">
              Latest News and Updates!
            </h1>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-3 w-full sm:w-2/3 rounded-full border border-white/40 bg-white/90 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="flex flex-row justify-between w-full h-[250px] text-xl p-4 bg-white pt-10 px-10  ">
        {/* Logo & Contact */}
        <div className="flex flex-col items-start gap-6 ml-8">
          <h1 className="flex items-center gap-2 text-2xl font-serif font-semibold text-green-900">
            <Gem className="w-6 h-6 text-green-900" />
            LuxeLoom
          </h1>
          <div className="flex flex-col items-start gap-3">
            <p className="flex items-center gap-2 text-xl ">
              <Mail className="w-6 h-6 text-green-900" />
              oripostudio@gmail.com
            </p>
            <p className="flex items-center gap-2 text-xl ">
              <Phone className="w-6 h-6 text-green-900" />
              +8801701253995
            </p>
          </div>
        </div>

        <div className="basis-2/3 grid md:grid-cols-4 justify-items-center gap-8  ">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className=" space-y-2 text-sm text-gray-600">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Gold Jewelry</li>
              <li>Silver Jewelry</li>
              <li>Antique Jewelry</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Community hub</li>
              <li>Invite a Friend</li>
              <li>News & Blog</li>
              <li>Affiliates</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Help & Support</li>
              <li>Contact</li>
              <li>Trust & Safety</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-between items-center bg-green-900 text-white text-sm text-center p-4">
        <h2>© 2024 LuxeLoom. All rights reserved.</h2>
        <div className="flex items-center gap-4 text-white">
          <Facebook size={20} />
          <Twitter size={20} />
          <Instagram size={20} />
          <Linkedin size={20} />
          <Youtube size={20} />
          <div className="flex items-center text-sm text-white gap-1">
            <Globe size={16} />
            ENGLISH
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
