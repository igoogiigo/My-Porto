import React from 'react';
import { Project } from '../types';
import { ExternalLink, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetail: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetail }: ProjectCardProps) {
  // Define colors based on category
  const categoryStyles = {
    'Client Project': {
      bg: 'bg-teal-50 text-teal-800 border-teal-200',
      text: 'text-brand-teal',
      label: 'Klien Project'
    },
    'Internal Perusahaan': {
      bg: 'bg-violet-50 text-violet-800 border-violet-200',
      text: 'text-brand-purple',
      label: 'Internal Sentral Cargo'
    },
    'Personal Project': {
      bg: 'bg-amber-50 text-amber-800 border-amber-200',
      text: 'text-brand-orange',
      label: 'Personal Project'
    }
  };

  const style = categoryStyles[project.category] || categoryStyles['Personal Project'];

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl overflow-hidden flex flex-col h-full playful-shadow transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0f172a]">
      {/* Visual Placeholder/Image */}
      <div className="relative h-48 bg-slate-100 border-b-2 border-slate-900 overflow-hidden group">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-display font-bold rounded-lg border-2 border-slate-900 bg-white text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]`}>
            {style.label}
          </span>
        </div>

        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewDetail(project)}
            className="px-4 py-2 bg-white text-slate-900 rounded-xl font-display font-bold border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:bg-brand-yellow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all cursor-pointer"
          >
            Buka Detail Studi Kasus
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-slate-400 flex items-center gap-1">
              <Code className="w-3.5 h-3.5 text-brand-purple" />
              {project.role}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2 line-clamp-1 group-hover:text-brand-purple transition-colors">
            {project.title}
          </h3>

          <p className="font-sans text-xs font-semibold text-brand-purple mb-3 bg-violet-50/50 p-1.5 px-3 rounded-lg border border-violet-100 inline-block">
            {project.tagline}
          </p>

          <p className="font-sans text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          {/* Tech Stack Mini-Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] font-mono font-bold bg-slate-50 text-slate-600 rounded-md border border-slate-200"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-slate-50 text-slate-400 rounded-md border border-slate-200">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          <button
            onClick={() => onViewDetail(project)}
            className="w-full py-2.5 bg-slate-50 hover:bg-brand-yellow/35 text-slate-800 hover:text-slate-950 rounded-xl font-display text-sm font-bold border-2 border-slate-900 hover:shadow-[3px_3px_0px_0px_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Detail Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
