
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle Scroll Progress safely
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-400 font-sans overflow-x-hidden">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_40%)] pointer-events-none"></div>

      <Navbar />

      <main className="pt-24">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;