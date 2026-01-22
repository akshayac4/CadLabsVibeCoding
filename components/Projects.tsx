
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Engineering Excellence</h3>
            <p className="text-slate-500 text-lg">Delivering robust, scalable, and highly performant solutions for Fortune 500 clients and startups alike.</p>
          </div>
          <a href="https://linkedin.com/in/akshay-chauhan-b98455129/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 group">
            View LinkedIn Activity 
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="px-3 py-1 bg-blue-600 text-[10px] font-black text-white uppercase tracking-widest rounded-lg mb-2 inline-block">
                    {project.tech[0]}
                  </span>
                  <h4 className="text-3xl font-bold text-white tracking-tight">{project.title}</h4>
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-0.5 flex-1 bg-slate-200"></div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.role}</span>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-slate-200 text-slate-500 rounded-xl text-xs font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-[0.98]"
                >
                  Case Study Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 animate-fade-in-up">
          <div 
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative bg-white w-full max-w-5xl max-h-full overflow-y-auto rounded-[3rem] shadow-2xl z-10 scrollbar-hide">
            {/* Header / Banner */}
            <div className="relative h-64 md:h-96 w-full">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-8 pb-20 md:px-20 -mt-20 relative">
              <div className="inline-block px-4 py-2 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-xl mb-6 shadow-xl shadow-blue-500/30">
                Case Study
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-none">
                {selectedProject.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-4">The Challenge</h4>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                      {selectedProject.fullContent.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-4">Our Approach</h4>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      {selectedProject.fullContent.solution}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-12">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Key Impacts</h4>
                    <ul className="space-y-6">
                      {selectedProject.fullContent.impact.map((imp, idx) => (
                        <li key={idx} className="flex gap-4">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <span className="text-slate-800 font-bold leading-tight">{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-black">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-slate-100 flex justify-center">
                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    window.location.hash = '#contact';
                  }}
                  className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 active:scale-95"
                >
                  Start a Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
