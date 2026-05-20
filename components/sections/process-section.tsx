'use client';

import { motion } from 'framer-motion';
import { Phone, Search, CheckSquare, Award } from 'lucide-react';

const steps = [
  { number: '01', icon: Phone, title: 'Strategy Call', desc: 'We learn your firm, culture, case load, and exactly what you need in a hire—before we ever start searching.' },
  { number: '02', icon: Search, title: 'Precision Search', desc: "We tap our exclusive legal network to identify candidates who fit your niche, your market, and your firm's standards." },
  { number: '03', icon: CheckSquare, title: 'Legal Vetting', desc: 'We evaluate candidates the way lawyers do—on substance, not just credentials. We filter deeply before you spend a minute of your time.' },
  { number: '04', icon: Award, title: 'Placement', desc: 'You meet only the candidates worth your time. We handle the logistics, negotiation, and onboarding support.' },
];

export default function ProcessSection() {
  return (
    <section className="app-section" id="process" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="app-eyebrow mb-4">Our Process</p>
          <h2 className="app-heading max-w-xl mx-auto" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
            How We Help You <span className="gold-text">Hire Faster</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(154,116,32,0.3), rgba(154,116,32,0.3), transparent)' }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.14 }}
                  className="relative flex flex-col">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center border bg-white relative z-10"
                      style={{ borderColor: 'rgba(154,116,32,0.25)', boxShadow: '0 4px 16px rgba(13,27,42,0.08)' }}>
                      <Icon className="w-8 h-8" style={{ color: '#9A7420' }} strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-3 -left-2 font-serif font-bold text-6xl leading-none pointer-events-none select-none"
                      style={{ color: 'rgba(154,116,32,0.1)' }}>
                      {step.number}
                    </span>
                  </div>
                  <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#9A7420' }}>
                    Step {i + 1}
                  </div>
                  <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: '#0D1B2A' }}>{step.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: '#374151' }}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
