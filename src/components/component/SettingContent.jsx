import React from "react";

const SettingContent = () => {
  return (
    <div className="bg-white rounded-lg min-h-screen min-w-screen  px-8  w-full">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Notification</h1>

      {/* Mobile Push Notification */}
      <div className="mb-8">
        <label className="block text-lg font-medium mb-2">
          Mobile Push Notification
        </label>
        <select className="w-full border-gray-300 rounded-md p-2">
          <option>All notifications</option>
          <option>Only mentions</option>
          <option>Direct messages</option>
          <option>None</option>
        </select>
      </div>

      {/* Email Notifications */}
      <div className="mb-8">
        <h2 className="text-lg font-medium">Email Notifications</h2>
        <p className="text-gray-500 text-sm mb-4">
          When you’re busy or not online, we can send you email notifications
          for any new direct messages or mentions of your name.
        </p>
        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              value="send"
              className="text-green-600 focus:ring-green-500 border-gray-300"
            />
            <span>Send me email notification</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              value="hour"
              className="text-green-600 focus:ring-green-500 border-gray-300"
            />
            <span>Once an hour at most</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              value="never"
              className="text-green-600 focus:ring-green-500 border-gray-300"
            />
            <span>Never</span>
          </label>
        </div>
      </div>

      {/* Email News & Updates */}
      <div className="mb-8">
        <h2 className="text-lg font-medium">Email News & Updates</h2>
        <p className="text-gray-500 text-sm mb-4">
          From time to time, we’d like to send you emails with interesting news
          about us and your workspace. You can choose which of these updates
          you’d like to receive:
        </p>
      </div>

      {/* Email Address */}
      <p className="text-gray-500 text-sm">
        If you opt out of the above, note that we’ll still send you important
        administrative emails, such as password resets.
      </p>
      <p className="mt-4 text-gray-700">
        We will use this email address:{" "}
        <span className="text-black font-medium">maleek@gmail.com</span>
      </p>
    </div>
  );
};

export default SettingContent;