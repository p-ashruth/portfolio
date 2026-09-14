import { useState } from 'react';
import { ExternalLink, Github, Heart, Share, MoreHorizontal } from 'lucide-react';

interface Pin {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  height: string;
  tags?: string[];
  onClick?: () => void;
}

interface PinterestPinProps {
  pin: Pin;
}

const PinterestPin = ({ pin }: PinterestPinProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handlePinClick = () => {
    if (pin.onClick) {
      pin.onClick();
    }
  };

  return (
    <div 
      className={`break-inside-avoid mb-6 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group ${pin.height}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePinClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={pin.image}
          alt={pin.title}
          className={`w-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-105' : 'scale-100'}`}
          style={{ height: pin.type === 'profile' ? '280px' : '200px' }}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div 
            className="absolute inset-0 bg-gray-200 animate-pulse"
            style={{ height: pin.type === 'profile' ? '280px' : '200px' }}
          />
        )}

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300">
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                <Heart size={16} className="text-gray-700" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                <Share size={16} className="text-gray-700" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                <MoreHorizontal size={16} className="text-gray-700" />
              </button>
            </div>

            {/* Action buttons for projects */}
            {pin.type === 'project' && (
              <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                <button className="flex-1 bg-white text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Github size={16} />
                  Code
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <ExternalLink size={16} />
                  Demo
                </button>
              </div>
            )}
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            pin.type === 'profile' ? 'bg-blue-100 text-blue-800' :
            pin.type === 'project' ? 'bg-green-100 text-green-800' :
            pin.type === 'certification' ? 'bg-purple-100 text-purple-800' :
            pin.type === 'achievement' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {pin.type.charAt(0).toUpperCase() + pin.type.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-2">
          {pin.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {pin.subtitle}
        </p>
        
        {pin.description && (
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">
            {pin.description}
          </p>
        )}

        {/* Tags */}
        {pin.tags && pin.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {pin.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {pin.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{pin.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Profile specific content */}
        {pin.type === 'profile' && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">CGPA: 9.11</p>
                <p className="text-sm text-gray-600">500+ LeetCode</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">CSE Student</p>
                <p className="text-sm text-gray-600">SNIST</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinterestPin;
