'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';

const DashboardPage = () => {
  const { user } = useUser();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const res = await fetch(`/api/user/${user?.sub}`);
      const data = await res.json();
      setUserRole(data.role);
    };

    fetchUserRole();
  }, [user]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome to your Dashboard, {userRole}!</h1>
      {userRole === 'restaurant' ? (
        <div>Restaurant specific dashboard content...</div>
      ) : (
        <div>Shelter specific dashboard content...</div>
      )}
    </div>
  );
};

export default DashboardPage;
