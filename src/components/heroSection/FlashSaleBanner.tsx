import Image from "next/image";

export default function FlashSaleBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/5]">
      <Image
        src={"/images/FlashSaleBanner.jpg"}
        alt="Flash Sale"
        width={600}
        height={800}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-4 left-4 bg-white/80 text-black px-4 py-2 rounded-lg font-semibold shadow">
        Flash Sale
      </div>
    </div>
  );
}
