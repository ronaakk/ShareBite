'use client';

import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import  NavBar from "@/components/landingPage/NavBar"

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
      
    <div className="w-full container flex flex-col mx-auto text-center">
          <NavBar />
          <h1 className="head_text">
            Turning Leftovers into Lifelines
          </h1>

          {/* going to be hidden on screesn 768px and larger, (max-md targets breakpoints max-md and larger)
          <br className="max-md:hidden"/> */}
          <span className="green_gradient text-2xl">
            Empowering restaurants and shelters to work together in providing food to those in need.
          </span>

          <p className="desc">
            Join us in reducing food waste and supporting your local community. Sign up today as a Restaurant or Shelter!
          </p>

          <div className="flex justify-center items-center my-10">
            <Image 
              src='/assets/images/landingPageDelivery.svg'
              alt="landing image"
              width={500}
              height={500}
            />
          </div>

          {/* how it works section */}
          <div className="w-full">
            <div className="container flex flex-col items-center gap-16 mx-auto my-10">
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-2 text-center justify-center items-center">
                        <h2 className="text-3xl font-extrabold leading-tight lg:text-4xl text-dark-grey-900">How does ShareBite work?</h2>
                        <p className="desc w-3/4">Our platform is designed to simplify food donations, making it easier than ever to reduce waste and support local communities in need.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between w-full lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-8 xl:gap-x-10">
                    <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-green-400 border-green-400">
                          <span className="text-base font-bold leading-7">1</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">Register Your Restaurant/Shelter</h4>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">Enter food requirements/expected waste.</p>
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
                        <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-green-400 border-green-400">
                            <span className="text-base font-bold leading-7">2</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">Input or View Available Food Donations</h4>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">List or Browse Available Food Donations.</p>
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
                        <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-green-400 border-green-400">
                            <span className="text-base font-bold leading-7">3</span>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">Connect for Easy Delivery or Pickup</h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">Seamlessly Connect for Convenient Delivery or Pickup of Donations.</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>


          {/* dashboard explanation section */}
          <div className="flex flex-col items-center justify-center h-full gap-4">
            
              <div className="flex flex-col items-center justify-center mt-12">
                  <h2 className="mb-4 text-3xl font-extrabold leading-tight text-center lg:text-4xl text-dark-grey-900">Every Donation Makes a Difference</h2>
                  <p className="text-lg text-center lg:w-3/4 text-grey-700">In the restaurant and fast food industry, a significant amount of food goes to waste each day simply because it was not sold, as new batches are prepared daily. Help make a difference in someone's life today!</p>
              </div>
              
              
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
                  <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                      <div>
                          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                              <path d="M10.1666 14C9.90141 14 9.64706 14.1054 9.45952 14.2929C9.27198 14.4804 9.16663 14.7348 9.16663 15V21C9.16663 21.2652 9.27198 21.5196 9.45952 21.7071C9.64706 21.8946 9.90141 22 10.1666 22C10.4318 22 10.6862 21.8946 10.8737 21.7071C11.0613 21.5196 11.1666 21.2652 11.1666 21V15C11.1666 14.7348 11.0613 14.4804 10.8737 14.2929C10.6862 14.1054 10.4318 14 10.1666 14ZM5.16663 18C4.90141 18 4.64706 18.1054 4.45952 18.2929C4.27198 18.4804 4.16663 18.7348 4.16663 19V21C4.16663 21.2652 4.27198 21.5196 4.45952 21.7071C4.64706 21.8946 4.90141 22 5.16663 22C5.43184 22 5.6862 21.8946 5.87373 21.7071C6.06127 21.5196 6.16663 21.2652 6.16663 21V19C6.16663 18.7348 6.06127 18.4804 5.87373 18.2929C5.6862 18.1054 5.43184 18 5.16663 18ZM20.1666 2C19.9014 2 19.6471 2.10536 19.4595 2.29289C19.272 2.48043 19.1666 2.73478 19.1666 3V21C19.1666 21.2652 19.272 21.5196 19.4595 21.7071C19.6471 21.8946 19.9014 22 20.1666 22C20.4318 22 20.6862 21.8946 20.8737 21.7071C21.0613 21.5196 21.1666 21.2652 21.1666 21V3C21.1666 2.73478 21.0613 2.48043 20.8737 2.29289C20.6862 2.10536 20.4318 2 20.1666 2ZM15.1666 9C14.9014 9 14.6471 9.10536 14.4595 9.29289C14.272 9.48043 14.1666 9.73478 14.1666 10V21C14.1666 21.2652 14.272 21.5196 14.4595 21.7071C14.6471 21.8946 14.9014 22 15.1666 22C15.4318 22 15.6862 21.8946 15.8737 21.7071C16.0613 21.5196 16.1666 21.2652 16.1666 21V10C16.1666 9.73478 16.0613 9.48043 15.8737 9.29289C15.6862 9.10536 15.4318 9 15.1666 9Z" fill="white"></path>
                            </svg>
                          </div>
                      </div>
                      <div className="flex flex-col gap-2 px-2 text-center">
                          <h4 className="text-2xl font-extrabold text-dark-grey-900">Impact Dashboard</h4>
                          <p className="font-medium text-grey-700">Track the difference your donations make over time, whether you're a restaurant or a shelter.</p>
                      </div>
                  </div>
                  <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5 bg-white shadow-main rounded-3xl">
                      <div>
                          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                              <path d="M7.83331 4C7.83331 2.89 6.94331 2 5.83331 2C4.72331 2 3.83331 2.89 3.83331 4C3.83331 5.11 4.72331 6 5.83331 6C6.94331 6 7.83331 5.11 7.83331 4ZM11.0233 4.5C10.6133 4.5 10.2633 4.75 10.1033 5.13C9.66331 6.23 8.59331 7 7.33331 7H4.33331C3.50331 7 2.83331 7.67 2.83331 8.5V11H8.83331V8.74C10.2633 8.29 11.4133 7.21 11.9533 5.83C12.2133 5.19 11.7133 4.5 11.0233 4.5ZM19.8333 17C20.9433 17 21.8333 16.11 21.8333 15C21.8333 13.89 20.9433 13 19.8333 13C18.7233 13 17.8333 13.89 17.8333 15C17.8333 16.11 18.7233 17 19.8333 17ZM21.3333 18H18.3333C17.0733 18 16.0033 17.23 15.5633 16.13C15.4133 15.75 15.0533 15.5 14.6433 15.5C13.9533 15.5 13.4533 16.19 13.7033 16.83C14.2533 18.21 15.3933 19.29 16.8233 19.74V22H22.8233V19.5C22.8333 18.67 22.1633 18 21.3333 18ZM18.0833 11.09C18.0833 11.09 18.0833 11.08 18.0933 11.09C17.0333 11.36 16.1933 12.2 15.9233 13.26V13.25C15.8133 13.68 15.4133 14 14.9433 14C14.3933 14 13.9433 13.55 13.9433 13C13.9433 12.95 13.9633 12.86 13.9633 12.86C14.3933 11.01 15.8533 9.55 17.7133 9.13C17.7533 9.13 17.7933 9.12 17.8333 9.12C18.3833 9.12 18.8333 9.57 18.8333 10.12C18.8333 10.58 18.5133 10.98 18.0833 11.09ZM18.8333 6.06C18.8333 6.57 18.4633 6.98 17.9733 7.05C14.7833 7.44 12.2733 9.96 11.8833 13.15C11.8133 13.63 11.3933 14 10.8933 14C10.3433 14 9.89331 13.55 9.89331 13C9.89331 12.98 9.89331 12.96 9.89331 12.94C9.89331 12.93 9.89331 12.92 9.89331 12.91C10.3933 8.79 13.6833 5.53 17.8133 5.06H17.8233C18.3833 5.06 18.8333 5.51 18.8333 6.06Z" fill="white"></path>
                            </svg>
                          </div>
                      </div>
                      <div className="flex flex-col gap-2 px-2 text-center">
                          <h4 className="text-2xl font-extrabold text-dark-grey-900">Easy Matching</h4>
                          <p className="font-medium text-grey-700">Seamlessly connect restaurants with nearby shelters.</p>
                      </div>
                  </div>
                  <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                      <div>
                          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M22.8233 8C22.8233 7.28 22.4533 6.65 21.8833 6.3L12.8333 1L3.78331 6.3C3.21331 6.65 2.83331 7.28 2.83331 8V18C2.83331 19.1 3.73331 20 4.83331 20H20.8333C21.9333 20 22.8333 19.1 22.8333 18L22.8233 8ZM20.8233 8V8.01L12.8333 13L4.83331 8L12.8333 3.32L20.8233 8ZM4.83331 18V10.34L12.8333 15.36L20.8233 10.37L20.8333 18H4.83331Z" fill="white"></path>
                            </svg>
                          </div>
                      </div>
                      <div className="flex flex-col gap-2 px-2 text-center">
                          <h4 className="text-2xl font-extrabold text-dark-grey-900">Real-Time Notifications</h4>
                          <p className="font-medium text-grey-700">Instant alerts for donation acceptance and pickups.</p>
                      </div>
                  </div>
              </div>
          </div>

    </div>
    
  );
}
