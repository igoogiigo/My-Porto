import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Code2, Terminal, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Vibe-Coding ⚡', path: '/vibe-coding' },
    { name: 'Projects', path: '/projects' },
    { name: 'Tentang Igo', path: '/about' },
    { name: 'Hubungi Gw', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b-2 border-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple flex items-center justify-center border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[0px_0px_0px_0px_#0f172a] transition-all">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-slate-900 leading-tight">igo.dev</span>
                <span className="font-mono text-[10px] text-brand-orange font-semibold">vibe-coding enthusiast</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl font-display text-sm font-semibold transition-all border-2 ${
                    isActive
                      ? 'bg-brand-yellow text-slate-900 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a]'
                      : 'text-slate-600 border-transparent hover:text-slate-950 hover:bg-slate-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/6281382876886?text=Halo%20Igo,%20gw%20tertarik%20buat%20bikin%20website%20nih!"
              target="_blank"
              referrerPolicy="no-referrer"
              className="ml-4 px-4 py-2 bg-slate-900 text-white rounded-xl font-display text-sm font-semibold border-2 border-slate-900 hover:bg-brand-purple hover:text-white hover:shadow-[3px_3px_0px_0px_#0f172a] transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-brand-yellow" />
              <span>Chat Igo</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-2 border-transparent hover:border-slate-900 transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-2 border-slate-900 bg-white"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl font-display text-base font-semibold transition-all border-2 ${
                      isActive
                        ? 'bg-brand-yellow text-slate-900 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a]'
                        : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              
              <a
                href="https://wa.me/6281382876886?text=Halo%20Igo,%20gw%20tertarik%20buat%20bikin%20website%20nih!"
                target="_blank"
                referrerPolicy="no-referrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 bg-slate-900 text-white rounded-xl font-display font-bold border-2 border-slate-900 hover:bg-brand-purple hover:shadow-[3px_3px_0px_0px_#0f172a] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-brand-yellow" />
                <span>Chat Igo Sekarang</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
