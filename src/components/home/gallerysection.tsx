import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="w-full mx-auto pt-14 ">
      <div className="flex flex-col justify-center w-full gap-4">
        <div className="grid grid-cols-10 grid-rows-2 gap-3 p-2 h-80">
          <div className="col-span-3 row-span-2  relative shadow-md rounded-xl">
            <Image
              src="/images/gallery/ag2.png"
              alt="Ring"
              fill
              className="object-cover  rounded-xl"
            />
          </div>
          <div className="col-span-5 row-span-2 relative ">
            <div className="grid grid-cols-5 grid-rows-2 gap-2 h-full ">
            <h1 className="text-4xl font-bold font-serif text-center row-start-1 col-span-5">Gallery</h1>
              <div className="col-span-2 row-span-1 row-start-2 relative shadow-md rounded-xl">
                <Image
                  src="/images/gallery/g3.jpg"
                  alt="Necklace 1"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="col-span-3 row-span-1 row-start-2 relative shadow-md rounded-xl">
                <Image
                  src="/images/gallery/g6.jpg"
                  alt="Necklace 2"
                  fill
                  className=" object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-2 relative shadow-md rounded-xl">
            <Image
              src="/images/gallery/g1.jpg"
              alt="Earrings"
              fill
              className="object-cover object-bottom rounded-xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-10 grid-rows-1 gap-3 p-2 h-80">
          <div className="col-span-2 row-span-1  relative shadow-md rounded-xl">
            <Image
              src="/images/gallery/g4.jpg"
              alt="Bracelet"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="col-span-6 row-span-1  relative shadow-md rounded-xl">
            <Image
              src="/images/gallery/g3.jpg"
              alt="Green Necklace"
              fill
              className="object-cover object-right rounded-xl"
            />
          </div>
          <div className="col-span-2 row-span-1  relative shadow-md rounded-xl">
            <Image
              src="/images/gallery/g7.jpg"
              alt="Hand Jewelry"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div> 
      </div>
    </section>
  );
}
