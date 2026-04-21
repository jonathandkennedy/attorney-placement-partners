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
  title: 'Attorney Placement Partners | Legal Recruiting Built By Lawyers',
  description:
    'Attorney Placement Partners helps law firms hire elite attorneys faster. Owned by former lawyers. Exclusive legal recruiting for associates, litigators, and partners.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable + ' ' + playfair.variable}>
      <body className="min-h-screen antialiased font-sans bg-app-bg text-app-white">
        {children}
      </body>
    </html>
  );
}
