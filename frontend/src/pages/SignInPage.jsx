import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-text-light dark:text-text-dark">
        Sign-In
        </h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              className="block text-text-light dark:text-text-dark"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-text-dark"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-text-light dark:text-text-dark"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-text-dark"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-btn-primary-text-light dark:text-btn-primary-text-dark bg-btn-primary-light dark:bg-btn-primary-dark rounded-md hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark"
          >
            Login
          </button>
          <Button
            type="submit"
            className="w-full px-4 py-2 text-btn-primary-text-light dark:text-btn-primary-text-dark bg-btn-primary-light dark:bg-btn-primary-dark rounded-md hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark"
          >
             Sign-In
          </Button>
          <p className="mt-4 text-sm text-center text-link-light dark:text-link-dark hover:text-link-hover-light dark:hover:text-link-hover-dark">
            Forgot your password?{" "}
            <Link
              to="/forgot-password"
              className="ml-1 hover:text-link-hover-light dark:hover:text-link-hover-dark"
            >
              Reset it here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

