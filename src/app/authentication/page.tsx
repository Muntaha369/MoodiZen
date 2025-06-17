import { IconBrandAppleFilled, IconBrandGoogle, IconBrandGoogleFilled } from '@tabler/icons-react'
import { Account } from '../components/account'

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

const Tab1 = () => (
  <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl p-3 pb-4 ">
    <div>
      <h1 className="font-font text-lg text-white sm:text-black">Sign in to your account</h1>
    </div>
    <div className="w-full">
      <label htmlFor="username" className="text-sm text-white sm:text-black">
        Username
      </label>
      <input
        name="username"
        placeholder="Badri"
        type="text"
        className="mt-1 h-10 w-full rounded-md border px-1 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-neutral-800"
      />
    </div>
    <div className="w-full">
      <label htmlFor="password" className="text-sm text-white sm:text-black">
        Password
      </label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="mt-1 h-10 w-full rounded-md border px-1 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-neutral-800 "
      />
    </div>
    <div className="mt-2.5 w-full">
      <button className="h-10 w-full rounded-md bg-neutral-900 font-medium text-white ">
        Submit
      </button>
    </div>

    <div className="relative mt-6 w-full">
      <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-transperent sm:bg-gray-100 px-2 text-neutral-400  ">
        Or
      </div>
      <div className="border-b border-neutral-300 hidden sm:visible"></div>
    </div>
    <div className="mt-6 flex w-full flex-col gap-4">
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white ">
        <IconBrandGoogleFilled /> <div>Continue with Google</div>
      </button>
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white ">
        <IconBrandAppleFilled /> <div>Continue with Apple</div>
      </button>
    </div>
  </div>
)

const Tab2 = () => (
  <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl p-3 pb-4">
    <div>
      <h1 className="font-font text-lg text-white sm:text-black">Create an account</h1>
    </div>
    <div className="w-full">
      <label htmlFor="username" className="text-sm text-white sm:text-black">
        Username
      </label>
      <input
        name="username"
        placeholder="Badri"
        type="text"
        className="mt-1 h-10 w-full rounded-md border px-1 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-neutral-800 hover:cursor-pointer"
      />
    </div>
    <div className="w-full">
      <label htmlFor="password" className="text-sm text-white sm:text-black">
        Password
      </label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="mt-1 h-10 w-full rounded-md border px-1 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-neutral-800 hover:cursor-pointer"
      />
    </div>
    <div className="mt-2.5 w-full">
      <button className="h-10 w-full rounded-md bg-neutral-900 font-medium text-white hover:cursor-pointer">
        Submit
      </button>
    </div>

    <div className="relative mt-6 w-full">
      <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-transparent sm:bg-gray-100 px-2 text-neutral-400 ">
        Or
      </div>
      <div className="border-b border-neutral-300 hidden sm:visible"></div>
    </div>
    <div className="mt-6 flex w-full flex-col gap-4">
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white hover:cursor-pointer">
        <IconBrandGoogleFilled /> <div>Continue with Google</div>
      </button>
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white hover:cursor-pointer">
        <IconBrandAppleFilled /> <div>Continue with Apple</div>
      </button>
    </div>
  </div>
)

export default Page