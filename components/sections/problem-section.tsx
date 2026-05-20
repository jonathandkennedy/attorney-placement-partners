'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Clock, TrendingDown } from 'lucide-react';

const problems = [
  { icon: AlertCircle, title: "They don't know billables.", body: "General recruiters have no frame of reference for what a productive attorney looks like—or what matters inside a law firm's economics." },
  { icon: Clock, title: "They don't know courtroom talent.", body: "There's a massive difference between a trial lawyer and someone who settles everything. Most recruiters can't tell the two apart." },
  { icon: TrendingDown, title: 'They waste partner time.', body: 'Unqualified resumes. Misaligned candidates. Endless rounds of interviews that go nowhere. Your time is your most valuable asset.' },
];

export default function ProblemSection() {
  return (
    <section className="app-section" id="about" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="app-eyebrow mb-4">The Problem</p>
          <h2 className="app-heading max-w-2xl mx-auto" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
            Most Recruiters Don't <span className="gold-text">Understand</span> Law Firms.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="app-card group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(154,116,32,0.08)', border: '1px solid rgba(154,116,32,0.18)' }}>
                  <Icon className="w-6 h-6" style={{ color: '#9A7420' }} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3 leading-snug" style={{ color: '#0D1B2A' }}>{p.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#374151' }}>{p.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center">
          <div className="inline-block rounded-2xl px-12 py-10 border"
            style={{ background: '#FFFFFF', borderColor: '#E5DDD0', boxShadow: '0 4px 24px rgba(13,27,42,0.08)' }}>
            <p className="font-serif text-3xl md:text-4xl font-bold mb-1" style={{ color: '#0D1B2A' }}>We don't send resumes.</p>
            <p className="font-serif text-3xl md:text-4xl font-bold italic">
              <span className="gold-text">We send solutions.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
