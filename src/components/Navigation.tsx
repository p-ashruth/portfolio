import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[999999] block !flex"
      style={{
        visibility: "visible",
        opacity: "1",
        pointerEvents: "auto",
        position: "fixed",
        zIndex: "999999",
        display: "block",
      }}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-black/95 shadow-2xl border-white/20"
            : "bg-black/90 border-gray-700/50"
        } backdrop-blur-lg rounded-full px-6 py-3 border opacity-100 visible`}
        style={{
          visibility: "visible",
          opacity: "1",
          display: "flex",
          pointerEvents: "auto",
        }}
      >
        <div className="flex space-x-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-5 py-2 font-medium transition-all rounded-full ${
                scrolled
                  ? "text-white hover:bg-white hover:text-black"
                  : "text-gray-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
