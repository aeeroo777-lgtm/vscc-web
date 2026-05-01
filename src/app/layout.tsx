import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Barlow } from 'next/font/google';
import '../styles/tailwind.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic', 'normal'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'VSCC — Premier Commerce & CA Coaching, Lucknow',
  description:
    'Dr. Vishal Saxena Commerce Classes — elite coaching for CA Foundation, CFA, ACCA, B.Com, XI & XII Commerce in Lucknow. 4.5★ rated, 200+ student reviews.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${barlow.variable}`}>
      <body className={barlow.className}>
        {children}
</body>
    </html>
  );
}