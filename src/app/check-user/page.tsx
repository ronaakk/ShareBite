"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

const CheckUserRedirect = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If user is loading, do nothing
    if (isLoading) return;

    // If no user is logged in, redirect to login
    if (!user) {
      router.push("/api/auth/login");
      return;
    }

    // Check if user exists in the database
    const checkUserInDatabase = async () => {
      try {
        const res = await fetch(`/api/user?email=${user.email}`);

        if (!res.ok) {
          // Handle HTTP errors (e.g., 500, 404, etc.)
          throw new Error(`API request failed with status ${res.status}`);
        }

        // Check if the response is empty or non-JSON
        const text = await res.text(); // Get raw text response first

        if (!text) {
          // Handle empty response body
          console.error("Empty response from the server.");
          return;
        }

        // Parse the response only if it's valid JSON
        const data = JSON.parse(text);

        if (data === null) {
          // Handle null response if the data is null
          console.error("Received null response from the server.");
          return;
        }

        if (data.exists) {
          // User exists, redirect to dashboard
          router.push("/dashboard");
        } else {
          // User does not exist, redirect to select role page
          router.push("/select-role");
        }
      } catch (error) {
        console.error("Error checking user in the database:", error);
      }
    };

    // Call the function to check user existence in the DB
    checkUserInDatabase();
  }, [user, isLoading, router]);

  return null; // No need to render anything, just redirect
};

export default CheckUserRedirect;
