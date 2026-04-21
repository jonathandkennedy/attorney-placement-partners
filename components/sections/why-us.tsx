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
    <section className="app-section" id="why-us">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C6A56A, transparent 70%)' }} />

      <div className="app-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="app-eyebrow mb-4">Our Edge</p>
            <h2 className="app-heading text-4xl md:text-5xl mb-6">
              We Were <span className="gold-text">Lawyers</span> First.
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-[#A0A7B2] leading-relaxed mb-8 text-base">
              We sat inside law firms. We billed hours. We handled cases. That experience is the lens through which we evaluate every single candidate we represent.
            </p>
            <p className="text-[#F8F8F8] font-semibold mb-5 text-sm tracking-wide uppercase">We know the difference between:</p>
            <ul className="space-y-3.5">
              {distinctions.map((d, i) => (
                <motion.li key={d}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C6A56A' }} strokeWidth={1.5} />
                  <span className="text-[#A0A7B2] text-sm leading-snug">{d}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative hidden lg:block">
            <div className="rounded-2xl p-8 border relative"
              style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(198,165,106,0.4), transparent)' }} />
              <p className="app-eyebrow mb-8">Our Founding Principle</p>
              <blockquote className="font-serif text-2xl text-[#F8F8F8] font-bold leading-tight mb-6">
                "A recruiter who has never practiced law cannot truly evaluate legal talent."
              </blockquote>
              <div className="gold-divider mb-6" />
              <p className="text-[#A0A7B2] text-sm leading-relaxed">
                This is why Attorney Placement Partners was built from the ground up by attorneys. We understand the culture, the demands, and the intangibles that make a great hire—not just a qualified one.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                {[{ num: '100%', label: 'Legal Focus' }, { num: 'All', label: 'Practice Areas' }, { num: 'JD', label: 'Owned & Operated' }].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif font-bold text-2xl gold-text">{s.num}</p>
                    <p className="text-xs text-[#A0A7B2] mt-1">{s.label}</p>
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
