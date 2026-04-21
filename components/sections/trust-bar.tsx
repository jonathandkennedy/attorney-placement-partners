'use client';

import { motion } from 'framer-motion';
import { Scale, MapPin, Lock, Star, Briefcase } from 'lucide-react';

const items = [
  { icon: Scale, label: 'Former Lawyers' },
  { icon: Briefcase, label: 'Exclusive Legal Recruiting' },
  { icon: MapPin, label: 'Nationwide Search' },
  { icon: Lock, label: 'Confidential Placements' },
  { icon: Star, label: 'Partner-Level Talent' },
];

export default function TrustBar() {
  return (
    <div className="relative py-5 border-y"
      style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#C6A56A' }} strokeWidth={1.5} />
                <span className="text-[13px] font-medium" style={{ color: '#A0A7B2' }}>
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
