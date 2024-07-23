import { NavLink } from 'react-router-dom';
import { Swiper } from '../components/Carousel';

export const HomePage = () => {
  return (
    <>
      <div className="min-h-screen pb-10 bg-amber-50">
        {/* Top Section */}
        <section className="relative h-screen mb-20 bg-customPattern bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-black/20 flex">
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
        </section>

        {/* Help Section */}
        <section className="grid gap-3 px-3 mb-20 md:gap-8 md:px-32 bg-amber-50">
          <div className="text-3xl font-extrabold md:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-secondary-foreground to-muted">
              How we can help you?
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative shadow-lg rounded-lg border border-primary">
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
            <div className="relative shadow-lg rounded-lg border border-primary">
              <img
                className=" rounded-lg brightness-75"
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
            <div className="relative shadow-lg rounded-lg border border-primary">
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
        </section>

        {/* Carousel */}
        <section className="grid gap-3 px-3 mb-20 md:gap-8 md:px-32 bg-amber-50">
          <div className="text-3xl font-extrabold md:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-secondary-foreground to-muted">
              Last properties plubished
            </span>
          </div>
          <div className="container p-3">
            <Swiper />
          </div>
        </section>

        {/* Listing results for rent */}
        <section className="grid gap-3 px-3 mb-20  md:gap-8 md:px-32">
          <div className="text-3xl font-extrabold md:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-secondary-foreground to-muted">
              Recent places for rent
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded-lg overflow-hidden shadow-xl border border-primary">
              <img src="../../buy-home.jpg" alt="buy-home" className="w-full" />
              <div className="px-6 py-4 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore nihil possimus facilis ex ullam eveniet eos debitis
                  earum ipsa.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl  border border-primary">
              <img src="../../buy-home.jpg" alt="buy-home" className="w-full" />
              <div className="px-6 py-4 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore nihil possimus facilis ex ullam eveniet eos debitis
                  earum ipsa.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl border border-primary">
              <img src="../../buy-home.jpg" alt="buy-home" className="w-full" />
              <div className="px-6 py-4 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore nihil possimus facilis ex ullam eveniet eos debitis
                  earum ipsa.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl border border-primary">
              <img src="../../buy-home.jpg" alt="buy-home" className="w-full" />
              <div className="px-6 py-4 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore nihil possimus facilis ex ullam eveniet eos debitis
                  earum ipsa.
                </p>
              </div>
            </div>
            <NavLink to="#" className="font-semibold hover:underline">
              Show more...
            </NavLink>
          </div>
        </section>

        {/* Listing results for sales */}
        <section className="grid gap-3 px-3 md:gap-8 md:px-32">
          <div className="text-3xl font-extrabold md:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-secondary-foreground to-muted">
              Recent places for sale
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded-lg overflow-hidden shadow-xl border border-primary">
              <img src="../../buy-home.jpg" alt="buy-home" className="w-full" />
              <div className="px-6 py-4 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore nihil possimus facilis ex ullam eveniet eos debitis
                  earum ipsa.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl  border border-primary">
              <img src="../../buy-home.jpg" alt="buy-home" className="w-full" />
              <div className="px-6 py-4 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore nihil possimus facilis ex ullam eveniet eos debitis
                  earum ipsa.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl border border-primary">
              <img src="../../buy-home.jpg" alt="buy-home" className="w-full" />
              <div className="px-6 py-4 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore nihil possimus facilis ex ullam eveniet eos debitis
                  earum ipsa.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl border border-primary">
              <img src="../../buy-home.jpg" alt="buy-home" className="w-full" />
              <div className="px-6 py-4 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore nihil possimus facilis ex ullam eveniet eos debitis
                  earum ipsa.
                </p>
              </div>
            </div>
            <NavLink to="#" className="font-semibold hover:underline">
              Show more...
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};
