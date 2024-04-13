
'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/navigation';


import validationSchema from './validationSchema';
import { registerNewUser } from '@/app/auth/register/action';
import { useState } from "react";
import SuccessMessage from "@/components/successMessage";
import ErrorMessage from "@/components/errorMessage";


  
export default function Home() {
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { push } = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(validationSchema),
      });

      const onSubmit = async (data) => {
        // const response = await registerNewUser(data);
        // console.log(response);
        const {error, errorMessage} = await registerNewUser(data);
        console.log({error, errorMessage});
        if(error) {
          setErrorMessage(errorMessage);
        }
        else {
          push('/users');
        }
      }

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {
                message && (<SuccessMessage message={message} />)
            }
            {
                errorMessage && (<ErrorMessage message={errorMessage} />)
            }
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    {...register("fullName")}
                    id="fullName"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.fullName && (<><span className="block mt-2 text-red-500 text-sm">{errors.fullName.message}</span></>)}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.email && (<><span className="block mt-2 text-red-500 text-sm">{errors.email.message}</span></>)}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    {...register("password")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.password && (<><span className="block mt-2 text-red-500 text-sm">{errors.password.message}</span></>)}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.confirmPassword && (<><span className="block mt-2 text-red-500 text-sm">{errors.confirmPassword.message}</span></>)}
              </div>


              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>
    )
}