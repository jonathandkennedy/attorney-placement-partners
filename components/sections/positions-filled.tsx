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

const tierColors: Record<number, string> = {
  1: 'rgba(160,167,178,0.15)',
  2: 'rgba(198,165,106,0.08)',
  3: 'rgba(198,165,106,0.14)',
  4: 'rgba(198,165,106,0.22)',
};
const tierBorder: Record<number, string> = {
  1: 'rgba(255,255,255,0.07)',
  2: 'rgba(198,165,106,0.15)',
  3: 'rgba(198,165,106,0.25)',
  4: 'rgba(198,165,106,0.4)',
};
const tierText: Record<number, string> = { 1: '#A0A7B2', 2: '#C6A56A', 3: '#C6A56A', 4: '#D4B97F' };

export default function PositionsFilled() {
  return (
    <section className="app-section" id="positions"
      style={{ background: 'linear-gradient(180deg, #071223 0%, rgba(10,20,40,1) 50%, #071223 100%)' }}>
      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="app-eyebrow mb-4">Placement Range</p>
          <h2 className="app-heading text-4xl md:text-5xl max-w-2xl mx-auto">
            From Junior Associate To <span className="gold-text">Rainmaker</span> Partner
          </h2>
          <p className="text-[#A0A7B2] mt-4 max-w-md mx-auto text-base">
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
              className="relative rounded-xl p-5 border group cursor-default"
              style={{ background: tierColors[pos.tier], borderColor: tierBorder[pos.tier] }}>
              <div className="flex items-center gap-1.5 mb-3">
                {Array.from({ length: pos.tier }).map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 rounded-full" style={{ background: tierText[pos.tier] }} />
                ))}
              </div>
              <h3 className="font-serif font-bold text-base mb-1.5 text-[#F8F8F8]">{pos.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#A0A7B2' }}>{pos.desc}</p>
              {pos.tier === 4 && (
                <div className="absolute top-4 right-4">
                  <TrendingUp className="w-4 h-4" style={{ color: '#C6A56A', opacity: 0.6 }} strokeWidth={1.5} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
