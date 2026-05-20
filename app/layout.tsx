import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.attorneyacquisition.com'),
  title: 'Attorney Placement Partners | Legal Recruiting Built By Lawyers',
  description:
    'Attorney Placement Partners helps law firms hire elite attorneys faster. Owned by former lawyers. Exclusive legal recruiting for associates, litigators, and partners.',
  keywords: [
    'attorney placement', 'legal recruiting', 'law firm hiring', 'attorney search',
    'legal staffing', 'associate placement', 'partner placement', 'legal headhunter',
  ],
  alternates: {
    canonical: 'https://www.attorneyacquisition.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.attorneyacquisition.com',
    title: 'Attorney Placement Partners | Legal Recruiting Built By Lawyers',
    description:
      'Attorney Placement Partners helps law firms hire elite attorneys faster. Owned by former lawyers. Exclusive legal recruiting for associates, litigators, and partners.',
    siteName: 'Attorney Placement Partners',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Attorney Placement Partners' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attorney Placement Partners | Legal Recruiting Built By Lawyers',
    description:
      'Attorney Placement Partners helps law firms hire elite attorneys faster. Owned by former lawyers.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable + ' ' + playfair.variable}>
      <body className="min-h-screen antialiased font-sans" style={{ backgroundColor: '#F7F5F0', color: '#0D1B2A' }}>
        {children}
      </body>
    </html>
  );
}
