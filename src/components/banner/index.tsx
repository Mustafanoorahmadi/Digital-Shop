import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from "@/components/ui";
import Image from "next/image";


import IMG1 from "./image/5.jpg"
import IMG2 from "./image/7.jpg"
import IMG3 from "./image/8.jpg"
import IMG4 from "./image/5.jpg"

function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[IMG1 , IMG2 , IMG3 , IMG4].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square h-[400px] w-full flex items-center justify-center p-6">
                  <Image alt="banner" src={image} fill className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
