import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VibeCoding from './pages/VibeCoding';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-yellow selection:text-slate-900">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Section Route Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vibe-coding" element={<VibeCoding />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        {/* Footer Bar */}
        <Footer />
      </div>
    </Router>
  );
}
