import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state) => state.auth.authStatus);

  useEffect(() => {
    if (authentication && !authStatus) {
      // If authentication is required and user is not authenticated, redirect to signin
      navigate("/signin");
    } else if (!authentication && authStatus) {
      // If authentication is not required but the user is logged in, redirect to dashboard
      navigate("/dashboard");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? (
    <div className="flex items-center justify-center min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Loading...
        </h2>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
