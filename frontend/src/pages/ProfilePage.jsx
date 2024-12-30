export default function ProfilePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Profile
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This is your profile page. You can manage your profile, settings, and
          more here.
        </p>
      </div>
    </div>
  );
}