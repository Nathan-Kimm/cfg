import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-[#2B7FFF] p-2 rounded-xl">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-semibold text-gray-900">AvailSync</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Welcome Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Your Dashboard! 🎉
          </h1>
          <p className="text-gray-600 text-lg">
            You've successfully logged in. This is a dummy dashboard page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
