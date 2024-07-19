import { NavLink } from 'react-router-dom';
import { Swiper } from '../components/Carousel';

export const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-amber-50">
        {/* Top Section */}

        <div className="relative h-screen bg-customPattern bg-cover bg-bottom bg-fixed">
          <div className="absolute inset-0 bg-black/20 flex ">
            <div className="text-left p-3 space-y-5 md:p-12">
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Agents,
                <br />
                Manage Rentals or Sales
              </h1>
              <p className="mt-4 text-md">
                (Name) can help you easily find a home or apartment that you'll
                love.
                <br />
                We have a wide range of properties for you to choose.
              </p>
              <p className="transition ease-in-out delay-100 font-semibold mt-5 text-md sm:text-lg hover:translate-x-3  hover:text-secondary-foreground">
                <NavLink to="/search">Let's start now...</NavLink>
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="w-full py-12 px-4 bg-amber-50">
          <h1 className="text-2xl font-extrabold tracking-tight mb-10 lg:text-5xl">
            How we can help you?
          </h1>
          <div className="block space-y-5 md:flex md:justify-around md:space-y-0 md:gap-4">
            <div className="relative shadow-lg rounded-lg">
              <img
                className="rounded-lg brightness-75"
                src="../../buy-home.jpg"
                alt="Buy"
              />
              <div className="absolute left-2 bottom-2 text-secondary md:left-4 md:bottom-8">
                <h1 className="text-lg font-bold md:text-4xl">For Buy</h1>
              </div>
              <div className="absolute right-4 bottom-2 text-secondary text-md md:text-lg">
                <p className="hover:underline ">
                  <NavLink to="#">Read more...</NavLink>
                </p>
              </div>
            </div>
            <div className="relative shadow-lg rounded-lg">
              <img
                className="transition-all ease-out duration-500 rounded-lg brightness-50 hover:brightness-75"
                src="../../rent-home.jpg"
                alt="Buy"
              />
              <div className="absolute left-2 bottom-2 text-secondary md:left-4 md:bottom-8">
                <h1 className="text-lg font-bold md:text-4xl">For Rent</h1>
              </div>
              <div className="absolute right-4 bottom-2 text-secondary text-lg">
                <p className="hover:underline ">
                  <NavLink to="#">Read more...</NavLink>
                </p>
              </div>
            </div>
            <div className="relative shadow-lg rounded-lg">
              <img
                className="rounded-lg brightness-75"
                src="../../sales.jpg"
                alt="Buy"
              />
              <div className="absolute left-2 bottom-2 text-secondary md:left-4 md:bottom-8">
                <h1 className="text-lg font-bold md:text-4xl">Manage</h1>
              </div>
              <div className="absolute right-4 bottom-2 text-secondary text-lg">
                <p className="hover:underline ">
                  <NavLink to="#">Read more...</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel */}
        <div className="container md:justify-center ">
          <Swiper />
        </div>
        {/* Listing results for offer, sale, rent */}
        <div className="py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Additional Content
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here you can add more content below the image section. This content
            will appear after the centered image and text.
          </p>
        </div>
      </div>
    </>
  );
};
