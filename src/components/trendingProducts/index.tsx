import Link from "next/link";
import ProductCard from "../cart/ProductCard";
import { ArrowBigRightDash } from "lucide-react";

const dummyProducts = [
  {
    image: "/images/Rings.jpg",
    category: "Rings",
    name: "Elegant Diamond Ring",
    price: 129.99,
  },
  {
    image: "/images/Necklace.jpg",
    category: "Necklace",
    name: "Golden Leaf Necklace",
    price: 89.0,
  },
  {
    image: "/images/Earrings.jpg",
    category: "Earrings",
    name: "Sapphire Drop Earrings",
    price: 99.5,
  },
  {
    image: "/images/FingerRing.jpg",
    category: "FingerRing",
    name: "Rose Gold Bracelet",
    price: 75.99,
  },
  {
    image: "/images/Bangles.jpg",
    category: "Bangles",
    name: "Classic Pearl Set",
    price: 110,
  },
  {
    image: "/images/Chain.jpg",
    category: "Chain",
    name: "Silver Cufflinks",
    price: 45,
  },
    {
      
    image: "/images/rings-T1.jpg",
    category: "Rings",
    name: "Elegant Diamond Ring",
    price: 129.99,
  },
  {
    image: "/images/rings-T2.jpg",
    category: "Rings",
    name: "Golden Leaf Necklace",
    price: 89.0,
  },
  {
    image: "/images/Earrings-T1.jpg",
    category: "Earrings",
    name: "Sapphire Drop Earrings",
    price: 99.5,
  },
  {
    image: "/images/Earrings-T2.jpg",
    category: "FingerRing",
    name: "Rose Gold Bracelet",
    price: 75.99,
  },
  {
    image: "/images/Earrings-T3.jpg",
    category: "Bangles",
    name: "Classic Pearl Set",
    price: 110,
  },
  {
    image: "/images/Earrings-T4.jpg",
    category: "Chain",
    name: "Silver Cufflinks",
    price: 45,
  },
];

export default function TrendingProducts() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-6">
        <h1 className="font-bold text-2xl">Trending Products</h1>
        <Link href={""}>
          <div className="flex items-center gap-2">
            <span className="text-base ">View All</span>
            <ArrowBigRightDash className="w-5 h-5 hover:text-black cursor-pointer transition" />
          </div>
        </Link>
      </div>
      <hr className="w-full size-2 py-2 " />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {dummyProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
}
