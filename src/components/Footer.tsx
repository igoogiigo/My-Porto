import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Linkedin, MessageSquare, Flame } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t-4 border-slate-950 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple flex items-center justify-center border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,0.8)] transition-all">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">igo.dev</span>
            </Link>
            
            <p className="text-slate-400 text-sm max-w-md leading-relaxed mb-6 font-medium">
              Dual-role profesional: Memastikan infrastruktur IT Sentral Cargo Jakarta berjalan mulus di siang hari, dan merakit web app kencang anti-lelet berbasis Supabase di malam hari.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/shibghotul"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border-2 border-slate-700 hover:border-brand-purple hover:bg-brand-purple/20 transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/shibghotul"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border-2 border-slate-700 hover:border-brand-teal hover:bg-brand-teal/20 transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6281211112222?text=Halo%20Igo,%20gw%20tertarik%20buat%20bikin%20website%20nih!"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border-2 border-slate-700 hover:border-brand-orange hover:bg-brand-orange/20 transition-all cursor-pointer"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base text-brand-yellow mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm font-semibold text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/vibe-coding" className="hover:text-white transition-colors">Vibe-Coding Workflow ⚡</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Portofolio Project</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Tentang Igo</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Hubungi / Chat Gw</Link>
              </li>
            </ul>
          </div>

          {/* Tech/Vibe info */}
          <div>
            <h3 className="font-display font-bold text-base text-brand-orange mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4 text-brand-orange animate-bounce" />
              Vibe-Coding Stack
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Website ini di-vibe-code dengan penuh cinta menggunakan Google AI Studio, dipoles rapi pakai Claude AI, dan dideploy cepat di Vercel.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-[10px] font-mono font-bold bg-slate-800 text-brand-purple rounded border border-slate-700">React 19</span>
              <span className="px-2 py-1 text-[10px] font-mono font-bold bg-slate-800 text-brand-orange rounded border border-slate-700">TypeScript</span>
              <span className="px-2 py-1 text-[10px] font-mono font-bold bg-slate-800 text-brand-teal rounded border border-slate-700">Tailwind v4</span>
              <span className="px-2 py-1 text-[10px] font-mono font-bold bg-slate-800 text-brand-yellow rounded border border-slate-700">Supabase</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="border-t border-slate-850 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-medium">
          <p>© {currentYear} Muhammad Shibghotul 'Adalah. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Built with <span className="text-red-500">❤️</span> by <span className="font-bold text-slate-400">Igo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
