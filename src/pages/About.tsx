import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Briefcase, GraduationCap, Heart, Cpu, Globe, Server, CheckSquare, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const experiences = [
    {
      period: '2023 - Sekarang',
      role: 'IT Support & Systems Maintenance',
      company: 'Sentral Cargo (Jakarta)',
      description: 'Menjaga keandalan infrastruktur IT, jaringan logistik cabang utama, integrasi sistem CCTV, CCTV Investigation Request, serta merancang aplikasi pelaporan BBM armada internal berbasis Next.js & Supabase untuk mengeliminasi fraud manual.',
      color: 'border-brand-orange text-brand-orange bg-brand-orange/5'
    },
    {
      period: '2020 - 2023',
      role: 'Application Support Specialist (L1 / L2)',
      company: 'Telkom Indonesia',
      description: 'Selama 3 tahun bertugas memantau performa ribuan user application, meng-audit log error server, menyelesaikan tiket eskalasi teknis tingkat lanjut, dan menulis query SQL harian untuk pelaporan operasional terpadu.',
      color: 'border-brand-purple text-brand-purple bg-brand-purple/5'
    }
  ];

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Recharts'],
    backend: ['Supabase', 'PostgreSQL DB', 'Authentication API', 'Row Level Security (RLS)', 'Supabase Storage'],
    itOps: ['Server Maintenance', 'Log Auditing & Debugging', 'CCTV System Integration', 'Network Setup & LAN', 'Automated Scripting']
  };

  return (
    <div className="mesh-bg min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-900">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-purple/10 text-brand-purple font-mono font-bold text-xs rounded-lg border border-brand-purple/20">
          <GraduationCap className="w-3.5 h-3.5 text-brand-orange" />
          Mengenal Lebih Dekat
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 mt-4 mb-6 leading-tight">
          Tentang <span className="text-gradient-purple-orange font-extrabold">Igo</span>
        </h1>
        <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Dunia IT adalah kombinasi hobi dan panggilan profesional gw. Di bawah ini adalah riwayat belajar, karir, dan daftar skill teknis yang gw kuasai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column - Personal Profile card */}
        <div className="lg:col-span-5">
          <div className="bg-white border-3 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_#0f172a] sticky top-24">
            
            {/* Styled Avatar Placeholder */}
            <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl border-2 border-slate-900 overflow-hidden shadow-[4px_4px_0px_0px_#0f172a] bg-brand-yellow flex items-center justify-center">
              <span className="font-display font-black text-6xl text-slate-950 select-none">Igo</span>
              {/* Little Floating Tag */}
              <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-slate-950 text-white font-mono text-[9px] font-bold rounded">
                INDONESIA
              </div>
            </div>

            <h2 className="text-center font-display font-black text-2xl text-slate-900 mb-1">
              Muhammad Shibghotul 'Adalah
            </h2>
            <p className="text-center font-mono text-xs font-bold text-brand-orange mb-6">
              IT Support @ Sentral Cargo & Freelance Dev
            </p>

            <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6 text-center lg:text-left font-medium">
              Lulusan <strong>D3 Sistem Informasi Telkom University</strong> yang percaya kalau kode terbaik dihasilkan lewat "vibe-coding" yang menyenangkan tapi diaudit dengan standar tinggi. Gw suka ngulik sistem, memecahkan error, dan bikin form otomatis yang ngebantu admin kantor biar nggak lembur lagi!
            </p>

            <div className="border-t-2 border-slate-100 pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-brand-purple">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display font-extrabold text-xs text-slate-400">Pendidikan</span>
                  <span className="font-sans text-xs font-bold text-slate-800">D3 Sistem Informasi Telkom University</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-brand-orange">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display font-extrabold text-xs text-slate-400">Pengalaman</span>
                  <span className="font-sans text-xs font-bold text-slate-800">3+ Tahun Application Support Telkom, 2+ Tahun Logistik & Freelance</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-brand-teal">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display font-extrabold text-xs text-slate-400">Karakter Kerja</span>
                  <span className="font-sans text-xs font-bold text-slate-800">Santai tapi niat, solusi operasional riil</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="w-full py-3 bg-slate-900 text-white rounded-2xl font-display font-bold text-sm border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:bg-brand-purple hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-brand-yellow" />
                <span>Mari Kolaborasi!</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Right column - Story & Work Profile */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* My Story Section */}
          <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#0f172a]">
            <h2 className="font-display font-black text-2xl text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">📖</span> Cerita Singkat Gw
            </h2>
            <div className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
              <p>
                Karir gw dimulai sebagai mahasiswa <strong>D3 Sistem Informasi di Telkom University</strong>. Di sanalah dasar analisis sistem, database relasional, dan cara berpikir logis mulai terbentuk.
              </p>
              <p>
                Setelah lulus, gw langsung masuk ke industri telekomunikasi terbesar di Indonesia. Selama lebih dari <strong>3 tahun sebagai Application Support L1/L2 di Telkom Indonesia</strong>, gw digembleng untuk memecahkan insiden aplikasi skala nasional, membaca logs server ratusan megabyte, dan menyelesaikan error database secara real-time. Ini bikin insting "debugging" gw sangat tajam.
              </p>
              <p>
                Sekarang, gw bertugas sebagai <strong>IT Support di Sentral Cargo Jakarta</strong>. Logistik adalah industri super dinamis di mana setiap detik kelambatan sistem bisa menghambat ribuan paket. Selain menjaga kestabilan sistem LAN, printer thermal, dan kamera CCTV, gw hobi menciptakan sistem mandiri terintegrasi database Supabase untuk merapikan alur rekrutmen karyawan (ATS), pelaporan BBM sopir, hingga pengecekan rekaman investigasi CCTV.
              </p>
              <p>
                Di waktu malam, gw menyalurkan hasrat coding gw sebagai <strong>Freelance Web Developer</strong> untuk klien-klien bisnis yang membutuhkan landing page estetik berkinerja tinggi, dasbor admin terintegrasi, atau web internal kustom.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#0f172a]">
            <h2 className="font-display font-black text-2xl text-slate-900 mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-brand-purple" />
              Perjalanan Karir Teknis
            </h2>
            
            <div className="space-y-8 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10">
                  {/* Circle Indicator */}
                  <span className="absolute left-1.5 top-1.5 w-4.5 h-4.5 rounded-full bg-white border-4 border-slate-900"></span>
                  
                  <span className="inline-block px-2.5 py-1 text-[11px] font-mono font-bold rounded bg-slate-100 border border-slate-200 text-slate-600 mb-2">
                    {exp.period}
                  </span>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 leading-snug">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-xs text-brand-purple font-bold mb-3">
                    {exp.company}
                  </p>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#0f172a]">
            <h2 className="font-display font-black text-2xl text-slate-900 mb-6 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-brand-orange animate-spin" />
              Daftar Senjata & Keahlian Teknis
            </h2>

            <div className="space-y-6">
              {/* Frontend Skills */}
              <div>
                <h3 className="font-display font-extrabold text-sm text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span className="text-brand-purple">⚡</span> Frontend Engineering
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((s, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono font-bold bg-violet-50 text-brand-purple rounded-xl border border-violet-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h3 className="font-display font-extrabold text-sm text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span className="text-brand-teal">⚡</span> Database & Cloud Service
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((s, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono font-bold bg-teal-50 text-brand-teal rounded-xl border border-teal-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* IT Ops Skills */}
              <div>
                <h3 className="font-display font-extrabold text-sm text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span className="text-brand-orange">⚡</span> IT Support & Operasional
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.itOps.map((s, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono font-bold bg-orange-50 text-brand-orange rounded-xl border border-orange-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
