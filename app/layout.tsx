import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vinay Bhadane — Computer Engineer & Web Developer',
  description: 'Portfolio of Vinay Bhadane — passionate computer engineer building modern web experiences.',
  keywords: ['Vinay Bhadane', 'web developer', 'computer engineer', 'portfolio', 'Next.js'],
  openGraph: {
    title: 'Vinay Bhadane — Portfolio',
    description: 'Computer Engineer & Web Developer',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-text font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
