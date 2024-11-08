'use client';

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user
      ? <div className="font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-2xl font-bold">Dashboard!</h1>
          <Link href="api/auth/logout">Logout</Link>
        </div>
      : <div>
          <h1 className="text-2xl font-bold">Landing!</h1>
          <Link href="api/auth/login">Login</Link>
        </div>
    
  );
}
