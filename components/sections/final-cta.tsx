'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

// Sign up at formspree.io and replace YOUR_FORM_ID with your form's endpoint ID
const FORMSPREE_ID = 'YOUR_FORM_ID';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F8F8F8] placeholder-[#A0A7B2]/50 focus:outline-none focus:border-[rgba(198,165,106,0.5)] focus:bg-white/[0.06] transition-all duration-200';

export default function FinalCta() {
  const [form, setForm] = useState({ name: '', firm: '', email: '', message: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

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

          <div className="relative px-8 py-16 md:px-20">
            <div className="text-center mb-12">
              <p className="app-eyebrow mb-5">Ready To Build Your Team?</p>
              <h2 className="font-serif font-bold text-[#F8F8F8] leading-tight tracking-tight mb-4"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                Need A Lawyer Who Can Actually <span className="gold-text">Perform?</span>
              </h2>
              <p className="text-[#A0A7B2] text-lg max-w-md mx-auto">Let's find them.</p>
            </div>

            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center py-10">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#C6A56A' }} />
                <h3 className="font-serif font-bold text-[#F8F8F8] text-2xl mb-2">Message Received</h3>
                <p className="text-[#A0A7B2]">We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-[#A0A7B2] mb-1.5 tracking-wide">Your Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#A0A7B2] mb-1.5 tracking-wide">Law Firm</label>
                    <input
                      name="firm"
                      type="text"
                      required
                      placeholder="Smith & Associates LLP"
                      value={form.firm}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-[#A0A7B2] mb-1.5 tracking-wide">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@smithlaw.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-medium text-[#A0A7B2] mb-1.5 tracking-wide">What Are You Looking For?</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about the role — practice area, seniority, timeline..."
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center mb-4">Something went wrong. Please try again or email us directly.</p>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button type="submit" disabled={status === 'loading'}
                    className="app-btn-primary rounded-xl group w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none">
                    {status === 'loading'
                      ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                      : <>Start Confidential Search <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></>
                    }
                  </button>
                </div>

                <p className="mt-6 text-center text-[11px] tracking-widest uppercase text-[#A0A7B2]/50">
                  Confidential • No Obligation • Response Within 24 Hours
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
