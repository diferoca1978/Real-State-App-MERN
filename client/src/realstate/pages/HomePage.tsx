import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-amber-50">
        {/* Top Section */}

        <div className="relative h-screen bg-customPattern bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-black/40 flex ">
            <div className="text-left text-white p-8">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Agents,
                <br />
                Manage Rentals or Sales
              </h1>
              <p className="mt-4 text-lg">
                (Name) can help you easily find a home or apartment that you'll
                love.
                <br />
                We have a wide range of properties for you to choose.
              </p>
              <p className="transition ease-in-out delay-100 font-semibold text-secondary mt-5 text-sm sm:text-lg hover:translate-x-3  hover:text-secondary-foreground">
                <NavLink to="/search">Let's start now...</NavLink>
              </p>
            </div>
          </div>
        </div>

        {/* Swipper */}
        <div className="py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Additional Content
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here you can add more content below the image section. This content
            will appear after the centered image and text.
          </p>
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
