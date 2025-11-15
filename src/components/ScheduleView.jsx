import React from 'react';
import { CalendarDays } from 'lucide-react';

const ScheduleView = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="flex items-center space-x-3 mb-6">
        <CalendarDays className="w-8 h-8 text-[#2B7FFF]" />
        <h2 className="text-2xl font-bold text-gray-900">Schedule View</h2>
      </div>
      <p className="text-gray-600 text-lg mb-4">
        This is the Schedule component. Your calendar and availability will appear here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-2">Upcoming Events</h3>
          <p className="text-gray-600 text-sm">No events scheduled yet</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-semibold text-gray-900 mb-2">Available Slots</h3>
          <p className="text-gray-600 text-sm">Set your availability</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;
