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
    <section className="app-section" id="about">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse, #C6A56A, transparent 70%)' }} />
      </div>

      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="app-eyebrow mb-4">The Problem</p>
          <h2 className="app-heading text-4xl md:text-5xl max-w-2xl mx-auto">
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
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(198,165,106,0.08)', border: '1px solid rgba(198,165,106,0.15)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#C6A56A' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#F8F8F8] font-serif font-bold text-xl mb-3 leading-snug">{p.title}</h3>
                <p className="text-[#A0A7B2] text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center">
          <div className="inline-block rounded-2xl px-10 py-8 border"
            style={{ background: 'rgba(198,165,106,0.05)', borderColor: 'rgba(198,165,106,0.15)' }}>
            <p className="font-serif text-2xl md:text-3xl text-[#F8F8F8] font-bold mb-1">We don't send resumes.</p>
            <p className="font-serif text-2xl md:text-3xl font-bold italic">
              <span className="gold-text">We send solutions.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
