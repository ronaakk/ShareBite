'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SelectRolePage = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<null | 'restaurant' | 'shelter'>(null);

  const handleRoleSelection = (role: 'restaurant' | 'shelter') => {
    setSelectedRole(role);
  };

  const handleSubmit = () => {
    if (selectedRole) {
      router.push(`/register/${selectedRole}`);
    }
  };

  return (
    <div className='flex items-center justify-center w-full lg:h-screen'>
    <div className="flex flex-col items-center space-y-16 w-full h-full justify-center">
      <p className="text-2xl font-semibold mb-4">Select your role</p>
      <div className=" grid grid-cols-1 lg:grid-cols-2 w-full max-w-[75rem] gap-16">
        {/* Restaurant Option */}
        <div
          onClick={() => handleRoleSelection('restaurant')}
          className={`cursor-pointer flex flex-col gap-10 items-center border-2 p-6 rounded-lg ${
            selectedRole === 'restaurant' ? 'border-green-300' : 'border-gray-300'
          } hover:border-green-300 transition duration-200`}
        >
             <Image 
              src='/assets/images/restaurant-illustration.svg'
              alt="landing image"
              width={200}
              height={200}
            />
          <p className="text-lg font-medium">Restaurant</p>
        </div>
        
        {/* Shelter Option */}
        <div
          onClick={() => handleRoleSelection('shelter')}
          className={`cursor-pointer  flex flex-col gap-10 items-center border-2 p-6 rounded-lg ${
            selectedRole === 'shelter' ? 'border-green-300' : 'border-gray-300'
          } hover:border-green-300 transition duration-200`}
        >
            <Image 
              src='/assets/images/shelter-illustration.svg'
              alt="landing image"
              width={200}
              height={200}
            />
          <p className="text-lg font-medium">Shelter</p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!selectedRole}
        className={`px-6 py-2 rounded-lg text-black font-medium ${
          selectedRole ? 'bg-green-300 hover:bg-green-500' : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
    </div>
  );
};

export default SelectRolePage;
