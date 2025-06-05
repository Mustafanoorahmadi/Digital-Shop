import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square">
      <Image
        src={"/images/MainBanner.jpg"}
        alt="Luxury Jewelry"
        width={1200}
        height={800}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start p-6 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
          Where Luxury <br /> Meets Affordability
        </h2>
        <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}
