import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../constants/projects';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { Search, SlidersHorizontal, Layers, Sparkles, HelpCircle, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FilterType = 'All' | 'Client Project' | 'Internal Perusahaan' | 'Personal Project';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter Categories list
  const filterCategories: { label: string; value: FilterType }[] = [
    { label: 'Semua Project 🗂️', value: 'All' },
    { label: 'Client Project 🤝', value: 'Client Project' },
    { label: 'Internal Perusahaan 🏢', value: 'Internal Perusahaan' },
    { label: 'Personal Project 🚀', value: 'Personal Project' },
  ];

  // Filtering & Search Logic combined
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="mesh-bg min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-900">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/10 text-brand-orange font-mono font-bold text-xs rounded-lg border border-brand-orange/20">
          <Code2 className="w-3.5 h-3.5 text-brand-purple" />
          Showcase Portofolio
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 mt-4 mb-6 leading-tight">
          Koleksi <span className="text-gradient-purple-orange font-extrabold">Project Pilihan</span>
        </h1>
        <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Dari dashboard operasional logistik berskala korporat, hingga sistem scanner cerdas berbasis kecerdasan buatan (AI) untuk klien freelance dan riset pribadi.
        </p>
      </div>

      {/* Search & Filtering Controllers */}
      <div className="bg-white rounded-3xl border-2 border-slate-900 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#0f172a] mb-12 flex flex-col gap-6">
        
        {/* Search Input and Decorative title */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-brand-purple shrink-0" />
            <span className="font-display font-extrabold text-base text-slate-800">Filter & Cari Sistem</span>
          </div>
          
          {/* Search bar inputs */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Cari berdasarkan judul, fitur, atau tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-11 bg-slate-50 text-slate-900 placeholder-slate-400 border-2 border-slate-300 rounded-xl focus:border-brand-purple focus:outline-none focus:bg-white text-sm font-semibold transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          </div>
        </div>

        {/* Filter Categories Badges */}
        <div className="flex flex-wrap gap-2.5 pt-2 border-t border-slate-100">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 text-sm font-display font-bold rounded-xl border-2 transition-all cursor-pointer ${
                activeFilter === cat.value
                  ? 'bg-slate-900 text-white border-slate-900 shadow-[3px_3px_0px_0px_#7c3aed] -translate-y-0.5'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-950 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid Display */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-24 bg-white border-2 border-dashed border-slate-300 rounded-3xl p-8 max-w-xl mx-auto">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-display font-black text-xl text-slate-800 mb-2">Project Tidak Ditemukan</h3>
          <p className="font-sans text-sm text-slate-500 leading-relaxed">
            Nggak ketemu project dengan kata kunci "<span className="font-bold text-brand-orange">{searchQuery}</span>" di kategori ini. Coba ketik kata kunci lain atau bersihkan filter pencarian!
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('All');
            }}
            className="mt-6 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-display font-bold hover:bg-brand-purple transition-all cursor-pointer"
          >
            Reset Filter & Cari Ulang
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                project={project}
                onViewDetail={(p) => setSelectedProject(p)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Floating CTA Banner inside Project Catalog */}
      <section className="mt-20 p-8 sm:p-12 rounded-3xl border-3 border-slate-900 bg-gradient-to-br from-brand-purple/5 to-brand-orange/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Background Spark */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full filter blur-2xl"></div>

        <div className="max-w-2xl">
          <span className="px-2.5 py-1 bg-brand-purple/10 text-brand-purple font-mono font-bold text-[10px] rounded border border-brand-purple/20 uppercase tracking-wider block w-max mb-3">
            Butuh Custom System?
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-3">
            Bikin Sistem Cerdas Sendiri Buat Bisnismu
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Punya masalah operasional di kantor, butuh automasi form/rekap laporan, sistem ticketing, atau dashboard audit? Konsultasi santai dan bedah solusinya bareng Igo!
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <a
            href="https://wa.me/6281211112222?text=Halo%20Igo,%20gw%20nemu%20portfolio%20lu%20dan%20tertarik%20buat%20bikin%20sistem%20custom%20nih!"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 hover:bg-brand-purple text-white hover:text-white rounded-2xl font-display font-bold text-base border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Konsultasikan Gratis Sekarang</span>
          </a>
        </div>
      </section>

      {/* Case-Study Detail Modal Component */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
