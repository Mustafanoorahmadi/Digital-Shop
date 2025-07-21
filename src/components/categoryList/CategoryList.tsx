import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Rings", image: "/images/Rings.jpg", href: "/shop?category=rings" },
  { name: "Necklace", image: "/images/Necklace.jpg", href: "/shop?category=necklaces" },
  { name: "Earring", image: "/images/Earrings.jpg", href: "/shop?category=earrings" },
  { name: "FingerRing", image: "/images/FingerRing.jpg", href: "/shop?category=bracelets" },
  { name: "Bangles", image: "/images/Bangles.jpg", href: "/shop?category=brooches" },
  { name: "Chain", image: "/images/Chain.jpg", href: "/shop?category=chain" },
];

export default function CategoryList() {
  return (
    <section className="py-10 ">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="flex flex-col items-center text-sm text-gray-700 hover:text-black transition group"
          >
            <div className="w-48 h-28 relative rounded-full overflow-hidden border border-gray-200 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="mt-2 text-center text-xl">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
