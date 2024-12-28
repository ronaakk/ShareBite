'use client';

import Button from "../Button";

function NavBar() {
  return (
    <div className="relative flex items-center justify-between w-full bg-white group py-7 shrink-0 max-h-[100px]">
        <div>
        {/* TODO: Logo will go here */}
        <p
          className="
            font-bold
            text-lg
            text-black
            tracking-wide
            hover:text-primary-green
            cursor-pointer
          ">
            ShareBite
          </p>
        </div>
        <div className="flex items-center gap-6">
          {false ? (  // replace with proper logic
            <Button 
              onClick={() => {}}
              label="Sign up"
              primary
            />
          ) : (
            <>
              <Button 
                onClick={() => {}}
                label="Log in"
              />
              <Button 
                onClick={() => {}}
                label="Get Started"
                primary
              />
            </>
          )}
        </div>
    </div>
  )
}

export default NavBar