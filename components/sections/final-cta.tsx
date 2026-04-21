'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="app-section" id="contact">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(198,165,106,0.08) 0%, transparent 70%)' }} />

      <div className="app-container relative">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(198,165,106,0.15)' }}>
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(198,165,106,0.07) 0%, rgba(7,18,35,0.9) 50%, rgba(198,165,106,0.04) 100%)',
              backdropFilter: 'blur(40px)',
            }} />
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(198,165,106,0.6), transparent)' }} />

          <div className="relative px-8 py-20 md:px-20 text-center">
            <p className="app-eyebrow mb-5">Ready To Build Your Team?</p>
            <h2 className="font-serif font-bold text-[#F8F8F8] leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
              Need A Lawyer Who Can Actually <span className="gold-text">Perform?</span>
            </h2>
            <p className="text-[#A0A7B2] text-lg mb-10 max-w-md mx-auto">Let's find them.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@attorneyplacementpartners.com" className="app-btn-primary rounded-xl group">
                <Calendar className="w-4 h-4" />
                Book Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="mailto:hello@attorneyplacementpartners.com" className="app-btn-secondary rounded-xl">
                Start Confidential Search
              </a>
            </div>

            <p className="mt-8 text-[11px] tracking-widest uppercase text-[#A0A7B2]/50">
              Confidential • No Obligation • Response Within 24 Hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
