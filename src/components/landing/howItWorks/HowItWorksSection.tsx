
function HowItWorksSection() {
  return (
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
                    <g clipPath="url(#clip0_3346_6663)">
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
                    <g clipPath="url(#clip0_3346_6663)">
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
  )
}

export default HowItWorksSection