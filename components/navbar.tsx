'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'For Law Firms', href: '#practice-areas' },
  { label: 'Candidates', href: '#positions' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ' + (scrolled ? 'bg-[#071223]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.4)]' : 'bg-transparent')}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-[rgba(198,165,106,0.3)] bg-[rgba(198,165,106,0.08)] group-hover:border-[rgba(198,165,106,0.6)] transition-all duration-300">
            <Scale className="w-[18px] h-[18px]" style={{ color: '#C6A56A' }} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C6A56A] leading-none">
              Attorney Placement
            </span>
            <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-[#F8F8F8] leading-none mt-0.5">
              Partners
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-[13px] font-medium text-[#A0A7B2] hover:text-[#F8F8F8] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="app-btn-primary text-[13px] py-3 px-5 rounded-lg">Book Call</a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-[#A0A7B2]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#071223]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-base font-medium text-[#A0A7B2] hover:text-[#F8F8F8] transition-colors py-1">
                  {link.label}
                </Link>
              ))}
              <a href="#contact" className="app-btn-primary mt-2 rounded-xl text-center">
                Book Hiring Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
