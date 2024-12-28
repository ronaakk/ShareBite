import Image from "next/image"

function HeroSection() {
  return (
    <div>
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
    </div>
  )
}

export default HeroSection