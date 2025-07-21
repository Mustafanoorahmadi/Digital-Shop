import Image from "next/image";
import lilartsy from "../../../public/images/lilartsy.jpg";
import Natalie from "../../../public/images/natalie.jpg";

export default function FeaturedCollection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-6 my-10 md:p-10 bg-slate-100">
      {/* Image 1 */}
      <div className="w-full h-64 lg:h-auto overflow-hidden rounded-xl">
        <Image
          src={lilartsy}
          alt="Collection"
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full h-20 lg:h-auto overflow-hidden rounded-xl">
        <Image
          src={Natalie}
          alt="Collection"
          className="w-full h-2/3 object-bottom rounded-xl transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center gap-5 p-4">
        <h1 className="font-extrabold text-4xl md:text-5xl text-gray-900">
          Collection inspired by LuxeLoom
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          These elegant adornments are worn around the neck and come in a
          variety of lengths, styles, and materials. Whether delicate or bold,
          they add a touch of personality and sophistication to any outfit,
          making them timeless accessories for every occasion.
        </p>
        <button className="self-start px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-sm font-medium rounded-full transition-colors">
          Explore More
        </button>
      </div>
    </section>
  );
}
