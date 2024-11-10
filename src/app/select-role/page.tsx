'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useFormik } from 'formik';
import { restaurantValidationSchema } from '@/utils/Yup';
import { useUser } from '@auth0/nextjs-auth0/client';
import handleRoleSelection from '@/utils/handleRoleSelection';


const SelectRolePage = () => {
  const [role, setRole] = useState<'' | 'Restaurant' | 'Shelter'>('');
  const router = useRouter();
  const { user } = useUser();

  const formik = useFormik({
    initialValues: { name: '', address: '', contact: '' },
    validationSchema: restaurantValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleRoleSelection(role, user);
      router.push('/dashboard');
    },
  }); 

  return (
    <form onSubmit={formik.handleSubmit} className='flex items-center justify-center flex-col mt-20'>
      <div className="flex flex-col items-center space-y-16 w-full h-full justify-center mb-36">
        <h1 className="text-5xl font-bold mb-4">Select your role</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 w-full max-w-[60rem] gap-16">  
          <div
            onClick={() => setRole('Restaurant')}
            className={`cursor-pointer flex flex-col gap-10 items-center border-2 p-6 rounded-lg ${
              role === 'Restaurant' ? 'border-green-300' : 'border-gray-300'
            } hover:border-green-300 transition duration-200`}
          >
              <Image 
                src='/assets/images/restaurant-illustration.svg'
                alt="landing image"
                width={170}
                height={170}
              />
            <p className="text-lg font-medium">Restaurant</p>
          </div>
          
          <div
            onClick={() => setRole('Shelter')}
            className={`cursor-pointer  flex flex-col gap-10 items-center border-2 p-6 rounded-lg ${
              role === 'Shelter' ? 'border-green-300' : 'border-gray-300'
            } hover:border-green-300 transition duration-200`}
          >
              <Image 
                src='/assets/images/shelter-illustration.svg'
                alt="landing image"
                width={170}
                height={170}
              />
            <p className="text-lg font-medium">Shelter</p>
          </div>
        </div>
      </div>
      
      {role && 
        <div className="flex flex-col gap-y-2 mb-5 w-200">
          <h2 className="text-2xl font-semibold mb-4 text-center">Register as a {role}</h2>
            <div>
              <input
                type="text"
                name="name"
                placeholder={`${role} name`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
            </div>

            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formik.touched.address && formik.errors.address && <p className="text-red-500 text-sm">{formik.errors.address}</p>}
            </div>

            <div>
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  formik.touched.contact && formik.errors.contact ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formik.touched.contact && formik.errors.contact && <p className="text-red-500 text-sm">{formik.errors.contact}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-green-300 rounded-md text-white font-semibold hover:bg-green-500 transition"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
        </div>
      }
      
    </form>
    
  );
};

export default SelectRolePage;
