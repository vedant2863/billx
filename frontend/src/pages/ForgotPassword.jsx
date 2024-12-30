
const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Forgot Password
        </h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-btn-primary-light dark:bg-btn-primary-dark rounded-md hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;