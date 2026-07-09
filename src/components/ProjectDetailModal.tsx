import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Code, CheckCircle, ShieldCheck, AlertCircle, Sparkles, Send, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  // Pre-filled WA text based on project interest
  const waUrl = `https://wa.me/6281382876886?text=Halo%20Igo,%20gw%20tertarik%20sama%20studi%20kasus%20project%20*${encodeURIComponent(project.title)}*%20di%20portfolio%20lu.%20Bisa%20jelasin%20lebih%20lanjut?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-4xl bg-white rounded-3xl border-3 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] overflow-hidden z-10 flex flex-col max-h-[90vh]"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b-2 border-slate-900 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 border border-slate-900"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500 border border-slate-900"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 border border-slate-900"></span>
            <span className="ml-2 font-mono text-xs font-bold text-slate-500 hidden sm:inline">case-study-details.ts</span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border-2 border-slate-900 bg-white text-slate-800 hover:bg-brand-orange hover:text-white hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-5 sm:p-8 flex-grow">
          {/* Hero Header */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 items-center mb-8">
            <div className="md:col-span-3">
              <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-brand-purple/10 text-brand-purple border border-brand-purple/20 mb-3">
                {project.category}
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900 mb-2 leading-tight">
                {project.title}
              </h2>
              <p className="font-sans text-brand-orange font-bold text-base sm:text-lg mb-4">
                {project.tagline}
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs font-mono font-bold text-slate-500">
                <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <Code className="w-4 h-4 text-brand-purple" />
                  <span>Role: {project.role}</span>
                </div>
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-brand-purple/10 hover:bg-brand-purple hover:text-white p-2 rounded-lg border border-brand-purple/20 transition-colors text-brand-purple"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <div className="md:col-span-2 rounded-2xl border-2 border-slate-900 overflow-hidden shadow-[4px_4px_0px_0px_#0f172a] h-40 md:h-48">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Detailed Content Grid (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Problem Section */}
            <div className="p-5 rounded-2xl border-2 border-slate-900 bg-red-50/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-full filter blur-xl opacity-40"></div>
              <h3 className="font-display font-extrabold text-lg text-red-950 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                Problem / Kendala Riil
              </h3>
              <p className="font-sans text-sm text-red-900/90 leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>

            {/* Solution Section */}
            <div className="p-5 rounded-2xl border-2 border-slate-900 bg-emerald-50/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-full filter blur-xl opacity-40"></div>
              <h3 className="font-display font-extrabold text-lg text-emerald-950 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                Solusi & Strategi Dev
              </h3>
              <p className="font-sans text-sm text-emerald-900/90 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features Column */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-slate-900 bg-white mb-8 shadow-[4px_4px_0px_0px_#0f172a]">
            <h3 className="font-display font-extrabold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-purple" />
              Fitur Utama yang Dibangun
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-700">
                  <span className="w-5 h-5 rounded bg-brand-yellow flex items-center justify-center shrink-0 border border-slate-900 text-xs font-bold text-slate-900 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Box */}
          <div className="p-5 rounded-2xl border-2 border-slate-900 bg-slate-50">
            <h3 className="font-display font-bold text-sm text-slate-500 uppercase tracking-wider mb-3">
              Full Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-mono font-bold bg-white text-slate-800 rounded-xl border-2 border-slate-200 shadow-[1px_1px_0px_0px_#cbd5e1] hover:border-slate-900 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA Banner */}
        <div className="p-5 border-t-2 border-slate-900 bg-brand-yellow/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs sm:text-sm text-slate-700 font-bold text-center sm:text-left">
            Butuh sistem sejenis atau custom platform buat bisnismu?
          </p>
          <a
            href={waUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-brand-purple text-white hover:text-white rounded-xl font-display text-sm font-bold border-2 border-slate-900 hover:shadow-[3px_3px_0px_0px_#0f172a] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-brand-yellow" />
            <span>Diskusiin Project Ini</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
