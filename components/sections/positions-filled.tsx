'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const positions = [
  { title: 'Junior Associate', desc: 'Entry-level attorneys building their foundation', tier: 1 },
  { title: 'Associate Attorney', desc: 'Mid-level with growing case ownership', tier: 1 },
  { title: 'Senior Litigator', desc: 'Experienced trial-ready attorneys', tier: 2 },
  { title: 'Trial Lawyer', desc: 'Courtroom veterans who close cases', tier: 2 },
  { title: 'Managing Attorney', desc: 'Operational leaders driving firm growth', tier: 3 },
  { title: 'Non-Equity Partner', desc: 'Senior counsel with expanded responsibilities', tier: 3 },
  { title: 'Equity Partner', desc: 'Ownership-stake contributors and rainmakers', tier: 4 },
  { title: 'Practice Leader', desc: 'Department heads shaping firm strategy', tier: 4 },
];

const tierBg: Record<number, string> = {
  1: '#FFFFFF',
  2: '#FFFDF5',
  3: '#FFF8E8',
  4: '#FFF3D0',
};
const tierBorder: Record<number, string> = {
  1: '#E5DDD0',
  2: '#D4B97F',
  3: '#C6A56A',
  4: '#B8892A',
};
const tierDot: Record<number, string> = {
  1: '#9A7420',
  2: '#9A7420',
  3: '#8B6318',
  4: '#7A5515',
};

export default function PositionsFilled() {
  return (
    <section className="app-section" id="positions" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="app-eyebrow mb-4">Placement Range</p>
          <h2 className="app-heading max-w-2xl mx-auto" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
            From Junior Associate To <span className="gold-text">Rainmaker</span> Partner
          </h2>
          <p className="mt-5 max-w-md mx-auto text-lg" style={{ color: '#374151' }}>
            No matter the role, we have the network and the judgment to find your hire.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {positions.map((pos, i) => (
            <motion.div key={pos.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative rounded-xl p-6 border cursor-default transition-all duration-300"
              style={{
                background: tierBg[pos.tier],
                borderColor: tierBorder[pos.tier],
                boxShadow: pos.tier >= 3 ? '0 4px 20px rgba(154,116,32,0.12)' : '0 2px 8px rgba(13,27,42,0.05)',
              }}>
              <div className="flex items-center gap-1.5 mb-4">
                {Array.from({ length: pos.tier }).map((_, j) => (
                  <div key={j} className="w-2 h-2 rounded-full" style={{ background: tierDot[pos.tier] }} />
                ))}
              </div>
              <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#0D1B2A' }}>{pos.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: '#374151' }}>{pos.desc}</p>
              {pos.tier === 4 && (
                <div className="absolute top-5 right-5">
                  <TrendingUp className="w-5 h-5" style={{ color: '#9A7420', opacity: 0.7 }} strokeWidth={1.5} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
