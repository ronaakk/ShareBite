import { useRouter } from "next/router";

const handleRoleSelection = async (role: string, user : any) => {
  
    if (!user?.email) {
      // TODO: change to sign up after hackathon
      window.location.href = '/api/auth/login'
      return null;
    };
    
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          role: role,
          auth0Id: user.sub,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      window.location.href = '/dashboard'
    } catch (err) {
      console.error('Error setting role:', err);
    }
};

export default handleRoleSelection;