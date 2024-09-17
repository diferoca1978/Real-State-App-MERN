import { useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../../components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

import { z } from 'zod';
import { HouseIcon, LogOutIcon, Trash2 } from 'lucide-react';

import { Avatar, AvatarImage } from '../../components/ui/avatar';
import { useUiStore } from '../../hooks';
import { useRef, useState } from 'react';

const formSchema = z.object({
  image: z.string().optional(),
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(30, { message: 'Field must contain max 30 characters' }),
  email: z
    .string()
    .email({ message: 'Must be a valid Email' })
    .trim()
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(3, { message: 'Password must be at least 3 characters' }),
});

export const ProfilePage2 = () => {
  const { currentUser, startLogOut, startUpdateUser } = useUiStore();

  const [prevImg, setPrevImg] = useState(currentUser.image);

  const initialValues = {
    image: currentUser.image,
    name: currentUser.name,
    email: currentUser.email,
    password: currentUser.password,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  });

  const fileRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const tempImage = URL.createObjectURL(file);
      setPrevImg(tempImage);
    }
  };
  const onSubmit = (data) => {
    startUpdateUser(data);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-6 py-12 lg:px-8">
        <Card className="w-full max-w-xl text-center">
          <CardHeader className="space-y-6">
            <CardTitle>Profile </CardTitle>
            <CardDescription>Hello, {currentUser.name}</CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className="cursor-pointer mb-6"
                onClick={() => fileRef.current.click()}
              >
                <Avatar className="mx-auto w-24 h-24">
                  <AvatarImage src={prevImg} alt="Profile_img" />
                </Avatar>
              </div>

              <Input
                {...register('image')}
                type="file"
                ref={fileRef}
                className="hidden"
                onChange={handleImageChange}
              />

              <div className="space-y-2">
                <label htmlFor="name" className=" text-inherit font-semibold">
                  Name
                </label>
                <Input {...register('name')} type="text" />
                <p>{errors.name?.message}</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className=" text-inherit font-semibold">
                  Email
                </label>
                <Input {...register('email')} type="email" />
                <p>{errors.name?.message}</p>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className=" text-inherit font-semibold"
                >
                  Password
                </label>
                <Input {...register('password')} type="password" />
                <p>{errors.name?.message}</p>
              </div>

              <div className="space-y-4 mb-6">
                <Button type="submit" className="w-full ">
                  Save
                </Button>
                <Button type="button" className="w-full">
                  <NavLink to="#">Create a new property</NavLink>
                  <HouseIcon size={28} className="ml-2" />
                </Button>
              </div>
            </form>
            <div className="px-4 md:px-4 md:flex md:justify-between">
              <Button className="w-full md:w-auto mb-5 hover:text-destructive">
                <Trash2 size={28} className="mr-2" />
                <NavLink to="#">Delete account</NavLink>
              </Button>
              <Button
                onClick={startLogOut}
                className="w-full mb-5 md:w-auto hover:text-destructive"
              >
                <LogOutIcon size={28} className="mr-2" />
                <NavLink to="#">Logout</NavLink>
              </Button>
            </div>
            <div className="px-4 text-center">
              <Button className="w-full md:w-auto">
                <NavLink to="#">Show properties</NavLink>
                <HouseIcon size={28} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
