import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormsLayout } from '../../layout/Formslayout';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { GoogleLogo } from '../../shared/Logo';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const formSchema = z.object({
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

export const RegisterPage = () => {
  const form = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <>
      <FormsLayout title="Sing Up">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-4"
          >
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
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...field}
                      />
                      <Button
                        variant="ghost"
                        type="button"
                        size="icon"
                        onClick={tooglePassword}
                        className="absolute right-0 top-0 m-2.5 h-4 w-4 text-muted-foreground"
                      >
                        {!showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Sing Up
            </Button>

            <div className="flex items-center justify-center space-x-2 my-2">
              <span className="h-px w-16 bg-black"></span>
              <span className="text-inherit font-normal">or</span>
              <span className="h-px w-16 bg-black"></span>
            </div>

            <Button
              type="button"
              className="w-full bg-white text-primary-foreground hover:bg-neutral-50"
            >
              <GoogleLogo /> <span className="ml-2">Sing In with Google</span>
            </Button>

            <p className="transition ease-in-out delay-100 hover:translate-x-3 hover:text-muted-foreground hover:scale-105 duration-150">
              <NavLink to="/auth/login">
                Do you have an account? Sing In!!
              </NavLink>
            </p>
          </form>
        </Form>
      </FormsLayout>
    </>
  );
};
