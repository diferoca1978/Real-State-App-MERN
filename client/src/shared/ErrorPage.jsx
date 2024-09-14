import { HomeIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const ErrorPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-6 py-12">
        <div className="border border-primary rounded-lg shadow-2xl p-5 bg-secondary text-center space-y-5">
          <h1 className="font-semibold text-3xl my-5">Error</h1>
          <img
            src="https://res.cloudinary.com/carofedi/image/upload/v1726235812/real_estate_img/Users_Images/404_irgnd8.png"
            alt="Error"
          />
          <h2 className="text-2xl font-semibold italic">
            Upss an unexpected error occurred.
          </h2>
          <Button>
            <HomeIcon size={28} className="mr-2" />
            <NavLink to="/">Go to home Page</NavLink>
          </Button>
        </div>
      </div>
    </>
  );
};
