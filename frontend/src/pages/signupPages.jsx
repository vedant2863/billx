import { SignUpApi } from "../utils/api/userApi";

export default function SignupPage() {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      console.log("Form submitted");

      // Create a FormData object
      const formData = new FormData(e.target);

      // Extract data from FormData
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      // Make API call using SignUpApi
      const response = await SignUpApi(data);

      if (response.success) {
        console.log("User created successfully", response);
        alert("Signup successful!");
        e.target.reset(); // Reset the form after successful submission
      } else {
        console.error("Signup failed", response.message);
        alert(response.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">
          Signup Page
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name" // Added name attribute
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email" // Added name attribute
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password" // Added name attribute
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
