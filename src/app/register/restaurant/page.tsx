'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { restaurantValidationSchema } from '@/utils/Yup';
import { handleRoleSelection } from '@/utils/handleRoleSelection';
import { useUser } from '@auth0/nextjs-auth0/client';

const RegisterRestaurantPage = () => {
  const router = useRouter();

  const { user, error, isLoading } = useUser();

  useEffect(() => {
    handleRoleSelection("Restaurant", user);
  }, [])

  const formik = useFormik({
    initialValues: { name: '', address: '', contact: '' },
    validationSchema: restaurantValidationSchema,
    onSubmit: async (values) => {
      const res = await fetch('/api/restaurant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        router.push('/api/auth/login');
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={formik.handleSubmit} className="space-y-6 p-6 w-full max-w-lg border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register as a Restaurant</h2>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Restaurant Name"
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
      </form>
    </div>
  );
};

export default RegisterRestaurantPage;
