import { CircleCheckBig } from 'lucide-react';

export const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen bg-amber-50">
        <section className="relative bg-aboutus bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="text-secondary pb-20 pr-8">
                <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Maecenas faucibus mollis interdum vestibulum id ligula porta
                  felis Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="bg-primary p-6 rounded-t-lg">
                <ul className="space-y-4 text-secondary">
                  <li className="flex items-center">
                    <CircleCheckBig className="w-6 h-6 mr-2 text-secondary" />
                    High Quality, Ethically Sourced Materials
                  </li>
                  <li className="flex items-center">
                    <CircleCheckBig className="w-6 h-6 mr-2 text-secondary" />
                    Your Satisfaction is Guaranteed
                  </li>
                  <li className="flex items-center">
                    <CircleCheckBig className="w-6 h-6 mr-2 text-secondary" />
                    Honest Prices
                  </li>
                  <li className="flex items-center">
                    <CircleCheckBig className="w-6 h-6 mr-2 text-secondary" />
                    35 years Of Experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-amber-50 px-20">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="py-7 px-6 bg-secondary shadow-lg rounded-b-md col-start-2 col-span-2 md:px-12 md:col-start-1 md:col-span-2 mb-10">
              <h1 className="uppercase text-base font-bold mb-4">Our Story</h1>
              <p className="capitalize text-lg font-extrabold">
                We’ve Been rent, sale and manage properties Since 1995
              </p>
            </div>
          </div>
        </section>
        <section className="px-12 py-4 md:px-24">
          <div className="grid grid-cols-1 py-5 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 gap-1">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                placeat illo ipsam inventore, harum eveniet est veniam sint,
                magnam ducimus praesentium eos possimus blanditiis dolor facere
                consectetur suscipit molestias animi!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                placeat illo ipsam inventore, harum eveniet est veniam sint,
                magnam ducimus praesentium eos possimus blanditiis dolor facere
                consectetur suscipit molestias animi!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-bold">Our mission</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt maxime dolores aspernatur, non itaque eius atque qui
                  quis, nobis ducimus sed illo cum voluptatem neque
                  necessitatibus facilis ipsa hic nesciunt?
                </p>
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-bold">Our vision</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt maxime dolores aspernatur, non itaque eius atque qui
                  quis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
