import React, { useState, useEffect } from 'react';
import { ContactMessage } from '../types';
import { Send, MessageSquare, Terminal, Table, CheckSquare, Trash2, Code2, AlertCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [localInbox, setLocalInbox] = useState<ContactMessage[]>([]);
  const [showIntegrationGuide, setShowIntegrationGuide] = useState(false);

  // Load Inbox from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('igo_portfolio_inbox');
    if (stored) {
      try {
        setLocalInbox(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Seed initial dummy inbox message from a mock HR/Recruiter
      const initialSeed: ContactMessage[] = [
        {
          name: 'Budi Santoso (HRD Sentral Cargo)',
          email: 'budi.recruitment@sentralcargo.co.id',
          message: 'Halo Igo! Portofolio vibe-coding lu kreatif banget. Boleh kirim CV terbarunya? Kita lagi cari dev yang paham operational IT juga.',
          date: '2026-07-08 10:15'
        }
      ];
      localStorage.setItem('igo_portfolio_inbox', JSON.stringify(initialSeed));
      setLocalInbox(initialSeed);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate Network lag for Supabase Insert
    setTimeout(() => {
      const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 16);
      const newMessage: ContactMessage = { name, email, message, date: timestamp };
      const updatedInbox = [newMessage, ...localInbox];
      
      localStorage.setItem('igo_portfolio_inbox', JSON.stringify(updatedInbox));
      setLocalInbox(updatedInbox);

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset inputs
      setName('');
      setEmail('');
      setMessage('');

      // Auto clear success indicator after 4 seconds
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1200);
  };

  const clearInbox = () => {
    if (window.confirm('Hapus semua isi inbox simulasi ini?')) {
      localStorage.removeItem('igo_portfolio_inbox');
      setLocalInbox([]);
    }
  };

  return (
    <div className="mesh-bg min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-900">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/10 text-brand-orange font-mono font-bold text-xs rounded-lg border border-brand-orange/20">
          <MessageSquare className="w-3.5 h-3.5 text-brand-purple" />
          Hubungi Gw
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 mt-4 mb-6 leading-tight">
          Let's Work <span className="text-gradient-purple-orange font-extrabold">Together</span>!
        </h1>
        <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Butuh landing page freelance, sistem internal custom, atau mau rekrut IT Support handal? Pilih cara termudah bagi lu untuk mulai ngobrol:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        {/* Left Column: Big WhatsApp CTA & Info */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* MASSIVE WHATSAPP CTA BOX */}
          <div className="bg-brand-purple text-white border-3 border-slate-900 rounded-3xl p-8 shadow-[8px_8px_0px_0px_#0f172a] relative overflow-hidden flex flex-col justify-between h-full min-h-[350px] group">
            {/* Background Blob */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-brand-orange rounded-full filter blur-2xl opacity-40 group-hover:scale-110 transition-transform"></div>

            <div>
              <span className="px-2.5 py-1 bg-white/20 text-brand-yellow font-mono font-bold text-[10px] rounded border border-white/25 uppercase tracking-wider block w-max mb-6">
                Fastest Response
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl mb-4 leading-tight">
                Langsung Chat via WhatsApp 💬
              </h2>
              <p className="font-sans text-purple-100 text-sm leading-relaxed mb-8 font-medium">
                Sistem paling cepat buat diskusi. Klik tombol di bawah buat langsung kirim pesan otomatis ke WhatsApp gw. Kita bisa ngobrol santai sambil ngopi.
              </p>
            </div>

            <a
              href="https://wa.me/6281382876886?text=Halo%20Igo,%20gw%20nemu%20portfolio%20lu%20dan%20tertarik%20buat%20bikin%20web%20app%20/%20sistem%20internal!"
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full text-center py-4 bg-brand-yellow text-slate-950 rounded-2xl font-display font-bold text-base border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:bg-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-slate-950" />
              <span>Buka Chat WA ("6281382876886")</span>
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#0f172a]">
            <h2 className="font-display font-black text-xl sm:text-2xl text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-xl">✉️</span> Kirim Pesan Terenkripsi
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-display font-extrabold text-sm text-slate-700 mb-2">
                  Nama Lu / Instansi
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Misal: Budi Santoso / PT Sukses Bersama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-brand-purple focus:bg-white focus:outline-none font-sans text-sm font-semibold transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-display font-extrabold text-sm text-slate-700 mb-2">
                  Email Aktif
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="budi@sukses.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-brand-purple focus:bg-white focus:outline-none font-sans text-sm font-semibold transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-display font-extrabold text-sm text-slate-700 mb-2">
                  Pesan / Rincian Kebutuhan Sistem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Jelasin singkat apa yang mau didevelop, kendala operasional, atau penawaran kerja sama..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-brand-purple focus:bg-white focus:outline-none font-sans text-sm font-semibold transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-mono text-[11px] text-slate-400 font-medium">
                  🔒 Data akan langsung diinsert ke simulasi database.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-display text-sm font-bold border-2 border-slate-900 flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isSubmitting
                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed border-slate-300'
                      : 'bg-brand-yellow text-slate-950 hover:bg-brand-purple hover:text-white hover:shadow-[3px_3px_0px_0px_#0f172a] hover:-translate-y-0.5'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Mengirim Data...' : 'Kirim Ke Database Inbox'}</span>
                </button>
              </div>
            </form>

            {/* Submit Success Message */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 p-4 bg-emerald-50 border-2 border-emerald-500/25 rounded-2xl flex items-center gap-3"
                >
                  <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-emerald-950">Data Berhasil Diinsert!</h4>
                    <p className="font-sans text-xs text-emerald-800/90 font-medium">
                      Pesan lu sukses masuk ke tabel simulasi <code>contacts_inbox</code> di bawah. Cek tabelnya!
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* EXPANDABLE SUPABASE INTEGRATION GUIDE (FOR RECRUITERS) */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl border-2 border-slate-900 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#0f172a] mb-16">
        <button
          onClick={() => setShowIntegrationGuide(!showIntegrationGuide)}
          className="w-full flex items-center justify-between font-display font-black text-lg sm:text-xl text-slate-900 text-left cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-brand-purple" />
            Code-Snippet: Bagaimana Igo Menghubungkan Form Ini Ke Supabase Riil?
          </span>
          <span className="px-3 py-1 bg-slate-100 text-xs font-mono rounded border text-slate-600 font-bold">
            {showIntegrationGuide ? 'Sembunyikan' : 'Lihat Code'}
          </span>
        </button>

        <AnimatePresence>
          {showIntegrationGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-6"
            >
              <div className="border-t pt-6 space-y-4 font-sans text-sm text-slate-600 leading-relaxed">
                <p className="font-medium">
                  Sebagai developer yang mengutamakan kode bersih dan modular, gw biasanya memisahkan inisialisasi Supabase client dan menulis logic insert terenkripsi seperti berikut:
                </p>

                {/* Code Terminal */}
                <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden text-xs text-slate-300 font-mono">
                  {/* Tab Title */}
                  <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex justify-between text-[11px] text-slate-400 font-bold">
                    <span>services/supabase.ts</span>
                    <span className="text-brand-purple">TYPESCRIPT</span>
                  </div>
                  
                  {/* Code body */}
                  <pre className="p-4 overflow-x-auto space-y-1">
                    {`import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Logic Handler Submit kontak form:
export async function sendContactMessage(name: string, email: string, message: string) {
  const { data, error } = await supabase
    .from('contacts_inbox')
    .insert([
      { name, email, message, created_at: new Date() }
    ]);
    
  if (error) throw new Error(error.message);
  return data;
}`}
                  </pre>
                </div>

                <div className="flex gap-2.5 items-start p-4 bg-violet-50/50 rounded-2xl border border-violet-100 mt-4 text-xs font-medium">
                  <AlertCircle className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                  <div>
                    <span className="font-display font-bold text-slate-900 block mb-1">Catatan Keamanan Supabase (RLS):</span>
                    Sebelum mengizinkan insert publik, gw selalu mengaktifkan <strong>Row Level Security (RLS)</strong> di dashboard Supabase dan menulis SQL Policy khusus: <code>CREATE POLICY "Allow public inserts" ON contacts_inbox FOR INSERT WITH CHECK (true);</code> tanpa memberikan hak akses SELECT kepada publik. Ini menjaga privasi pesan pengirim.
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* REAL-TIME SIMULATION INBOX TABLE */}
      <section className="max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl border-3 border-slate-950 shadow-[8px_8px_0px_0px_#0f172a] overflow-hidden">
        {/* Table Header */}
        <div className="bg-slate-950 px-6 py-5 border-b border-slate-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border-2 border-brand-orange flex items-center justify-center text-brand-orange">
              <Table className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-base sm:text-lg">Simulasi Real-Time Database Table</h3>
              <p className="font-sans text-xs text-slate-400 font-medium">
                Tabel: <code>contacts_inbox</code> (Tersimpan di local storage browser lu)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 justify-end">
            <button
              onClick={() => {
                const stored = localStorage.getItem('igo_portfolio_inbox');
                if (stored) setLocalInbox(JSON.parse(stored));
              }}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors cursor-pointer"
              title="Refresh tabel"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            
            {localInbox.length > 0 && (
              <button
                onClick={clearInbox}
                className="px-3.5 py-2 bg-red-950/40 hover:bg-red-900 text-red-200 border border-red-900/30 text-xs font-display font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Kosongkan Tabel</span>
              </button>
            )}
          </div>
        </div>

        {/* Table representation */}
        <div className="overflow-x-auto p-4">
          {localInbox.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <Terminal className="w-12 h-12 text-slate-800 mx-auto mb-3" />
              <p className="font-mono text-sm font-medium">SELECT * FROM contacts_inbox;</p>
              <p className="text-xs text-slate-600 mt-2">Tabel kosong. Coba kirim pesan di kontak form di atas!</p>
            </div>
          ) : (
            <table className="w-full min-w-[600px] border-collapse text-left font-sans text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-xs font-mono uppercase">
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Nama Pengirim</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Isi Pesan (Message Body)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {localInbox.map((msg, index) => (
                  <tr key={index} className="hover:bg-slate-850/50 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-xs text-brand-orange font-bold whitespace-nowrap">
                      {msg.date}
                    </td>
                    <td className="py-3.5 px-4 font-display font-extrabold text-slate-200">
                      {msg.name}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium">
                      {msg.email}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 max-w-sm line-clamp-2 hover:line-clamp-none transition-all leading-relaxed font-medium">
                      {msg.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

    </div>
  );
}
