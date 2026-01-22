
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-100 pb-2">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-50"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <h4 className="text-lg font-medium text-slate-500 mb-4">{exp.company}</h4>
              <p className="text-slate-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Academic Excellence</h3>
            <p className="text-slate-400">Sheridan College | Business Analysis & Process Management</p>
            <p className="text-slate-400">Postgraduate Certificate with Honours (GPA: 3.63)</p>
          </div>
          <div className="text-center md:text-right">
             <div className="text-3xl font-bold text-blue-400">7+ Years</div>
             <p className="text-sm text-slate-400 uppercase tracking-widest">Industry Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
