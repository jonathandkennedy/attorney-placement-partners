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
      className={'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ' + (scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-[#E5DDD0] shadow-[0_2px_20px_rgba(13,27,42,0.08)]' : 'bg-transparent')}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300"
            style={{ background: 'rgba(154,116,32,0.08)', borderColor: 'rgba(154,116,32,0.25)' }}>
            <Scale className="w-[18px] h-[18px]" style={{ color: '#9A7420' }} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase leading-none" style={{ color: '#9A7420' }}>
              Attorney Placement
            </span>
            <span className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none mt-0.5" style={{ color: '#0D1B2A' }}>
              Partners
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}
              className="text-[14px] font-medium transition-colors"
              style={{ color: '#374151' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0D1B2A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#374151')}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="app-btn-primary text-[14px] py-3 px-6 rounded-lg">Book Call</a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#E5DDD0]"
          style={{ color: '#374151' }}
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
            className="lg:hidden overflow-hidden bg-white border-t border-[#E5DDD0]"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  className="text-base font-medium py-1 transition-colors"
                  style={{ color: '#374151' }}>
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
