import React, { useState, useEffect } from 'react';
import { VIBE_STEPS_DATA } from '../constants/projects';
import { Sparkles, Terminal, ShieldCheck, Play, RotateCcw, AlertTriangle, ArrowDown, Database, Cpu, HardDriveUpload } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function VibeCoding() {
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [simLog, setSimLog] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const steps = VIBE_STEPS_DATA;

  // Simulator Engine
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      if (simulationStep === 0) {
        setSimLog(['[SYSTEM] Memulai Vibe-Coding Simulation Engine v2.0...', '[SYSTEM] Membaca requirement klien...']);
        setProgress(10);
        timer = setTimeout(() => setSimulationStep(1), 1500);
      } else if (simulationStep === 1) {
        setSimLog(prev => [
          ...prev,
          '[AI STUDIO] Menghubungkan ke Gemini Flash API...',
          '[AI STUDIO] Meng-generate base boilerplate React + Vite + TS...',
          '[AI STUDIO] ✓ Base layout & Routing selesai dibuat (23,500 token).'
        ]);
        setProgress(35);
        timer = setTimeout(() => setSimulationStep(2), 2000);
      } else if (simulationStep === 2) {
        setSimLog(prev => [
          ...prev,
          '[CLAUDE AI] Memulai Audit Kode & Analisis Kerentanan...',
          '[CLAUDE AI] Menemukan dependensi tidak terpakai: dihapus.',
          '[CLAUDE AI] Menulis ulang custom hooks untuk state persistence...',
          '[CLAUDE AI] ✓ Audit performa & Typescript typing aman!'
        ]);
        setProgress(60);
        timer = setTimeout(() => setSimulationStep(3), 2200);
      } else if (simulationStep === 3) {
        setSimLog(prev => [
          ...prev,
          '[SUPABASE] Menginisialisasi client Supabase...',
          '[SUPABASE] Menyiapkan PostgreSQL DB & Table Schemas...',
          '[SUPABASE] Memasang Row Level Security (RLS) di table "contacts"...',
          '[SUPABASE] ✓ Auth & DB terhubung sempurna!'
        ]);
        setProgress(85);
        timer = setTimeout(() => setSimulationStep(4), 2000);
      } else if (simulationStep === 4) {
        setSimLog(prev => [
          ...prev,
          '[VERCEL] Menghubungkan branch main Git...',
          '[VERCEL] Menjalankan script: npm run build...',
          '[VERCEL] Mengunggah static assets...',
          '[SYSTEM] 🎉 WEBSITE SUKSES DEPLOYED ONLINE!',
          '[SYSTEM] URL: https://project-klien-anda.vercel.app'
        ]);
        setProgress(100);
        setIsSimulating(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isSimulating, simulationStep]);

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(0);
    setSimLog([]);
    setProgress(0);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setSimulationStep(0);
    setSimLog([]);
    setProgress(0);
  };

  return (
    <div className="mesh-bg min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-900">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-purple/10 text-brand-purple font-mono font-bold text-xs rounded-lg border border-brand-purple/20">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-spin" />
          Workflow Rahasia Igo
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 mt-4 mb-6 leading-tight">
          Seni <span className="text-gradient-purple-orange font-extrabold">Vibe-Coding</span>
        </h1>
        <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          "Vibe-coding" bukanlah asal generate kode lalu lepas tangan. Ini adalah seni menyatukan kecepatan AI dengan ketajaman audit manusia untuk merakit produk digital yang kencang, aman, dan tepat guna.
        </p>
      </div>

      {/* Visual Step-by-Step Timeline */}
      <div className="relative max-w-4xl mx-auto mb-24">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 sm:left-1/2 top-8 bottom-8 w-1 bg-slate-900 -translate-x-1/2 hidden sm:block"></div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node Badge */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-display font-black text-lg border-4 border-white shadow-[2px_2px_0px_0px_#0f172a] z-10">
                  {step.step}
                </div>

                {/* Content Card container */}
                <div className="w-full sm:w-1/2 pl-14 sm:pl-0 sm:px-8">
                  <div className="bg-white p-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:shadow-[6px_6px_0px_0px_#0f172a] hover:translate-y-[-2px] transition-all relative overflow-hidden group">
                    {/* Top Accent Gradient Line */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${step.colorClass}`}></div>

                    {/* Emoji, Step Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl filter drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]">{step.emoji}</span>
                      <div>
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-brand-purple transition-colors">
                          {step.title}
                        </h3>
                        <p className="font-sans text-xs text-brand-orange font-bold">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Step Description */}
                    <p className="font-sans text-slate-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Tools used badge */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 font-bold">UTILITY:</span>
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg border border-slate-200 font-extrabold">
                        {step.tech}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spacer block for visual layout on desktop */}
                <div className="hidden sm:block w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Simulation Terminal Box */}
      <section className="max-w-4xl mx-auto bg-white rounded-3xl border-3 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-slate-900 px-5 py-4 border-b-2 border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-slate-900"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-slate-900"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-slate-900"></span>
            <span className="ml-3 font-mono text-xs text-slate-400 font-bold flex items-center gap-1">
              <Terminal className="w-4 h-4 text-brand-teal" />
              vibe-compiler-terminal.sh
            </span>
          </div>

          <span className="px-2 py-0.5 bg-slate-800 text-[10px] text-slate-400 font-mono font-bold rounded">
            STATUS: {isSimulating ? 'SIMULATING' : progress === 100 ? 'DEPLOYED' : 'READY'}
          </span>
        </div>

        {/* Terminal Screen Body */}
        <div className="bg-slate-950 p-6 min-h-[300px] max-h-[400px] overflow-y-auto font-mono text-xs sm:text-sm text-slate-300 space-y-2">
          {simLog.length === 0 ? (
            <div className="text-center text-slate-500 py-16">
              <Terminal className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <p>Klik "Mulai Simulasi Vibe-Coding" di bawah untuk melihat bagaimana Igo merakit website secara interaktif!</p>
            </div>
          ) : (
            simLog.map((log, index) => {
              let color = 'text-slate-300';
              if (log.includes('[SYSTEM]')) color = 'text-brand-yellow font-bold';
              else if (log.includes('[AI STUDIO]')) color = 'text-blue-400';
              else if (log.includes('[CLAUDE AI]')) color = 'text-purple-400';
              else if (log.includes('[SUPABASE]')) color = 'text-emerald-400';
              else if (log.includes('✓') || log.includes('🎉')) color = 'text-green-400 font-semibold';
              
              return (
                <div key={index} className={`leading-relaxed border-l-2 pl-3 border-slate-800 ${color}`}>
                  {log}
                </div>
              );
            })
          )}
        </div>

        {/* Terminal Interactive Footer Controller */}
        <div className="p-5 border-t-2 border-slate-900 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Progress Bar indicator */}
          <div className="w-full sm:max-w-xs flex flex-col gap-1.5">
            <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
              <span>PROGRES BUILD:</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden border border-slate-300 p-0.5">
              <div
                className="bg-brand-purple h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {simLog.length > 0 && (
              <button
                onClick={resetSimulation}
                className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 rounded-xl font-display text-xs font-bold border-2 border-slate-900 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}

            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className={`px-5 py-2.5 rounded-xl font-display text-xs font-bold border-2 border-slate-900 flex items-center gap-2 transition-all cursor-pointer ${
                isSimulating
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed border-slate-400'
                  : 'bg-brand-yellow text-slate-950 hover:bg-brand-orange hover:text-white hover:shadow-[3px_3px_0px_0px_#0f172a] hover:-translate-y-0.5'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? 'Sedang Memproses...' : 'Mulai Simulasi Vibe-Coding'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Quote */}
      <div className="max-w-2xl mx-auto text-center mt-20 p-6 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/55">
        <p className="font-sans italic text-sm text-slate-500 leading-relaxed font-medium">
          "Bagi gw, AI adalah asisten drafting super cepat. Proses audit manual, testing keamanan Supabase Row Level Security (RLS), dan penulisan types tetap merupakan tanggung jawab mutlak gw sebagai independent developer."
        </p>
        <span className="block font-display text-xs text-brand-purple font-bold mt-3">
          — Muhammad Shibghotul 'Adalah (Igo)
        </span>
      </div>

    </div>
  );
}
