import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "../components/ui/Button";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8080/api";

const SignUpPage = () => {
  // State for form fields and errors
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  
  // Initialize the navigate hook
  const navigate = useNavigate();

  // Handle form reset
  const handleReset = () => {
    setError("");
    setSuccess("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Validate fields
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Reset error and success messages
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong. Please try again.");
      } else {
        setSuccess("Registration successful! Please log in.");
        // Redirect to dashboard after successful registration
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError(error.message || "Network error. Please try again later.");
    } finally {
      setLoading(false);
      handleReset();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Sign-Up
        </h2>

        {/* Display error or success messages */}
        {error && (
          <div className="bg-red-500 text-white p-2 rounded-md text-center mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-500 text-white p-2 rounded-md text-center mb-4">
            {success}
          </div>
        )}

        {/* Registration Form */}
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Submit Button with loading state */}
          <Button
            type="submit"
            className={`w-full px-6 py-3 text-lg text-white rounded-md transition-all duration-300 ease-in-out ${
              loading
                ? "bg-btn-primary-light dark:bg-btn-primary-dark opacity-50 cursor-not-allowed"
                : "bg-btn-primary-light hover:bg-btn-hover-light dark:bg-btn-primary-dark dark:hover:bg-btn-hover-dark"
            }`}
            disabled={loading}
          >
            {loading ? "Sign-Uping..." : "Sign-Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
