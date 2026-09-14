import { useState } from 'react';
import { Home, User, Briefcase, Award, Mail, Github, Linkedin, Code, FileText, X } from 'lucide-react';
import PinterestPin from './PinterestPin';
import ProfileModal from './ProfileModal';

const PinterestLayout = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/p-ashruth', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/ashruth-pamidimarri-b96798314/', label: 'LinkedIn' },
    { icon: Code, url: 'https://leetcode.com/u/indefinite/', label: 'LeetCode' },
    { icon: FileText, url: '/resume.pdf', label: 'Resume' },
  ];

  // Pinterest-style pins data
  const pins = [
    {
      id: 1,
      type: 'profile',
      title: 'Ashruth Pamidimarri',
      subtitle: 'Full Stack Developer',
      image: `${import.meta.env.BASE_URL}profile.jpg`,
      height: 'h-80',
      onClick: () => setShowProfileModal(true)
    },
    {
      id: 2,
      type: 'project',
      title: 'LRU Cache Simulator',
      subtitle: 'Data Structures Project',
      description: 'Implemented LRU Cache with efficient memory management',
      image: 'https://i.pinimg.com/736x/44/93/68/449368c4eae696c6857be2a79ff00d21.jpg',
      height: 'h-64',
      tags: ['C++', 'Data Structures', 'Algorithms']
    },
    {
      id: 3,
      type: 'project',
      title: 'FarmSmartAI',
      subtitle: 'AI/ML Project',
      description: 'Smart farming solution using machine learning',
      image: 'https://i.pinimg.com/736x/44/93/68/449368c4eae696c6857be2a79ff00d21.jpg',
      height: 'h-72',
      tags: ['Python', 'Machine Learning', 'AI']
    },
    {
      id: 4,
      type: 'certification',
      title: 'Machine Learning Certification',
      subtitle: 'Stanford University',
      description: 'Supervised Machine Learning: Regression and Classification',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      height: 'h-56',
      tags: ['ML', 'Stanford', 'Coursera']
    },
    {
      id: 5,
      type: 'project',
      title: 'Trie AutoSearch Engine',
      subtitle: 'Search Algorithm',
      description: 'Efficient search engine using Trie data structure',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      height: 'h-68',
      tags: ['JavaScript', 'Trie', 'Search']
    },
    {
      id: 6,
      type: 'achievement',
      title: '500+ LeetCode Problems',
      subtitle: 'Problem Solving',
      description: 'Solved 500+ coding problems across various difficulty levels',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      height: 'h-60',
      tags: ['DSA', 'Problem Solving', 'Coding']
    },
    {
      id: 7,
      type: 'certification',
      title: 'ServiceNow CSA',
      subtitle: 'ServiceNow',
      description: 'Certified System Administrator',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
      height: 'h-52',
      tags: ['ServiceNow', 'Administration', 'Platform']
    },
    {
      id: 8,
      type: 'skill',
      title: 'Full Stack Development',
      subtitle: 'Technical Skills',
      description: 'React, Node.js, Python, Java, JavaScript',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      height: 'h-64',
      tags: ['React', 'Node.js', 'Python', 'Java']
    }
  ];

  const filteredPins = activeSection === 'home' ? pins : pins.filter(pin => pin.type === activeSection || (activeSection === 'projects' && pin.type === 'project') || (activeSection === 'certifications' && pin.type === 'certification'));

  return (
  <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Top Bar for Home/About */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-center bg-white/80 backdrop-blur-lg py-4 shadow-md rounded-full max-w-xl mx-auto">
        <div className="flex gap-4 rounded-full px-4 py-2 bg-white shadow-lg border border-gray-200 justify-center">
          <button
            onClick={() => setActiveSection('home')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-200 ${activeSection === 'home' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <Home size={20} /> Home
          </button>
          <button
            onClick={() => setActiveSection('about')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-200 ${activeSection === 'about' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <User size={20} /> About
          </button>
        </div>
      </div>
      {/* Main Content Area */}
  <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {activeSection === 'home' && 'Portfolio'}
            {activeSection === 'about' && 'About Me'}
            {activeSection === 'projects' && 'Projects'}
            {activeSection === 'certifications' && 'Certifications'}
            {activeSection === 'contact' && 'Contact'}
          </h1>
          <p className="text-gray-600">
            {activeSection === 'home' && 'Discover my work and achievements'}
            {activeSection === 'about' && 'Learn more about my background and skills'}
            {activeSection === 'projects' && 'Explore my development projects'}
            {activeSection === 'certifications' && 'View my professional certifications'}
            {activeSection === 'contact' && 'Get in touch with me'}
          </p>
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredPins.map((pin) => (
            <PinterestPin key={pin.id} pin={pin} />
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
};

export default PinterestLayout;
