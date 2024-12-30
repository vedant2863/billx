
const DashboardPage = () => {
  return (
    <div className="flex bg-bg-light dark:bg-bg-dark min-h-screen">
      {/* Sidebar */}
      
      {/* Main Content */}
      <div className="ml-64 w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to your Dashboard
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Here you can manage your profile, settings, and more.
        </p>
        
        {/* Add more dashboard content here */}
      </div>
    </div>
  );
};

export default DashboardPage;
