
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-40 pb-32 px-6 hero-pattern min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50/50 border border-blue-100 rounded-full animate-fade-in-up backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
          Trusted Salesforce Partner
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] max-w-5xl tracking-tight animate-fade-in-up animate-delay-1">
          Modernizing <span className="gradient-text">Salesforce</span> <br /> 
          <span className="text-slate-900">With AI-First Strategy</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-2">
          Senior Engineer & Consultant. Specialist in <strong>Agentforce AI</strong>, <strong>LWC</strong>, and building mission-critical enterprise architectures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up animate-delay-3">
          <button 
            onClick={() => scrollTo('#contact')}
            className="group relative bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/20 active:scale-95"
          >
            Start Your Project
            <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
          <button 
            onClick={() => scrollTo('#projects')}
            className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:border-slate-300 transition-all shadow-xl active:scale-95"
          >
            Explore Case Studies
          </button>
        </div>
        
        <div className="mt-24 pt-10 border-t border-slate-200/50 w-full max-w-4xl flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-40 animate-fade-in-up animate-delay-3">
          <span className="font-black text-xl md:text-2xl">LWC</span>
          <span className="font-black text-xl md:text-2xl">Agentforce</span>
          <span className="font-black text-xl md:text-2xl">Sales Cloud</span>
          <span className="font-black text-xl md:text-2xl">Service Cloud</span>
          <span className="font-black text-xl md:text-2xl">OmniStudio</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
