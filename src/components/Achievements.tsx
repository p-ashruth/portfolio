import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const Achievements = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const certifications = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner',
      description: 'Foundational understanding of AWS Cloud services, security, and pricing models',
      date: '2024',
      issuer: 'Amazon Web Services',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: '1'
    },
    {
      id: 2,
      title: 'React Developer Certification',
      description: 'Advanced React concepts including hooks, context, and performance optimization',
      date: '2023',
      issuer: 'Meta (Facebook)',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: '2'
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      description: 'Complete MERN stack development with modern best practices and deployment',
      date: '2023',
      issuer: 'freeCodeCamp',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: '3'
    },
    {
      id: 4,
      title: 'JavaScript Algorithms',
      description: 'Data Structures and Algorithms certification with JavaScript implementation',
      date: '2023',
      issuer: 'freeCodeCamp',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: '4'
    },
    {
      id: 5,
      title: 'Node.js Backend Development',
      description: 'Server-side development with Express.js, MongoDB, and RESTful APIs',
      date: '2023',
      issuer: 'Coursera',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: '5'
    }
  ];

  const stats = [
    { value: '500+', label: 'LeetCode Problems' },
    { value: '9.11', label: 'CGPA' },
    { value: '15+', label: 'Technologies' },
    { value: '8+', label: 'Major Projects' },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black border border-white rounded-lg p-6 text-center hover:bg-white hover:text-black transition-all"
            >
              <div className="text-4xl font-bold text-white hover:text-black mb-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-white hover:text-black font-medium" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Netflix-style Certifications Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-poppins">
              Trending Certifications
            </h2>

            {/* Navigation Arrows */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-all"
              >
                <ChevronLeft className="text-white" size={20} />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-all"
              >
                <ChevronRight className="text-white" size={20} />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="relative flex-shrink-0 w-80 h-48 bg-gray-900 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
              >
                {/* Background Image */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>

                {/* Netflix-style Ranking Number */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-6xl md:text-7xl font-black text-white/20 group-hover:text-white/30 transition-all duration-300 select-none">
                    {cert.rank}
                  </span>
                </div>

                {/* Netflix Red Logo */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-lg font-bold text-white mb-1 font-poppins line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-red-400 text-sm mb-1 font-sans">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-300 text-xs line-clamp-2 font-sans">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400 text-xs">{cert.date}</span>
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
