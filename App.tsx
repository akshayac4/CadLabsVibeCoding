
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 text-slate-500 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xs">A</div>
            <span className="font-bold text-white tracking-tight">Akshay Chauhan</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Akshay Chauhan Consulting. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="https://trailblazer.me/id/akshaychauhan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Trailblazer Profile</a>
            <a href="https://linkedin.com/in/akshay-chauhan-b98455129/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
      
      <AIConsultant />
    </div>
  );
};

export default App;
