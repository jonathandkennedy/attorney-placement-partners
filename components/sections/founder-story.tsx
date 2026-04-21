'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const problems = ['Wrong candidates.', 'Wasted interviews.', 'Missed growth.'];

export default function FounderStory() {
  return (
    <section className="app-section" id="founder">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C6A56A, transparent 70%)' }} />

      <div className="app-container relative">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="app-eyebrow mb-4">Our Story</p>
            <h2 className="app-heading text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
              Created By Attorneys Who Saw The <span className="gold-text">Hiring Problem</span> Firsthand.
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative rounded-2xl p-10 md:p-14 border overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(198,165,106,0.5), transparent)' }} />

            <div className="mb-8">
              <Quote className="w-10 h-10" style={{ color: 'rgba(198,165,106,0.3)' }} strokeWidth={1} />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#A0A7B2] text-base leading-relaxed mb-6">
                  After years inside the legal industry, we watched firms rely on recruiters who didn't understand legal hiring.
                </p>
                <div className="space-y-3 mb-8">
                  {problems.map((p, i) => (
                    <motion.div key={p}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C6A56A' }} />
                      <span className="font-serif font-bold text-xl text-[#F8F8F8]">{p}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[#A0A7B2] text-base leading-relaxed">So we built Attorney Placement Partners.</p>
              </div>

              <div className="rounded-xl p-7 border"
                style={{ background: 'rgba(198,165,106,0.04)', borderColor: 'rgba(198,165,106,0.15)' }}>
                <p className="text-[#F8F8F8] text-base leading-relaxed mb-5">
                  A search firm made specifically for law firms—by people who actually understand the profession.
                </p>
                <div className="gold-divider mb-5" />
                <p className="text-[#A0A7B2] text-sm leading-relaxed">
                  We don't just place bodies. We apply the same rigor to recruiting that we applied to practicing law—thorough, precise, and driven by results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
