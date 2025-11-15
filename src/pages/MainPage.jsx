import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import ScheduleView from '../components/ScheduleView';
import ProfileView from '../components/ProfileView';
import GroupView from '../components/GroupView'

const MainPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-[#2B7FFF] p-2 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">AvailSync</span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'schedule'
                    ? 'bg-[#2B7FFF] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Schedule
              </button>

              <button
                onClick={() => setActiveTab('group')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'group'
                    ? 'bg-[#2B7FFF] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Groups
              </button>
              
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-[#2B7FFF] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Profile
              </button>

              
            </div>

            {/* Logout Button */}
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'schedule' && <ScheduleView />}
        {activeTab === 'profile' && <ProfileView />}
        {activeTab === 'group' && <GroupView />}
      </div>
    </div>
  );
};

export default MainPage;
