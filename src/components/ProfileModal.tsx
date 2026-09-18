import {
  X,
  Github,
  Linkedin,
  Code,
  FileText,
  MapPin,
  Calendar,
  GraduationCap,
} from "lucide-react";

interface ProfileModalProps {
  onClose: () => void;
}

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  const skills = [
    { name: "Programming Languages", level: 90, color: "bg-blue-500" },
    { name: "Data Structures & Algorithms", level: 85, color: "bg-green-500" },
    { name: "Machine Learning", level: 85, color: "bg-purple-500" },
    { name: "Full Stack Development", level: 88, color: "bg-orange-500" },
  ];

  const education = [
    {
      year: "2025",
      degree: "Bachelor of Technology in CSE",
      institution: "Sreenidhi Institute of Science & Technology",
      grade: "CGPA: 9.11",
      description:
        "Specialized in Data Structures, Algorithms, and Full Stack Development.",
    },
    {
      year: "2021",
      degree: "Intermediate Education",
      institution: "Board of Intermediate Education",
      grade: "MPC Stream",
      description:
        "Mathematics, Physics, Chemistry with strong analytical foundation.",
    },
    {
      year: "2019",
      degree: "Secondary Education",
      institution: "Board of Secondary Education",
      grade: "Excellent Performance",
      description:
        "Strong foundation in core subjects with early interest in technology.",
    },
  ];

  const achievements = [
    "500+ LeetCode Problems Solved",
    "CGPA: 9.11 in Engineering",
    "Multiple AI/ML Projects",
    "Full Stack Development Experience",
    "ServiceNow Certified",
    "Machine Learning Certified",
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 pointer-events-none">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto">
        {/* Header */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Profile Image */}
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Ashruth Pamidimarri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 p-8">
          {/* Basic Info */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Ashruth Pamidimarri
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Full Stack Developer & AI Enthusiast
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap size={16} />
                <span>CSE Student at SNIST</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://github.com/p-ashruth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashruth-pamidimarri-b96798314/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/indefinite/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Code size={16} />
                LeetCode
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>

            {/* About */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a Computer Science Engineering student at SNIST with a
                strong foundation in Data Structures and Algorithms and
                experience in C, Java, Python, and JavaScript.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With 500+ LeetCode problems solved, a 9.11 CGPA, and projects
                like LRU Cache Simulator, FarmSmartAI, and a Trie-based
                AutoSearch Engine, I thrive on solving complex challenges.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Technical Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-4 bg-white rounded-lg border border-gray-200"
                >
                  <div className="text-center min-w-[60px]">
                    <span className="text-lg font-bold text-gray-800">
                      {edu.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 text-sm mb-2 font-medium">
                      {edu.grade}
                    </p>
                    <p className="text-gray-500 text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
