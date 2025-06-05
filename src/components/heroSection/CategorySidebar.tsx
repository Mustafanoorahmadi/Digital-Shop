import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

type Category = {
  name: string;
  href: string;
  icon: string;
};

const categories: Category[] = [
  { name: "Rings", href: "/shop?category=rings", icon: "/icons/ring2.svg" },
  { name: "Necklace", href: "/shop?category=necklaces", icon: "/icons/necklace.svg" },
  { name: "Earring", href: "/shop?category=earrings", icon: "/icons/earrings.svg" },
  { name: "Bracelet", href: "/shop?category=bracelets", icon: "/icons/bracelet.svg" },
  { name: "Brooche", href: "/shop?category=brooches", icon: "/icons/brooche.svg" },
  { name: "PolkiJewellery", href: "/shop?category=polkijewellery", icon: "/icons/Polki.svg" },
  { name: "Pearls", href: "/shop?category=pearls", icon: "/icons/pearl.svg" },
  { name: "Platinum", href: "/shop?category=platinum", icon: "/icons/Platinum.svg" },
  { name: "NavratnaJewellery", href: "/shop?category=navratnajewellery", icon: "/icons/navratna.svg" },
  { name: "Chain", href: "/shop?category=chain", icon: "/icons/Chain.svg" },
];

export default function CategorySidebar() {
  return (
    <div className="bg-white rounded-lg shadow p-4 h-full w-[420px] flex flex-col">
      <ul className="flex flex-col flex-grow">
        {categories.map((category) => (
          <li key={category.name} className="flex-1">
            <Link
              href={category.href}
              className="flex items-center justify-between text-gray-700 hover:text-black transition px-2 py-2 rounded cursor-pointer group h-full"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={30}
                  height={30}
                  unoptimized
                />
                <span className="font-medium">{category.name}</span>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-gray-500 group-hover:text-black transition" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
