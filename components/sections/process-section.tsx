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
    <section className="app-section" id="process">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(198,165,106,0.03) 0%, transparent 100%)' }} />

      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="app-eyebrow mb-4">Our Process</p>
          <h2 className="app-heading text-4xl md:text-5xl max-w-xl mx-auto">
            How We Help You <span className="gold-text">Hire Faster</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(198,165,106,0.2), rgba(198,165,106,0.2), transparent)' }} />

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
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center border relative z-10"
                      style={{ background: 'rgba(198,165,106,0.06)', borderColor: 'rgba(198,165,106,0.2)' }}>
                      <Icon className="w-7 h-7" style={{ color: '#C6A56A' }} strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-3 -left-2 font-serif font-bold text-5xl leading-none pointer-events-none select-none"
                      style={{ color: 'rgba(198,165,106,0.08)' }}>
                      {step.number}
                    </span>
                  </div>
                  <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#C6A56A' }}>
                    Step {i + 1}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#F8F8F8] mb-3">{step.title}</h3>
                  <p className="text-[#A0A7B2] text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
