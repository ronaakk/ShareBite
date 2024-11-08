'use client';

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    
      <>
        <div className="container flex flex-col mx-auto">
        <div className="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
          {/* <div>

          </div> */}
          <div className="items-center justify-between hidden gap-12 text-black md:flex">
            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Product</a>
            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Features</a>
            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Pricing</a>
            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Company</a>
          </div>
          <div className="items-center hidden gap-8 md:flex">
            <button className="flex items-center text-sm font-normal text-gray-800 hover:text-gray-900 transition duration-300">Log In</button>
            <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
              Sign Up
            </button>
          </div>
          <button type="button" className="flex md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black"></path>
            </svg>
          </button>
          <div className="absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-2xl group-[.open]:max-h-64 top-full">
            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Product</a>
            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Features</a>
            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Pricing</a>
            <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Company</a>
            <button className="flex items-center text-sm font-normal text-black">Log In</button>
            <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">Sign Up</button>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
            <div className="flex items-center justify-center mb-4 lg:justify-normal">

            </div>
            <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">The world of startups is here</h1>
            <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
              Say goodbye to endless hours spent on building templates from scratch. Experience the quickest, most responsive, and trendiest dashboard solution available. Seriously.
            </p>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button className="flex items-center py-4 text-sm font-bold text-white px-7 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">Get started now</button>
            </div>
          </div>
          <div className="items-center justify-end hidden col-span-1 md:flex">
            {/* <Image className="w-4/5 rounded-md" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/header-1.png" alt="header image" /> */}
          </div>
        </div>
      </div><div className="container mx-auto">
          <div className="flex flex-col items-center justify-center h-full">

            <div className="flex flex-col items-center justify-center mt-12">
              <h2 className="mb-4 text-3xl font-extrabold leading-tight text-center lg:text-4xl text-dark-grey-900">Elevate Your Productivity with Motion</h2>
              <p className="text-lg text-center lg:w-7/12 text-grey-700">Unlock the full potential of your workflow with Windbase. Our platform is designed to streamline your operations and boost productivity. Experience the difference as we help you save time and work more efficiently.</p>
            </div>
            <div className="grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3 md:grid-cols-2">
              <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M22.8233 8C22.8233 7.28 22.4533 6.65 21.8833 6.3L12.8333 1L3.78331 6.3C3.21331 6.65 2.83331 7.28 2.83331 8V18C2.83331 19.1 3.73331 20 4.83331 20H20.8333C21.9333 20 22.8333 19.1 22.8333 18L22.8233 8ZM20.8233 8V8.01L12.8333 13L4.83331 8L12.8333 3.32L20.8233 8ZM4.83331 18V10.34L12.8333 15.36L20.8233 10.37L20.8333 18H4.83331Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-2 text-center">
                  <h4 className="text-2xl font-extrabold text-dark-grey-900">Streamline Team Communication</h4>
                  <p className="font-medium text-grey-700">Streamline communication within your team using our shared team inboxes. Enhance collaboration and keep everyone on the same page effortlessly.</p>
                </div>
              </div>
              <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5 bg-white shadow-main rounded-3xl">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M3.28996 14.78L3.19996 14.69C2.80996 14.3 2.80996 13.67 3.19996 13.28L9.28996 7.18C9.67996 6.79 10.31 6.79 10.7 7.18L13.99 10.47L20.38 3.29C20.76 2.86 21.43 2.85 21.83 3.25C22.2 3.63 22.22 4.23 21.87 4.62L14.7 12.69C14.32 13.12 13.66 13.14 13.25 12.73L9.99996 9.48L4.69996 14.78C4.31996 15.17 3.67996 15.17 3.28996 14.78ZM4.69996 20.78L9.99996 15.48L13.25 18.73C13.66 19.14 14.32 19.12 14.7 18.69L21.87 10.62C22.22 10.23 22.2 9.63 21.83 9.25C21.43 8.85 20.76 8.86 20.38 9.29L13.99 16.47L10.7 13.18C10.31 12.79 9.67996 12.79 9.28996 13.18L3.19996 19.28C2.80996 19.67 2.80996 20.3 3.19996 20.69L3.28996 20.78C3.67996 21.17 4.31996 21.17 4.69996 20.78Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-2 text-center">
                  <h4 className="text-2xl font-extrabold text-dark-grey-900">Gain Insights with Analytics</h4>
                  <p className="font-medium text-grey-700">Gain valuable insights and data analytics for your team through our analytics dashboard. Make informed decisions and track your progress effectively.</p>
                </div>
              </div>
              <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M15.8766 12.71C16.857 11.9387 17.5726 10.8809 17.9239 9.68394C18.2751 8.48697 18.2445 7.21027 17.8364 6.03147C17.4283 4.85267 16.6629 3.83039 15.6467 3.10686C14.6305 2.38332 13.4141 1.99451 12.1666 1.99451C10.9192 1.99451 9.70274 2.38332 8.68655 3.10686C7.67037 3.83039 6.90497 4.85267 6.49684 6.03147C6.0887 7.21027 6.05814 8.48697 6.40938 9.68394C6.76063 10.8809 7.47623 11.9387 8.45662 12.71C6.7767 13.383 5.31091 14.4994 4.21552 15.9399C3.12012 17.3805 2.43619 19.0913 2.23662 20.89C2.22218 21.0213 2.23374 21.1542 2.27065 21.2811C2.30756 21.4079 2.36909 21.5263 2.45173 21.6293C2.61864 21.8375 2.86141 21.9708 3.12662 22C3.39184 22.0292 3.65778 21.9518 3.86595 21.7849C4.07411 21.618 4.20745 21.3752 4.23662 21.11C4.45621 19.1552 5.38831 17.3498 6.85484 16.0388C8.32137 14.7278 10.2195 14.003 12.1866 14.003C14.1537 14.003 16.0519 14.7278 17.5184 16.0388C18.9849 17.3498 19.917 19.1552 20.1366 21.11C20.1638 21.3557 20.2811 21.5827 20.4657 21.747C20.6504 21.9114 20.8894 22.0015 21.1366 22H21.2466C21.5088 21.9698 21.7483 21.8373 21.9132 21.6313C22.078 21.4252 22.1547 21.1624 22.1266 20.9C21.9261 19.0962 21.2385 17.381 20.1375 15.9382C19.0364 14.4954 17.5635 13.3795 15.8766 12.71ZM12.1666 12C11.3755 12 10.6021 11.7654 9.94434 11.3259C9.28655 10.8864 8.77385 10.2616 8.4711 9.53074C8.16835 8.79983 8.08914 7.99557 8.24348 7.21964C8.39782 6.44372 8.77879 5.73099 9.3382 5.17158C9.89761 4.61217 10.6103 4.2312 11.3863 4.07686C12.1622 3.92252 12.9665 4.00173 13.6974 4.30448C14.4283 4.60724 15.053 5.11993 15.4925 5.77772C15.932 6.43552 16.1666 7.20888 16.1666 8C16.1666 9.06087 15.7452 10.0783 14.9951 10.8284C14.2449 11.5786 13.2275 12 12.1666 12Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-2 text-center">
                  <h4 className="text-2xl font-extrabold text-dark-grey-900">Provide Instant Solutions</h4>
                  <p className="font-medium text-grey-700">Deliver instant answers to your customers or team members with our shared team inboxes. Ensure quick responses and efficient problem-solving.</p>
                </div>
              </div>
              <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M7.83331 4C7.83331 2.89 6.94331 2 5.83331 2C4.72331 2 3.83331 2.89 3.83331 4C3.83331 5.11 4.72331 6 5.83331 6C6.94331 6 7.83331 5.11 7.83331 4ZM11.0233 4.5C10.6133 4.5 10.2633 4.75 10.1033 5.13C9.66331 6.23 8.59331 7 7.33331 7H4.33331C3.50331 7 2.83331 7.67 2.83331 8.5V11H8.83331V8.74C10.2633 8.29 11.4133 7.21 11.9533 5.83C12.2133 5.19 11.7133 4.5 11.0233 4.5ZM19.8333 17C20.9433 17 21.8333 16.11 21.8333 15C21.8333 13.89 20.9433 13 19.8333 13C18.7233 13 17.8333 13.89 17.8333 15C17.8333 16.11 18.7233 17 19.8333 17ZM21.3333 18H18.3333C17.0733 18 16.0033 17.23 15.5633 16.13C15.4133 15.75 15.0533 15.5 14.6433 15.5C13.9533 15.5 13.4533 16.19 13.7033 16.83C14.2533 18.21 15.3933 19.29 16.8233 19.74V22H22.8233V19.5C22.8333 18.67 22.1633 18 21.3333 18ZM18.0833 11.09C18.0833 11.09 18.0833 11.08 18.0933 11.09C17.0333 11.36 16.1933 12.2 15.9233 13.26V13.25C15.8133 13.68 15.4133 14 14.9433 14C14.3933 14 13.9433 13.55 13.9433 13C13.9433 12.95 13.9633 12.86 13.9633 12.86C14.3933 11.01 15.8533 9.55 17.7133 9.13C17.7533 9.13 17.7933 9.12 17.8333 9.12C18.3833 9.12 18.8333 9.57 18.8333 10.12C18.8333 10.58 18.5133 10.98 18.0833 11.09ZM18.8333 6.06C18.8333 6.57 18.4633 6.98 17.9733 7.05C14.7833 7.44 12.2733 9.96 11.8833 13.15C11.8133 13.63 11.3933 14 10.8933 14C10.3433 14 9.89331 13.55 9.89331 13C9.89331 12.98 9.89331 12.96 9.89331 12.94C9.89331 12.93 9.89331 12.92 9.89331 12.91C10.3933 8.79 13.6833 5.53 17.8133 5.06H17.8233C18.3833 5.06 18.8333 5.51 18.8333 6.06Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-2 text-center">
                  <h4 className="text-2xl font-extrabold text-dark-grey-900">Enhance Customer Connections</h4>
                  <p className="font-medium text-grey-700">Connect with your customers seamlessly using our shared team inboxes. Improve customer interactions and build stronger relationships.</p>
                </div>
              </div>
              <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M10.5 13H3.49998C3.23477 13 2.98041 13.1054 2.79288 13.2929C2.60534 13.4804 2.49998 13.7348 2.49998 14V21C2.49998 21.2652 2.60534 21.5196 2.79288 21.7071C2.98041 21.8946 3.23477 22 3.49998 22H10.5C10.7652 22 11.0196 21.8946 11.2071 21.7071C11.3946 21.5196 11.5 21.2652 11.5 21V14C11.5 13.7348 11.3946 13.4804 11.2071 13.2929C11.0196 13.1054 10.7652 13 10.5 13ZM9.49998 20H4.49998V15H9.49998V20ZM21.5 2H14.5C14.2348 2 13.9804 2.10536 13.7929 2.29289C13.6053 2.48043 13.5 2.73478 13.5 3V10C13.5 10.2652 13.6053 10.5196 13.7929 10.7071C13.9804 10.8946 14.2348 11 14.5 11H21.5C21.7652 11 22.0196 10.8946 22.2071 10.7071C22.3946 10.5196 22.5 10.2652 22.5 10V3C22.5 2.73478 22.3946 2.48043 22.2071 2.29289C22.0196 2.10536 21.7652 2 21.5 2ZM20.5 9H15.5V4H20.5V9ZM21.5 13H14.5C14.2348 13 13.9804 13.1054 13.7929 13.2929C13.6053 13.4804 13.5 13.7348 13.5 14V21C13.5 21.2652 13.6053 21.5196 13.7929 21.7071C13.9804 21.8946 14.2348 22 14.5 22H21.5C21.7652 22 22.0196 21.8946 22.2071 21.7071C22.3946 21.5196 22.5 21.2652 22.5 21V14C22.5 13.7348 22.3946 13.4804 22.2071 13.2929C22.0196 13.1054 21.7652 13 21.5 13ZM20.5 20H15.5V15H20.5V20ZM10.5 2H3.49998C3.23477 2 2.98041 2.10536 2.79288 2.29289C2.60534 2.48043 2.49998 2.73478 2.49998 3V10C2.49998 10.2652 2.60534 10.5196 2.79288 10.7071C2.98041 10.8946 3.23477 11 3.49998 11H10.5C10.7652 11 11.0196 10.8946 11.2071 10.7071C11.3946 10.5196 11.5 10.2652 11.5 10V3C11.5 2.73478 11.3946 2.48043 11.2071 2.29289C11.0196 2.10536 10.7652 2 10.5 2ZM9.49998 9H4.49998V4H9.49998V9Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-2 text-center">
                  <h4 className="text-2xl font-extrabold text-dark-grey-900">Seamless Web Integration</h4>
                  <p className="font-medium text-grey-700">Integrate our shared team inboxes seamlessly with your website. Enhance the user experience and provide efficient communication channels. </p>
                </div>
              </div>
              <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M10.1666 14C9.90141 14 9.64706 14.1054 9.45952 14.2929C9.27198 14.4804 9.16663 14.7348 9.16663 15V21C9.16663 21.2652 9.27198 21.5196 9.45952 21.7071C9.64706 21.8946 9.90141 22 10.1666 22C10.4318 22 10.6862 21.8946 10.8737 21.7071C11.0613 21.5196 11.1666 21.2652 11.1666 21V15C11.1666 14.7348 11.0613 14.4804 10.8737 14.2929C10.6862 14.1054 10.4318 14 10.1666 14ZM5.16663 18C4.90141 18 4.64706 18.1054 4.45952 18.2929C4.27198 18.4804 4.16663 18.7348 4.16663 19V21C4.16663 21.2652 4.27198 21.5196 4.45952 21.7071C4.64706 21.8946 4.90141 22 5.16663 22C5.43184 22 5.6862 21.8946 5.87373 21.7071C6.06127 21.5196 6.16663 21.2652 6.16663 21V19C6.16663 18.7348 6.06127 18.4804 5.87373 18.2929C5.6862 18.1054 5.43184 18 5.16663 18ZM20.1666 2C19.9014 2 19.6471 2.10536 19.4595 2.29289C19.272 2.48043 19.1666 2.73478 19.1666 3V21C19.1666 21.2652 19.272 21.5196 19.4595 21.7071C19.6471 21.8946 19.9014 22 20.1666 22C20.4318 22 20.6862 21.8946 20.8737 21.7071C21.0613 21.5196 21.1666 21.2652 21.1666 21V3C21.1666 2.73478 21.0613 2.48043 20.8737 2.29289C20.6862 2.10536 20.4318 2 20.1666 2ZM15.1666 9C14.9014 9 14.6471 9.10536 14.4595 9.29289C14.272 9.48043 14.1666 9.73478 14.1666 10V21C14.1666 21.2652 14.272 21.5196 14.4595 21.7071C14.6471 21.8946 14.9014 22 15.1666 22C15.4318 22 15.6862 21.8946 15.8737 21.7071C16.0613 21.5196 16.1666 21.2652 16.1666 21V10C16.1666 9.73478 16.0613 9.48043 15.8737 9.29289C15.6862 9.10536 15.4318 9 15.1666 9Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-2 text-center">
                  <h4 className="text-2xl font-extrabold text-dark-grey-900">Effortless Team Management</h4>
                  <p className="font-medium text-grey-700">Manage your team effortlessly with our shared team inboxes. Simplify team reporting and ensure smooth operations. </p>
                </div>
              </div>
            </div>
          </div>
        </div><div className="w-full">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-2 text-center">
                <h2 className="text-3xl font-extrabold leading-tight lg:text-4xl text-dark-grey-900">How Motion works?</h2>
                <p className="text-base font-medium leading-7 text-dark-grey-600">Our platform is designed to provide efficient solutions and streamline your experience.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-8 xl:gap-x-10">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-purple-blue-500">
                  <span className="text-base font-bold leading-7 text-white">1</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold leading-tight text-dark-grey-900">Create your Account</h3>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">Join our platform by creating your personal account today.</p>
                </div>
              </div>
              <div className="rotate-90 lg:rotate-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                  <g clip-path="url(#clip0_3346_6663)">
                    <path d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z" fill="#A3AED0"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_3346_6663">
                      <rect width="42" height="42" fill="white" transform="translate(0.666748)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-purple-blue-500 border-purple-blue-500">
                  <span className="text-base font-bold leading-7">2</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold leading-tight text-dark-grey-900">Setup your Account</h3>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">Effortlessly configure your account to tailor it to your preferences.</p>
                </div>
              </div>
              <div className="rotate-90 lg:rotate-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                  <g clip-path="url(#clip0_3346_6663)">
                    <path d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z" fill="#A3AED0"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_3346_6663">
                      <rect width="42" height="42" fill="white" transform="translate(0.666748)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-purple-blue-500 border-purple-blue-500">
                  <span className="text-base font-bold leading-7">3</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold leading-tight text-dark-grey-900">Start creating with Motion</h3>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">Begin your creative endeavors with Motion and unlock endless possibilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div><div className="container mx-auto my-16">
          <div className="grid items-center justify-center w-full lg:h-full grid-cols-1 my-auto lg:grid-cols-2 my-16">
            <div className="flex flex-col col-span-1 text-center lg:text-start text-dark-grey-900 mb-7">
              <h3 className="text-4xl font-extrabold leading-tight">Join Us</h3>
              <h3 className="text-4xl font-medium leading-tight">Transform your website visitors into satisfied clients.</h3>
            </div>
            <div className="flex items-center justify-center col-span-1 lg:justify-end">
              <button className="box-content flex items-center py-4 mr-4 text-sm font-bold border px-7 rounded-2xl border-purple-blue-500 text-purple-blue-500 hover:bg-purple-blue-500 hover:text-white focus:ring-4 focus:ring-purple-blue-100 transition duration-300">Try Demo</button>
              <button className="flex items-center py-4 text-sm font-bold text-white border px-7 rounded-2xl border-purple-blue-500 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300">Get Started Now</button>
            </div>
          </div>
        </div><div className="w-full">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="flex flex-col w-8/12 gap-2">
              <h2 className="text-3xl font-extrabold text-center md:text-4xl text-dark-grey-900">FAQ</h2>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Our dedicated team has compiled a comprehensive list of frequently asked questions to provide you with the information you need.</p>
            </div>
            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
              <div className="flex flex-col items-start justify-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"></path>
                  </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-xl font-extrabold text-dark-grey-900">How long does it typically take to process an order? </p>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">Processing times for orders can vary, but we aim to get your order processed as quickly as possible.</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                  </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-xl font-extrabold text-dark-grey-900">Is there an estimated time frame for order processing? </p>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">Our team strives to process orders efficiently. While exact processing times may differ, we work diligently to fulfill your order promptly.</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"></path>
                  </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-xl font-extrabold text-dark-grey-900">Can you tell me about your return policy? </p>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">Of course! Our return policy is designed to provide you with a hassle-free experience. You can review the details of our return policy on our website, and if you have any specific questions, feel free to ask.</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"></path>
                  </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-xl font-extrabold text-dark-grey-900">How do I contact your customer support team? </p>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">Contacting our customer support team is easy. You can reach out to us through the contact form on our website, send an email to our dedicated support address, or call our customer support hotline. We're here to assist you.</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path>
                  </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-xl font-extrabold text-dark-grey-900">What payment methods do you accept for online orders? </p>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">We accept a variety of payment methods to make your online shopping experience convenient. You can use major credit cards, PayPal, and other secure payment options at checkout.</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
                  </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-xl font-extrabold text-dark-grey-900">Are there any discounts or promotions currently available? </p>
                  <p className="text-base font-medium leading-7 text-dark-grey-600">We regularly run promotions and discounts to provide our customers with value. To stay updated on our current offers, please visit our promotions page on the website or subscribe to our newsletter.</p>
                  <p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>  
  );
}
