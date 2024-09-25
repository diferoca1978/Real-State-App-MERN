'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { GoogleLogo } from '../../shared/Logo';
import { useUiStore } from '../../hooks';
import { toastError } from '../../helpers';
import { ToastContainer, Zoom } from 'react-toastify';

const initialValues = {
  email: '',
  password: '',
};

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Must be a valid Email' })
    .trim()
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(3, { message: 'Password must have at least 3 characters' }),
});

export const LoginPage = () => {
  const form = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  });

  const { startLogin } = useUiStore();
  const { errorMsg } = useUiStore();
  const { loading } = useUiStore();

  useEffect(() => {
    errorMsg ? toastError(errorMsg) : '';
  }, [errorMsg]);

  const [showPassword, SetShowPassword] = useState(false);

  const tooglePassword = () => {
    SetShowPassword(!showPassword);
  };
  const onSubmit = ({ email, password }) => {
    startLogin({ email, password });
  };

  return (
    <>
      <FormsLayout title="Sing In">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-4"
          >
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
              {loading ? 'Loading...' : 'Sing In'}
              <ToastContainer transition={Zoom} />
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

            <p className="transition ease-in-out delay-100 hover:translate-x-3 hover:text-muted-foreground hover:scale-105 duration-200">
              <NavLink to="/auth/register">
                Do not have an account? Sing Up !!
              </NavLink>
            </p>
          </form>
        </Form>
      </FormsLayout>
    </>
  );
};
