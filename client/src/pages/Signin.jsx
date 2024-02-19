import React from 'react';
import { Button } from '../components/ui/button';
import UserAuthForm from '../components/auth/UserAuthForm';

const Signin = () => {

  return (
    <>
      <div className='hidden'>
        <img alt="loginBG" width={1280} height={843} className='object-contain' />
      </div>

      <div className='container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='flex justify-center items-center absolute right-4 top-4 md:right-8 md:top-8'>
          <span>New User?</span>
          <a href="/signup">
            <Button variant="ghost">Signup</Button>
            </a>
        </div>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex'>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('/images/login-bg.jpg')`}}/>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
           <a href="/" > Adventure Sports and Equipements</a>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2 bg-zinc-700/70 rounded-lg p-2">
              <p className="text-lg ">
                &ldquo;A place to get excellent gear for camping, trekking, hiking and other adventure sports.&rdquo;
              </p>
                <span className='text-sm'>RUGGED Team</span> 
              <footer className="flex flex-col">
                <div className='flex gap-2'>
                <a href="https://github.com/PoorvKumar/Rugged2.0" className='text-sm underline underline-offset-2'>Github</a>
                </div>
                </footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
            <div className='flex flex-col space-y-2 text-center'>
            <h1 className="text-2xl font-semibold tracking-tight">
                Enter your Credentials
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to signin
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
      </div>
    </>
  )
}

export default Signin;