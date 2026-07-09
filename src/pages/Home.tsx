import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants/projects';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { ArrowRight, Code2, Sparkles, MessageSquare, Terminal, Server, Shield, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Take the first 3 featured projects for the homepage
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="mesh-bg min-h-screen pb-20 font-sans text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border-2 border-emerald-500/25 text-emerald-800 text-xs font-bold font-mono mb-6 animate-pulse-slow">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Available for Freelance & IT Opportunities</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 leading-tight tracking-tight mb-4">
              Halo, gw <span className="text-gradient-purple-orange relative font-extrabold">Igo</span>! <br />
              IT Support + Web Dev
            </h1>

            <p className="font-display text-lg sm:text-xl text-slate-700 font-semibold mb-6 max-w-2xl">
              Nama lengkap gw <span className="underline decoration-brand-orange decoration-3 underline-offset-4">Muhammad Shibghotul 'Adalah</span>. IT Support di perusahaan logistik <span className="text-brand-orange font-bold">Sentral Cargo Jakarta</span> sekaligus Freelance Web Developer yang hobi <span className="italic text-brand-purple">"vibe-coding"</span>!
            </p>

            <p className="font-sans text-slate-600 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
              Gw bikin website super responsif, fungsional, dan aman menggunakan kombinasi maut <strong>React + TypeScript + Supabase</strong>. Workflow gw dipercepat pakai AI, tapi kualitasnya gw audit detail manual baris demi baris.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/6281382876886?text=Halo%20Igo,%20gw%20nemu%20portfolio%20lu%20dan%20tertarik%20buat%20ngobrol%20nih!"
                target="_blank"
                referrerPolicy="no-referrer"
                className="px-8 py-4 bg-brand-purple text-white rounded-2xl font-display font-bold text-base border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:bg-brand-orange hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-brand-yellow" />
                <span>Chat Gw via WhatsApp</span>
              </a>
              
              <Link
                to="/projects"
                className="px-8 py-4 bg-white text-slate-800 rounded-2xl font-display font-bold text-base border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:bg-slate-50 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all flex items-center justify-center gap-1"
              >
                <span>Lihat Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Interactive Decorative Card Grid */}
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              
              {/* Back Decorative elements */}
              <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-brand-orange/15 border-2 border-dashed border-slate-300"></div>
              
              {/* Main Visual Box */}
              <div className="relative w-full h-full bg-white rounded-3xl border-3 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] p-6 flex flex-col justify-between overflow-hidden">
                {/* Header Dots */}
                <div className="flex items-center gap-2 mb-6 border-b pb-4 border-slate-100">
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-purple border border-slate-900"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-orange border border-slate-900"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-teal border border-slate-900"></span>
                  <span className="ml-2 font-mono text-[10px] text-slate-400 font-bold">sys-info.sh</span>
                </div>

                {/* Body Details */}
                <div className="flex-grow space-y-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">Current Role</span>
                    <span className="font-display font-extrabold text-slate-800 text-sm flex items-center gap-1.5 mt-0.5">
                      <Server className="w-4 h-4 text-brand-orange" />
                      IT Support @ Sentral Cargo
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">Side Quest</span>
                    <span className="font-display font-extrabold text-slate-800 text-sm flex items-center gap-1.5 mt-0.5">
                      <Code2 className="w-4 h-4 text-brand-purple" />
                      Freelance Full-stack Developer
                    </span>
                  </div>

                  <div className="p-3 bg-brand-purple/5 rounded-xl border-2 border-brand-purple/20">
                    <span className="font-mono text-[10px] text-brand-purple uppercase font-bold block">Methodology</span>
                    <span className="font-display font-black text-brand-purple text-base flex items-center gap-1.5 mt-0.5">
                      <Sparkles className="w-4 h-4 text-brand-orange animate-spin" />
                      Vibe-Coding Stack ⚡
                    </span>
                  </div>
                </div>

                {/* Mini terminal footer */}
                <div className="mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-400">
                  <span className="text-slate-500">~/igo-dev$</span> npm run build <br />
                  <span className="text-brand-teal">✓</span> 8 core projects generated. <br />
                  <span className="text-brand-orange">⚡</span> Speed level: Vibe-Coding!
                </div>
              </div>

              {/* Little Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand-yellow text-slate-950 px-4 py-2 rounded-xl font-display font-black border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] text-xs rotate-6 hover:rotate-0 transition-all">
                D3 Telkom Alumni 🎓
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Superpowers: IT Support meets Web Dev */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple font-mono font-bold text-xs rounded-lg border border-brand-purple/20">
            Kelebihan Gw
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 mt-3 mb-4">
            Mengapa IT Support + Web Dev Adalah Kombinasi Maut?
          </h2>
          <p className="text-slate-600 font-sans font-medium text-sm sm:text-base leading-relaxed">
            Banyak developer cuma jago bikin visual tapi buta soal infrastruktur, keamanan, dan pemecahan masalah real-time. Dengan background IT Support logistik, gw bawa standard kerja beda:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-[-4px] transition-transform">
            <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border-2 border-brand-purple flex items-center justify-center text-brand-purple mb-5">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">Infrastruktur & Server Aman</h3>
            <p className="font-sans text-slate-600 text-sm leading-relaxed">
              Gw biasa handle urusan operasional logistik Sentral Cargo. Gw paham pentingnya kestabilan server, setup backup, integrasi database, dan deployment anti-lelet.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-[-4px] transition-transform">
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border-2 border-brand-teal flex items-center justify-center text-brand-teal mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">Security-Oriented Mindset</h3>
            <p className="font-sans text-slate-600 text-sm leading-relaxed">
              Backend Supabase di-configure aman pakai <strong>Row Level Security (RLS)</strong>. Akses API key dijaga ketat di server-side, bukan bocor di browser klien.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-[-4px] transition-transform">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border-2 border-brand-orange flex items-center justify-center text-brand-orange mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">Vibe-Coding at Scale</h3>
            <p className="font-sans text-slate-600 text-sm leading-relaxed">
              Memanfaatkan AI (Gemini + Claude) untuk mempercepat perakitan program, sehingga pengerjaan proyek freelance bisa 3x lebih cepat tanpa mengorbankan kualitas code-base.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange font-mono font-bold text-xs rounded-lg border border-brand-orange/20">
              Hasil Karya
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 mt-3">
              Project Unggulan Pilihan
            </h2>
          </div>
          
          <Link
            to="/projects"
            className="px-5 py-3 bg-slate-900 hover:bg-brand-purple text-white hover:text-white rounded-xl font-display font-bold text-sm border-2 border-slate-900 hover:shadow-[3px_3px_0px_0px_#0f172a] hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
          >
            <span>Lihat Semua Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                project={project}
                onViewDetail={(p) => setSelectedProject(p)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Teaser Vibe-Coding Workflow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl border-3 border-slate-950 shadow-[8px_8px_0px_0px_#0f172a] my-10 relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/20 rounded-full filter blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/20 rounded-full filter blur-3xl opacity-50 -ml-20 -mb-20"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <Terminal className="w-12 h-12 text-brand-yellow mb-4 animate-bounce" />
          <h2 className="font-display font-black text-2xl sm:text-4xl mb-4 leading-tight">
            Bagaimana Gw Merakit Website 3x Lebih Cepat?
          </h2>
          <p className="font-sans text-slate-300 text-sm sm:text-base mb-8 leading-relaxed max-w-2xl">
            Gw memadukan kecerdasan buatan dari <strong>Google AI Studio</strong> dan keandalan audit keamanan dari <strong>Claude AI</strong> untuk melakukan "vibe-coding". Workflow ini terbukti aman, super efisien, dan menyenangkan!
          </p>
          
          <Link
            to="/vibe-coding"
            className="px-6 py-3.5 bg-brand-yellow hover:bg-white text-slate-900 rounded-xl font-display font-bold text-sm border-2 border-slate-950 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.25)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all"
          >
            Intip Alur Kerja Vibe-Coding Gw ⚡
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 mb-6">
          Bikin Project Bareng Gw?
        </h2>
        <p className="font-sans text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
          Punya ide aplikasi, butuh merancang dashboard internal, meng-audit sistem, atau renovasi total website instansimu? Ngobrol santai aja dulu, gw bantu bedah sistem dan hitung estimasi biayanya gratis!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6281382876886?text=Halo%20Igo,%20gw%20nemu%20portfolio%20lu%20dan%20tertarik%20buat%20ngobrol%20nih!"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-brand-purple text-white rounded-2xl font-display font-bold text-base border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-brand-yellow" />
            <span>Chat via WhatsApp ("Fast Response")</span>
          </a>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 rounded-2xl font-display font-bold text-base border-2 border-slate-900 hover:bg-slate-50 shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-0.5 transition-all"
          >
            Kirim Email Kontak Form
          </Link>
        </div>
      </section>

      {/* Detail Modal Component */}
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
