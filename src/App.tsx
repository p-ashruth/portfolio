import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <WorkExperience />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <Certifications />
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <Contact />
        </ScrollReveal>
      </main>

      <footer className="bg-black/50 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p> Thank you for visiting! </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
