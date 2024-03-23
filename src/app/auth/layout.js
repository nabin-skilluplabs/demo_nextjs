'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'


export default function AuthLayout({children}) {
    const router = useRouter();
    const path = usePathname();
  return (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {
                (path === '/auth/login') && (
                    <>Welcome back! Log in to your account.</>
                )
            }
            {
                (path === '/auth/register') && (
                    <>Register for your new account!</>
                )
            }
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {children}
          </div>

         
         {
             <p className="mt-10 text-center text-sm text-gray-500">
             
             {
                (path === '/auth/login') && (
                    <> New user? {' '}
                    <a href="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Register
                    </a>
                    </>
                )
            }
            {
                (path === '/auth/register') && (
                    <>  Already have account?  {' '}
                        <a href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Log in
                        </a>
                    </>
                )
            }
             
           </p>
         }
        </div>
      </div>
  )
}