import { Scale } from 'lucide-react';
import Link from 'next/link';

const links = [
  { label: 'About', href: '#about' },
  { label: 'For Firms', href: '#practice-areas' },
  { label: 'Candidates', href: '#positions' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t py-14 px-6"
      style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: '#060f1e' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(198,165,106,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center border"
                style={{ background: 'rgba(198,165,106,0.08)', borderColor: 'rgba(198,165,106,0.2)' }}>
                <Scale className="w-4 h-4" style={{ color: '#C6A56A' }} strokeWidth={1.5} />
              </div>
              <span className="font-serif font-bold text-[#F8F8F8] text-sm tracking-wide uppercase">
                Attorney Placement Partners
              </span>
            </div>
            <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: 'rgba(198,165,106,0.6)' }}>
              Built by Lawyers. Trusted by Law Firms.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link key={link.label} href={link.href}
                className="text-xs font-medium text-[#A0A7B2] hover:text-[#C6A56A] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="my-8 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A0A7B2]/50">
            © {new Date().getFullYear()} Attorney Placement Partners. All rights reserved.
          </p>
          <p className="text-xs text-[#A0A7B2]/40">
            Exclusive Legal Recruiting · Nationwide
          </p>
        </div>
      </div>
    </footer>
  );
}
