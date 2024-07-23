//import { Card, CardContent } from '../../components/ui/card';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
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
      <div className="block space-y-5 w-full py-2">
        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="relative h-96 w-full overflow-hidden rounded-lg">
                  <img
                    src="/../../../sales.jpg"
                    alt="Slide 1"
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
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 shadow-md transition-colors hover:bg-muted">
            <ChevronLeftIcon className="h-6 w-6 text-primary" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 shadow-md transition-colors hover:bg-muted">
            <ChevronRightIcon className="h-6 w-6 text-primary" />
          </CarouselNext>
        </Carousel>
      </div>
    </>
  );
};
