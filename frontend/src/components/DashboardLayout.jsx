import { Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 h-screen fixed top-0 left-0">
      <h2 className="text-2xl font-bold text-center mb-8">Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/dashboard" className="text-lg hover:text-gray-400">
            Dashboard Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="text-lg hover:text-gray-400">
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="text-lg hover:text-gray-400">
            Settings
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/help" className="text-lg hover:text-gray-400">
            Help
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/logout" className="text-lg hover:text-gray-400">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardLayout;
