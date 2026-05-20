'use client';

import { motion } from 'framer-motion';
import { Car, Shield, Globe, FileText, Heart, Scale, Building2, Umbrella, Briefcase, Home, Users, Gavel } from 'lucide-react';

const areas = [
  { icon: Car, label: 'Personal Injury' },
  { icon: Shield, label: 'Criminal Defense' },
  { icon: Globe, label: 'Immigration' },
  { icon: FileText, label: 'Estate Planning' },
  { icon: Heart, label: 'Family Law' },
  { icon: Scale, label: 'Civil Litigation' },
  { icon: Building2, label: 'Corporate Law' },
  { icon: Umbrella, label: 'Insurance Defense' },
  { icon: Briefcase, label: 'Employment Law' },
  { icon: Home, label: 'Real Estate Law' },
  { icon: Users, label: 'Mass Tort' },
  { icon: Gavel, label: 'Trial Firms' },
];

export default function PracticeAreas() {
  return (
    <section className="app-section" id="practice-areas" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="app-eyebrow mb-4">Our Specialization</p>
          <h2 className="app-heading max-w-xl mx-auto" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
            We Recruit By <span className="gold-text">Niche.</span> Not Guesswork.
          </h2>
          <p className="mt-5 max-w-lg mx-auto text-lg leading-relaxed" style={{ color: '#374151' }}>
            Each practice area demands different skills, personalities, and trajectories. We know every niche intimately.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div key={a.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-xl p-6 border bg-white cursor-default transition-all duration-300"
                style={{ borderColor: '#E5DDD0', boxShadow: '0 2px 8px rgba(13,27,42,0.05)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(13,27,42,0.12), 0 0 0 1px rgba(154,116,32,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(13,27,42,0.05)'; }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(154,116,32,0.08)', border: '1px solid rgba(154,116,32,0.15)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#9A7420' }} strokeWidth={1.5} />
                </div>
                <p className="font-semibold text-base leading-snug transition-colors" style={{ color: '#0D1B2A' }}>
                  {a.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
