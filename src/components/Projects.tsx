import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog with advanced filtering, shopping cart functionality, secure payment processing with Stripe, order management, inventory tracking, and an admin dashboard with real-time analytics. The platform is fully responsive and optimized for performance.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Express'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, team workspaces, and progress tracking.',
      longDescription: 'A powerful task management application designed for teams. Features real-time collaboration, drag-and-drop task organization, team workspaces, progress tracking with visual charts, deadline management, file attachments, and notification system. Built with TypeScript for better code reliability and Firebase for real-time synchronization.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'FarmSmart AI',
      description: 'An interactive weather dashboard with forecasts, maps, and historical data visualization.',
      longDescription: 'An elegant weather dashboard that provides comprehensive weather information. Features include current weather conditions, 7-day forecasts, interactive weather maps, historical data visualization with charts, location-based weather alerts, and beautiful weather animations. Integrates with multiple weather APIs for accurate data.',
      image: 'https://i.pinimg.com/736x/44/93/68/449368c4eae696c6857be2a79ff00d21.jpg',
      tags: ['React', 'API Integration', 'Charts.js', 'CSS Animations'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered features and smart responses.',
      longDescription: 'An innovative chat application that combines real-time messaging with AI capabilities. Features include intelligent message suggestions, sentiment analysis, language translation, smart notifications, file sharing, group chats, and AI-powered chatbots for customer support.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Socket.io', 'OpenAI', 'Node.js', 'Redis'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'Full Stack'
    },
    {
      id: 5,
      title: 'Implementation of Simple and Demand Paging',
      description: 'Simulation of Simple and Demand Paging using a page table and free frame list to manage memory allocation.',
      longDescription: 'Simulation Simple and Demand Paging using a page table and free frame list to manage memory allocation.',
      image: 'https://i.pinimg.com/736x/ab/a9/41/aba94111afe833e42a9dd5905dbeb565.jpg',
      tags: ['Operating Systems', 'Paging', 'Memory Management'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness tracking app with workout plans and progress monitoring.',
      longDescription: 'A comprehensive fitness tracking application designed for mobile devices. Features include custom workout plans, exercise library with video demonstrations, progress tracking with charts, nutrition logging, goal setting, social features for motivation, and integration with wearable devices.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'Health APIs'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'Mobile'
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-black min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              My Projects
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              A collection of projects that showcase my skills and creativity
            </p>
          </div>

          {/* Pure Pinterest-style Masonry Grid */}
          <div className="flex justify-center items-center">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 max-w-7xl w-full">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="break-inside-avoid mb-6 cursor-pointer group relative transform transition-all duration-500 hover:scale-[1.02]"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Pure Image Card */}
                  <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover transition-all duration-1000 group-hover:scale-110"
                      style={{
                        height: `${280 + (index % 3) * 120}px`
                      }}
                    />

                    {/* Elegant Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {/* Title slides up elegantly */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-2xl" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm opacity-90 font-medium" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                          Click to explore
                        </p>
                      </div>

                      {/* Elegant click indicator */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 border border-white/20">
                        <ExternalLink size={18} className="text-white" />
                      </div>
                    </div>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-white/20 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Compact Aesthetic Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-50 flex items-center justify-center p-4 pointer-events-none"
        >
          <div
            className="bg-black/90 backdrop-blur-2xl rounded-3xl max-w-4xl w-full h-[80vh] overflow-hidden shadow-2xl border border-white/20 relative pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/5 hover:bg-white/15 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 border border-white/10 group"
            >
              <X size={20} className="text-white group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
            </button>

            {/* Perfect Split Layout */}
            <div className="flex h-full">
              {/* Left - Image (45%) */}
              <div className="w-[45%] relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
              </div>

              {/* Right - Content (55%) */}
              <div className="w-[55%] p-8 flex flex-col justify-center">
                {/* Title with accent */}
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    {selectedProject.title}
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
                </div>

                {/* Concise Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  {selectedProject.description}
                </p>

                {/* Compact Technologies */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-widest opacity-80" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/5 text-white rounded-lg text-sm font-medium border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prominent Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/15 text-white rounded-xl transition-all duration-300 border border-white/10 hover:border-white/30 group backdrop-blur-sm"
                  >
                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-lg" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Code</span>
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-100 text-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-lg" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
