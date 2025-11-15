import React from 'react';
import { Users, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GroupView = () => {
  const navigate = useNavigate();

  // Mock data for groups (same as FriendGroupsPage)
  const groups = [
    {
      id: 1,
      name: 'Study Group',
      color: 'blue',
      members: [
        { initial: 'A', name: 'Alice' },
        { initial: 'B', name: 'Bob' },
        { initial: 'C', name: 'Charlie' },
        { initial: 'Y', name: 'You' }
      ],
      upcomingEvents: 2
    },
    {
      id: 2,
      name: 'Project Team',
      color: 'green',
      members: [
        { initial: 'D', name: 'David' },
        { initial: 'E', name: 'Emma' },
        { initial: 'F', name: 'Frank' },
        { initial: 'Y', name: 'You' }
      ],
      upcomingEvents: 1
    },
    {
      id: 3,
      name: 'Lunch Crew',
      color: 'orange',
      members: [
        { initial: 'G', name: 'Grace' },
        { initial: 'H', name: 'Henry' },
        { initial: 'I', name: 'Isabel' },
        { initial: 'J', name: 'Jack' },
        { initial: 'Y', name: 'You' }
      ],
      upcomingEvents: 3
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-[#2B7FFF]',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
      purple: 'bg-purple-500',
      red: 'bg-red-500',
    };
    return colors[color] || colors.blue;
  };

  const GroupCard = ({ group }) => {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        {/* Group Icon and Title */}
        <div className="flex items-start justify-between mb-4">
          <div className={`${getColorClasses(group.color)} w-14 h-14 rounded-2xl flex items-center justify-center`}>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        {/* Group Name and Members Count */}
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{group.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{group.members.length} members</p>

        {/* Member Avatars */}
        <div className="flex items-center mb-4 -space-x-2">
          {group.members.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className={`${getColorClasses(group.color)} w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium border-2 border-white`}
            >
              {member.initial}
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{group.upcomingEvents} upcoming</span>
        </div>

        {/* View Schedule Button */}
        <button
          onClick={() => navigate(`/group/${group.id}`)}
          className="w-full bg-gray-50 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          View Schedule
        </button>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-[#2B7FFF]" />
          <h2 className="text-2xl font-bold text-gray-900">Friend Groups</h2>
        </div>
        <button className="flex items-center space-x-2 bg-[#2B7FFF] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Group</span>
        </button>
      </div>
      
      <p className="text-gray-600 text-lg mb-6">
        Manage your scheduling groups
      </p>
      
      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupView;