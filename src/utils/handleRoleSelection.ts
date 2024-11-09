export const handleRoleSelection = async (role: string, user: any) => {
  if (!user?.email) {
    // TODO: change to sign up after hackathon
    window.location.href = "/api/auth/login";
    return null;
  }

  try {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth0Id: user.sub,
        role: role,
        email: user.email,
        name: user.nickname,
      }),
    });
    console.log({
      auth0Id: user.sub,
      role: role,
      email: user.email,
      name: user.nickname,
    });

    console.log("Response status:", response.status);
    console.log("Response text:", await response.text());

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    window.location.href = "/dashboard";
  } catch (err) {
    console.error("Error setting role:", err);
  }
};

export default handleRoleSelection;
