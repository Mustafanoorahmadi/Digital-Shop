import Image from "next/image";
import Link from "next/link";
import { ArrowBigRightDash, MoveRight } from "lucide-react";
import CollectionEarrings from "../../../public/images/Collection-Earrings.jpg";
import CollectionWoman from "../../../public/images/Collection-Necklace.jpg";

export default function AncientCollection() {
  const newProducts = [
    {
      name: "Rings",
      image: "/images/Collection-Earrings.jpg",
      date: "Face Masks Tips | March 2, 2025",
      title: "Which herbal mood enhancer is the best for you ",
      description:
        "Never ever think of giving up. Winners never quit and quitters never win.",
    },
    {
      name: "Necklace",
      image: "/images/Collection-Necklace.jpg",
      date: "Face Masks Tips | March 2, 2025",
      title: "Which herbal mood enhancer is the best for you ",
      description:
        "Never ever think of giving up. Winners never quit and quitters never win.",
    },
    {
      name: "Earring",
      image: "/images/lilartsy.jpg",
      date: "Face Masks Tips | March 2, 2025",
      title: "Which herbal mood enhancer is the best for you ",
      description:
        "Never ever think of giving up. Winners never quit and quitters never win.",
    },
  ];

  return (
    <>
      <section className="flex flex-col py-20 bg-white">
        {/* Header Section */}
        <div className="flex justify-between items-center py-6">
          <h1 className="font-bold text-2xl">Dazzle In Every Moment</h1>
          <Link href="#">
            <div className="flex items-center gap-2">
              <span className="text-base">Shop Now</span>
              <ArrowBigRightDash className="w-6 h-6 hover:text-black transition" />
            </div>
          </Link>
        </div>
        <hr className="w-full size-2 py-2 " />

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-[500px]">
          {/* Left Card */}
          <div className="col-span-3 flex flex-col md:flex-row bg-gray-100 rounded-2xl overflow-hidden">
            <div className="w-full md:w-1/2 relative h-full m-4 md:h-auto">
              <Image
                src={CollectionWoman}
                alt="Ancient jewelry collection"
                fill
                className="object-cover object-bottom rounded-lg"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-3">
                Ancient jewelry collection
              </h2>
              <p className="text-gray-600 mb-6">
                beautiful long earrings with opal and carnelian earrings are
                light in weight.
              </p>
              <Link href="#">
                <button className="flex justify-center gap-3 px-4 py-2 text-sm bg-green-800 text-white rounded-full w-max hover:bg-black transition">
                  Explore more
                  <MoveRight className="w-5 h-5 cursor-pointer transition" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-span-2 bg-gray-100 rounded-2xl overflow-hidden flex flex-col">
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-lg font-semibold">
                Ancient jewelry collection
              </h2>
              <p className="text-gray-600 text-sm">
                beautiful long earrings with opal and carnelian earrings are
                light in weight.
              </p>
              <Link href="#">
                <button className="flex justify-center gap-3 px-4 py-2 text-sm bg-green-800 text-white rounded-full w-max hover:bg-black transition">
                  Shop Now
                  <MoveRight className="w-5 h-5 cursor-pointer transition" />
                </button>
              </Link>
            </div>
            <div className="relative h-2/3 m-4">
              <Image
                src={CollectionEarrings}
                alt="Woman with earring"
                fill
                className="w-full object-cover object-left rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-5 justify-center items-center ">
        {/* Header Section */}
        <div className="flex flex-col w-full gap-5">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Our News & Updates</h1>
            <Link href="#">
              <div className="flex items-center gap-2">
                <span className="text-base">Shop Now</span>
                <ArrowBigRightDash className="w-6 h-6 hover:text-black transition" />
              </div>
            </Link>
          </div>
          <hr className="w-full size-2 py-4 " />
        </div>
        {/* Main Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
          {newProducts.map((item) => (
            <div className="flex flex-col h-[600px] rounded-lg p-4 bg-slate-100">
              <div className="h-2/3 bg-slate-500 rounded-lg relative">
                <Image
                  src={item.image}
                  alt="Ancient jewelry collection"
                  fill
                  className="object-cover object-left-bottom rounded-lg"
                />
              </div>
              <div className="p-4 flex flex-col gap-6 justify-center">
                <span className=" text-gray-600 font-normal">
                 {item.date}
                </span>
                <h1 className=" font-bold text-3xl">
                  {item.title}
                </h1>
                <p className="">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
