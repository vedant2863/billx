const BASE_URL = import.meta.env.BASE_URL || "http://localhost:3000/api";

export const SignUpApi = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });

    // Check for non-200 status codes
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register user");
    }

    return response.json();
  } catch (error) {
    console.error("Error in SignUpApi:", error.message);
    return { success: false, message: error.message };
  }
};
