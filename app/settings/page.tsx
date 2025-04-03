"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            🧑‍💻
          </div>
          <div>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Change Password
        </button>
      </div>

      {/* Preferences */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-4">
          <span>Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {darkMode ? "Enabled" : "Disabled"}
          </button>
        </div>

        {/* Notifications Toggle */}
        <div className="flex justify-between items-center">
          <span>Notifications</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`px-4 py-2 rounded-lg ${
              notifications ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {notifications ? "Enabled" : "Disabled"}
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}
