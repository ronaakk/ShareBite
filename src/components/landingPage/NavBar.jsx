"use client"

function NavBar() {
  return (
    <div className="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
        <div>
        {/* TODO: Logo will go here */}
        <p className="logo_text">ShareBite</p>
        </div>
        <div className="items-center hidden gap-8 md:flex">
            <button className="outline_btn">Log In</button>
            <button className="flex items-center px-4 py-2 text-sm rounded-xl bg-light-green hover:bg-primary-green hover:font-bold hover:text-black transition duration-300">
                Sign Up
            </button>
        </div>
    </div>
  )
}

export default NavBar