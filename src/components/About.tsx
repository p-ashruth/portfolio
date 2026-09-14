const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Content - smaller section */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              I’m a Computer Science Engineering student at SNIST with a strong foundation in Data Structures and Algorithms and experience in C, Java, Python, and JavaScript.
            </p>
            <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              With 500+ LeetCode problems solved, a 9.11 CGPA, and projects like LRU Cache Simulator, FarmSmartAI, and a Trie-based AutoSearch Engine, I thrive on solving complex challenges.
            </p>
          </div>

          {/* Photo - bigger section */}
          <div className="lg:col-span-3 relative flex justify-center items-center">
            <div className="relative group">
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-emerald-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-8 h-8 bg-teal-500/20 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-10 w-6 h-6 bg-emerald-400/30 rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-1/4 -right-6 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>

              {/* Main image container - 3:4 aspect ratio */}
              <div className="w-72 h-96 md:w-80 md:h-[427px] lg:w-96 lg:h-[512px] rounded-3xl overflow-hidden shadow-2xl border-3 border-white relative group-hover:border-white transition-all duration-500">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(16,185,129,0.4)]"></div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-[2rem] transform rotate-2 group-hover:rotate-4 transition-transform duration-500"></div>
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-600/3 to-purple-600/3 rounded-[2rem] transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500"></div>
            </div>
          </div>
        </div>

        {/* Tech Skills Section - Icon Grid Layout */}
        <div className="bg-black rounded-3xl p-8 mb-12 border border-white shadow-2xl">
          <div className="text-center mb-12">
            <p className="text-white text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              WHAT I BRING TO THE TABLE
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Tech Skills
            </h3>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
            {/* First Row */}
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Python</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Java</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Power BI</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>PostgreSQL</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>MySQL</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>git</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>docker</span>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>JavaScript</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>React JS</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Tailwind CSS</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Node JS</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-12 h-12 mb-3" />
              <span className="text-black font-semibold text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Express JS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
