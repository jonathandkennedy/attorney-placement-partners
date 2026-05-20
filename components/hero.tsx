'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Shield, Users, Briefcase, Lock } from 'lucide-react';

const statCards = [
  { icon: Shield, label: '100% Legal Industry Focused', desc: 'We recruit exclusively for law firms' },
  { icon: Users, label: 'Associate to Partner Placements', desc: 'Every role, every level, every practice area' },
  { icon: Briefcase, label: 'Owned by Former Lawyers', desc: 'We know the profession from the inside' },
  { icon: Lock, label: 'Confidential Searches', desc: 'Discreet. Professional. Trusted.' },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};
const cardV: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: i * 0.1 + 0.4, ease: EASE } }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #C6A56A 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, #F7F5F0, transparent)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-6">
              <span className="app-eyebrow">Legal Recruiting — Built Different</span>
            </motion.div>

            <motion.h1 variants={item} className="font-serif font-bold leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3.2rem, 5.5vw, 5.2rem)', color: '#0D1B2A' }}>
              Built By Lawyers.{' '}
              <br className="hidden sm:block" />
              Built To Help Law Firms{' '}
              <span className="gold-text">Hire Better</span> Lawyers.
            </motion.h1>

            <motion.p variants={item} className="leading-relaxed mb-10 max-w-xl"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', color: '#374151' }}>
              Attorney Placement Partners helps law firms hire elite attorneys faster—with less risk, fewer wasted interviews, and stronger long-term hires.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="app-btn-primary rounded-xl group">
                Book Hiring Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="app-btn-secondary rounded-xl">
                Start Confidential Search
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F7F5F0] flex items-center justify-center text-[10px] font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #E5DDD0, #D4C4A8)',
                      color: '#9A7420',
                    }}>
                    {['JD', 'LT', 'MP', 'SA'][i - 1]}
                  </div>
                ))}
              </div>
              <p className="text-base" style={{ color: '#374151' }}>
                Trusted by managing partners <span className="font-semibold" style={{ color: '#0D1B2A' }}>nationwide</span>
              </p>
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex flex-col gap-4">
            {statCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.label} custom={i} variants={cardV} initial="hidden" animate="show"
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="app-card flex items-start gap-4 cursor-default">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(154,116,32,0.08)', border: '1px solid rgba(154,116,32,0.2)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#9A7420' }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-base leading-snug" style={{ color: '#0D1B2A' }}>{card.label}</p>
                    <p className="text-sm mt-1 leading-snug" style={{ color: '#6B7480' }}>{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
