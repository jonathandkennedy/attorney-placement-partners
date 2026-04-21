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
    <section className="app-section" id="practice-areas">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C6A56A, transparent 70%)' }} />

      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="app-eyebrow mb-4">Our Specialization</p>
          <h2 className="app-heading text-4xl md:text-5xl max-w-xl mx-auto">
            We Recruit By <span className="gold-text">Niche.</span> Not Guesswork.
          </h2>
          <p className="text-[#A0A7B2] mt-4 max-w-lg mx-auto text-base leading-relaxed">
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
                className="group relative rounded-xl p-5 border cursor-default transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: '0 0 0 1px rgba(198,165,106,0.3), 0 8px 32px rgba(198,165,106,0.08)' }} />
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'rgba(198,165,106,0.08)', border: '1px solid rgba(198,165,106,0.12)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#C6A56A' }} strokeWidth={1.5} />
                </div>
                <p className="text-[#F8F8F8] font-semibold text-sm leading-snug group-hover:text-[#C6A56A] transition-colors">
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
