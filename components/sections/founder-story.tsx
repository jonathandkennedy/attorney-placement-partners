'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const problems = ['Wrong candidates.', 'Wasted interviews.', 'Missed growth.'];

export default function FounderStory() {
  return (
    <section className="app-section" id="founder" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="app-container relative">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="app-eyebrow mb-4">Our Story</p>
            <h2 className="app-heading max-w-3xl mx-auto leading-tight" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
              Created By Attorneys Who Saw The <span className="gold-text">Hiring Problem</span> Firsthand.
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative rounded-2xl p-10 md:p-14 border overflow-hidden"
            style={{ background: '#FFFFFF', borderColor: '#E5DDD0', boxShadow: '0 4px 32px rgba(13,27,42,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: 'linear-gradient(90deg, #9A7420, #C6A56A, #9A7420)' }} />

            <div className="mb-8">
              <Quote className="w-12 h-12" style={{ color: 'rgba(154,116,32,0.25)' }} strokeWidth={1} />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#374151' }}>
                  After years inside the legal industry, we watched firms rely on recruiters who didn't understand legal hiring.
                </p>
                <div className="space-y-4 mb-8">
                  {problems.map((p, i) => (
                    <motion.div key={p}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#9A7420' }} />
                      <span className="font-serif font-bold text-2xl" style={{ color: '#0D1B2A' }}>{p}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>So we built Attorney Placement Partners.</p>
              </div>

              <div className="rounded-xl p-8 border"
                style={{ background: '#F7F5F0', borderColor: '#E5DDD0' }}>
                <p className="text-lg leading-relaxed mb-5" style={{ color: '#0D1B2A' }}>
                  A search firm made specifically for law firms—by people who actually understand the profession.
                </p>
                <div className="gold-divider mb-5" />
                <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
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
