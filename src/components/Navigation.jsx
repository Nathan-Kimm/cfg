import React from 'react';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-[#2B7FFF] p-2 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">AvailSync</span>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="bg-[#2B7FFF] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
