import React from 'react';
import { Calendar, Users, Sparkles, Zap, Clock, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: 'Google Calendar Sync',
      description: 'Automatically block off busy times from your Google Calendar. No more double bookings.'
    },
    {
      icon: Users,
      title: 'Friend Groups',
      description: 'Organize your contacts into groups. Schedule with your study group, project team, or lunch crew.'
    },
    {
      icon: Sparkles,
      title: 'AI Suggestions',
      description: 'Get smart recommendations for the best times to meet based on everyone\'s availability.'
    },
    {
      icon: Zap,
      title: 'One-Click Sharing',
      description: 'Generate shareable links, QR codes, or send email invitations instantly.'
    },
    {
      icon: Clock,
      title: 'Visual Grid View',
      description: 'See everyone\'s availability at a glance with our intuitive time slot grid.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your calendar details stay private. Only show availability, not event details.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-[#2B7FFF] px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Scheduling</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Find the perfect time to meet,<br />automatically
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          AvailSync connects with your Google Calendar to show your real availability,
          making it effortless to schedule with friends, teams, and groups.
        </p>
        
        <button 
          onClick={() => navigate('/login')}
          className="bg-[#2B7FFF] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-600 transition-colors inline-flex items-center space-x-2 shadow-lg shadow-blue-200"
        >
          <Calendar className="w-5 h-5" />
          <span>Start Scheduling Free</span>
        </button>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to schedule smarter
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features that make scheduling a breeze
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-[#2B7FFF] rounded-3xl p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Ready to simplify your scheduling?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands who've already made scheduling effortless
          </p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-white text-[#2B7FFF] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started - It's Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
