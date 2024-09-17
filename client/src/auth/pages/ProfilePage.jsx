import { useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../../components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
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

export const ProfilePage = () => {
  const { currentUser, startLogOut, startUpdateUser } = useUiStore();

  const [prevImg, setPrevImg] = useState(currentUser.image);

  const fileRef = useRef(null);

  const initialValues = {
    image: currentUser.image,
    name: currentUser.name,
    email: currentUser.email,
    password: currentUser.password,
  };

  const form = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  });

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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 p-4"
              >
                <div className="cursor-pointer">
                  <Avatar className="mx-auto w-24 h-24">
                    <AvatarImage src={prevImg} alt="Profile_img" />
                  </Avatar>
                </div>

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          placeholder="Chose an image"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email@prueba.com"
                          {...field}
                          value={initialValues.email}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Save
                </Button>
                <Button type="button" className="w-full">
                  <NavLink to="#">Create a new property</NavLink>
                </Button>
              </form>
            </Form>
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
