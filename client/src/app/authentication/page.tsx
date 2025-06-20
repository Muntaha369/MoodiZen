"use client"

import { IconBrandAppleFilled, IconBrandGoogle, IconBrandGoogleFilled } from '@tabler/icons-react'
import { Account } from '../components/account'
import { postData, verifyData } from '../components/Auth'
import React,{useState} from 'react'
import { toast } from 'react-toastify';

const Page = () => {
  // you can grab url path from next/headers package in server component and insert defaultTab value based on that (if its /sign-in - 0, if it's /sign-up then 1, you got what I mean)
  return (
    <div className="flex h-screen bg-gray-100 w-full flex-row items-center justify-between">
      <div className=' z-20 bg-black/60 sm:bg-transparent h-full w-full sm:w-[50%] flex justify-center items-center'>
      <Account firstTab={<Tab1 />} secondTab={<Tab2 />} defaultTab={0} />
    </div>

  <div className='w-full sm:w-[50%]  h-full sm:flex items-center justify-center flex-col absolute right-0'>
    <div className='hidden sm:z-10 h-full w-full bg-black/40 sm:flex justify-center items-center flex-col px-6 py-10 space-y-6'>
      <h1 className="text-5xl w-full text-transparent text-center bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-white">
        Moodizen
      </h1>
      
      <p className='text-3xl font-semibold w-full text-center font-mono text-white'>
        Your Personal Therapy <span className='text-blue-300 underline'>Buddy</span>
      </p>

      {/* Add Benefits */}
      <ul className="text-white text-lg font-sans font-light  text-center space-y-2">
        <li>🌤 Track your mood effortlessly</li>
        <li>🎯 Personalized mental health exercises</li>
        <li>🧠 Learn emotional resilience</li>
        <li>📝 Reflect daily with guided journaling</li>
      </ul>

      {/* Add CTA Button */}
      <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-300/75 to-white text-transparent w-full transition rounded bg-clip-text text-3xl font-semibold ">
      Let's Get Started
      </button>

      {/* Optionally: Add a quote or motivation */}
      <p className="mt-8 text-sm italic text-gray-300 text-center max-w-md">
        “The greatest weapon against stress is our ability to choose one thought over another.” – William James
      </p>
    </div>

    <img
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXJsdnVzd2w4djZzejZmN2V1MXV1MWxkeTd5NWpsZ3FlaGwweXhsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwu8IqEYFZYA8Q8/giphy.gif"
      className='h-full absolute z-10 sm:z-0 object-cover w-full'
      alt=""
    />

    </div>
  </div>
  )
}

const Tab1 = () =>{ 
  
  const [email, setEmail] = useState("")
      const [pass, setPass] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !pass.trim()) {
      return toast.error("Please enter both email and password.");
    }

    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return toast.error("Please enter a valid email.");
    }

    if (pass.length < 4 || pass.length > 10) {
      return toast.error("Password must be between 4 and 10 characters.");
    }

    verifyData(email, pass);
  };
  
  return(
  <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl p-3 pb-4 ">
    <div>
      <h1 className="font-font text-lg text-white sm:text-black">Sign in to your account</h1>
    </div>
  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
    <div className="w-full">
      <label htmlFor="username" className="text-sm text-white sm:text-black">
        Email
      </label>
      <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1 h-10 w-full rounded-md border px-2 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-neutral-100 sm:focus:ring-neutral-800 text-gray-100 sm:text-black"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="text-sm text-white sm:text-black">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="••••••••"
            className="mt-1 h-10 w-full rounded-md border px-2 placeholder-neutral-400 outline-none focus:ring-2  focus:ring-neutral-100 sm:focus:ring-neutral-800 text-gray-100 sm:text-black"
          />
    </div>
    <div className="mt-2.5 w-full">
      <button
          type="submit"
          className="h-10 w-full rounded-md bg-neutral-900 font-medium text-white hover:cursor-pointer"
        >
          Submit
        </button>
    </div>

    <div className="relative mt-6 w-full">
      <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-transparent px-2 text-neutral-400 sm:bg-gray-100">
        Or
      </div>
      <div className="border-b border-neutral-300 sm:block hidden"></div>
    </div>

    <div className="mt-6 flex w-full flex-col gap-4">
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white hover:cursor-pointer">
        <IconBrandGoogleFilled /> <div>Continue with Google</div>
      </button>
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white hover:cursor-pointer">
        <IconBrandAppleFilled /> <div>Continue with Apple</div>
      </button>
    </div>
    </form>
  </div>
)
}

const Tab2 = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email.trim() || !pass.trim()) {
    return toast.error("Please enter both email and password.");
  }

  if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return toast.error("Please enter a valid email.");
  }

  if (pass.length < 4 || pass.length > 10) {
    return toast.error("Password must be between 4 and 10 characters.");
  }

  postData(email, pass);
};

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl p-3 pb-4">
            <h1 className="font-font text-lg text-white sm:text-black">Create an account</h1>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="w-full">
          <label htmlFor="email" className="text-sm text-white sm:text-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1 h-10 w-full rounded-md border px-2 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-neutral-100 sm:focus:ring-neutral-800 text-gray-100 sm:text-black"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="text-sm text-white sm:text-black">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="••••••••"
            className="mt-1 h-10 w-full rounded-md border px-2 placeholder-neutral-400 outline-none focus:ring-2  focus:ring-neutral-100 sm:focus:ring-neutral-800 text-gray-100 sm:text-black"
          />
        </div>

        <button
          type="submit"
          className="h-10 w-full rounded-md bg-neutral-900 font-medium mt-2.5 text-white hover:cursor-pointer"
        >
          Submit
        </button>

        <div className="relative mt-6 w-full">
          <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-transparent px-2 text-neutral-400 sm:bg-gray-100">
            Or
          </div>
          <div className="border-b border-neutral-300 sm:block hidden"></div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <button
            type="button"
            className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white"
          >
            <IconBrandGoogleFilled />
            <span>Continue with Google</span>
          </button>
          <button
            type="button"
            className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white"
          >
            <IconBrandAppleFilled />
            <span>Continue with Apple</span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default Page