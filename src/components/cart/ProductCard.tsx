// components/ProductCard.tsx
import Image from "next/image";
import { ShoppingBag, ShoppingCart } from "lucide-react";

type ProductCardProps = {
  image: string;
  category: string;
  name: string;
  price: number;
};

export default function ProductCard({
  image,
  category,
  name,
  price,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border hover:shadow-lg cursor-pointer transition p-3 space-y-2 w-full">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden ">
        <Image src={image} alt={name} fill className="object-cover " />
      </div>
      <div className="text-xs text-gray-500">{category}</div>
      <div className="font-semibold text-sm">{name}</div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-green-700">${price.toFixed(2)}</span>
        <div className="flex items-center justify-center w-7 h-7 bg-green-800 rounded-full">
          <ShoppingBag className="w-4 h-4 text-white hover:text-black cursor-pointer transition" />
        </div>
      </div>
    </div>
  );
}
