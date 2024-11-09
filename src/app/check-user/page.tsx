'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from "@auth0/nextjs-auth0/client"

const CheckUserRedirect = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If user is loading, do nothing
    if (isLoading) return;

    // If no user is logged in, redirect to login
    if (!user) {
      router.push('/api/auth/login');
      return;
    }

    // Check if user exists in the database
    const checkUserInDatabase = async () => {
      const res = await fetch(`/api/user?email=${user.email}`);
      const data = await res.json();

      if (data.exists) {
        // User exists, redirect to dashboard
        router.push('/dashboard');
      } else {
        // User does not exist, redirect to select role page
        router.push('/select-role');
      }
    };

    // Call the function to check user existence in the DB
    checkUserInDatabase();
  }, [user, isLoading, router]);

  return null; // No need to render anything, just redirect
};

export default CheckUserRedirect;