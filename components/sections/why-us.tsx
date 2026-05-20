'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const distinctions = [
  'A PI closer vs a paper pusher',
  'A trial attorney vs an interview actor',
  'A junior associate with real upside',
  'A future partner vs a career employee',
  'A client-facing estate planner vs a technician',
];

export default function WhyUs() {
  return (
    <section className="app-section" id="why-us" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="app-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="app-eyebrow mb-4">Our Edge</p>
            <h2 className="app-heading mb-6" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
              We Were <span className="gold-text">Lawyers</span> First.
            </h2>
            <div className="gold-divider mb-8" />
            <p className="leading-relaxed mb-8 text-lg" style={{ color: '#374151' }}>
              We sat inside law firms. We billed hours. We handled cases. That experience is the lens through which we evaluate every single candidate we represent.
            </p>
            <p className="font-semibold mb-5 text-base tracking-wide uppercase" style={{ color: '#0D1B2A' }}>
              We know the difference between:
            </p>
            <ul className="space-y-4">
              {distinctions.map((d, i) => (
                <motion.li key={d}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#9A7420' }} strokeWidth={1.5} />
                  <span className="text-lg leading-snug" style={{ color: '#374151' }}>{d}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative hidden lg:block">
            <div className="rounded-2xl p-10 border relative overflow-hidden"
              style={{ background: '#FFFFFF', borderColor: '#E5DDD0', boxShadow: '0 4px 32px rgba(13,27,42,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, #9A7420, #C6A56A, #9A7420)' }} />
              <p className="app-eyebrow mb-8">Our Founding Principle</p>
              <blockquote className="font-serif text-2xl font-bold leading-tight mb-6" style={{ color: '#0D1B2A' }}>
                "A recruiter who has never practiced law cannot truly evaluate legal talent."
              </blockquote>
              <div className="gold-divider mb-6" />
              <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                This is why Attorney Placement Partners was built from the ground up by attorneys. We understand the culture, the demands, and the intangibles that make a great hire—not just a qualified one.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t" style={{ borderColor: '#E5DDD0' }}>
                {[{ num: '100%', label: 'Legal Focus' }, { num: 'All', label: 'Practice Areas' }, { num: 'JD', label: 'Owned & Operated' }].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif font-bold text-3xl gold-text">{s.num}</p>
                    <p className="text-sm mt-1" style={{ color: '#6B7480' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
