const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
        {/* LEFT - SOFTWARE */}
        <div className="text-left space-y-4">
          <div
            className="text-sm md:text-base text-white opacity-80"
            style={{
              fontFamily: "Oswald, Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            HEY, THIS IS
          </div>

          <div
            className="text-lg md:text-3xl font-bold text-white uppercase tracking-wider"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            ASHRUTH PAMIDIMARRI
          </div>

          {/* BIG SOFTWARE */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: "800" }}
          >
            SOFTWARE
          </h1>

          <p
            className="text-sm text-white mt-6 leading-relaxed max-w-xs opacity-90"
            style={{
              fontFamily: "Lato, sans-serif",
              fontSize: 17,
            }}
          >
            Building innovative solutions and creating seamless user experiences
            with modern technologies and best practices.
          </p>
        </div>

        {/* CENTER - PROFILE IMAGE */}
        <div className="flex justify-center translate-y-4">
          {" "}
          {/* moved slightly down */}
          <div className="relative">
            <br></br>
            <br></br>
            <br></br>
            <div className="w-80 h-[427px] md:w-96 md:h-[512px] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={`${import.meta.env.BASE_URL}pictures/profile/Warangal.jpg`}
                alt="Ashruth Pamidimarri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT - DEVELOPER + ICONS */}
        <div className="flex flex-col items-end space-y-10 text-right">
          {/* BIG DEVELOPER */}
          <br />
          <br />
          <h1
            className="mr-15 text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: "800", padding: "1px" }}
          >
            DEVELOPER
          </h1>

          {/* SOCIAL ICONS */}
          <div className="mr-12 flex justify-end gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/p-ashruth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white/50 group backdrop-blur-sm"
            >
              <svg
                className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a9.36 9.36 0 0 1 6.006 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ashruth-pamidimarri-b96798314/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white/50 group backdrop-blur-sm"
            >
              <svg
                className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/indefinite/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white/50 group backdrop-blur-sm"
            >
              <svg
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1gZylHRhSo3dnS9QGGHJdbr9o7lisEmgJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white/50 group backdrop-blur-sm"
            >
              <svg
                className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
