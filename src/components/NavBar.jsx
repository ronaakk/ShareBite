"use client"

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

function NavBar() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <div className="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
        <div>
        {/* TODO: Logo will go here */}
        <p className="logo_text">ShareBite</p>
        </div>
        <div className="items-center hidden gap-6 md:flex">
            {user ? (
              <button className="flex items-center px-4 py-2 text-sm rounded-xl bg-light-green hover:bg-primary-green font-bold hover:text-black transition duration-300">
                <Link href="api/auth/logout">Logout</Link>
              </button>
            ) : (
              <>
              <button className="flex items-center px-4 py-2 text-sm rounded-xl font-bold hover:bg-light-green">
                <Link href="api/auth/login">Log In</Link>
              </button>
              <button className="flex items-center px-4 py-2 text-sm rounded-xl bg-light-green hover:bg-primary-green font-bold hover:text-black transition duration-300">
                <Link 
                  // TODO: will change this after hackathon
                  href="api/auth/login">
                  Sign Up
                </Link>
              </button>
              </>

            )}
            
            
        </div>
    </div>
  )
}

export default NavBar