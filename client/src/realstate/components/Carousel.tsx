//import { Card, CardContent } from '../../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel';

export const Swiper = () => {
  return (
    <>
      <div className="flex justify-center py-5">
        <h1>last offers</h1>
      </div>
      <Carousel className="w-full max-w-7xl">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <img
                  src="/../../../sales.jpg"
                  alt="Slide 1"
                  width={800}
                  height={400}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
                <div className="absolute bottom-6 left-6 z-10 text-white">
                  <h3 className="text-2xl font-bold">Explore the Outdoors</h3>
                  <p className="text-sm">{index + 1}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </>
  );
};
