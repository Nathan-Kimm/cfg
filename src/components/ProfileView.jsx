import React from 'react';
import { User } from 'lucide-react';

const ProfileView = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="flex items-center space-x-3 mb-6">
        <User className="w-8 h-8 text-[#2B7FFF]" />
        <h2 className="text-2xl font-bold text-gray-900">Profile View</h2>
      </div>
      <p className="text-gray-600 text-lg mb-4">
        This is the Profile component. Your user information and settings will appear here.
      </p>
      <div className="space-y-4 mt-6">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
          <p className="text-gray-600 text-sm">Name, email, and profile details</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Preferences</h3>
          <p className="text-gray-600 text-sm">Notification settings and preferences</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
