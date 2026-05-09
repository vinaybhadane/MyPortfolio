import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vinayportfolio-dev.vercel.app'), // Replace with actual domain if different
  title: 'Vinay Bhadane — Computer Engineering Student & Web Developer | MET BKC Nashik',
  description: 'Portfolio of Vinay Bhadane, a Computer Engineering Student at MET Bhujbal Knowledge City (MET Institute of Engineering) Nashik. A passionate web developer building futuristic digital experiences with Next.js, React, Node.js, and Blockchain.',
  keywords: [
    'vinay bhadane', 
    'web developer', 
    'portfolio of web developer', 
    'MET BKC NASHIK', 
    'Met Bhujbal Knowledge City', 
    'Met Institute of Engineering', 
    'Computer Engineering Student',
    'Full Stack Developer',
    'React Developer',
    'Next.js Expert',
    'Nashik Web Developer',
    'Blockchain Developer'
  ],
  authors: [{ name: 'Vinay Bhadane', url: 'https://vinayportfolio-dev.vercel.app' }],
  creator: 'Vinay Bhadane',
  publisher: 'Vinay Bhadane',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Vinay Bhadane — Web Developer & Computer Engineering Student | MET BKC Nashik',
    description: 'Portfolio of Vinay Bhadane. Explore innovative web applications, blockchain projects, and modern UI designs from a Computer Engineering Student at MET Institute of Engineering.',
    url: 'https://vinayportfolio-dev.vercel.app',
    siteName: 'Vinay Bhadane Portfolio',
    images: [
      {
        url: '/images/profile.jpg', // Used as social sharing preview
        width: 1200,
        height: 630,
        alt: 'Vinay Bhadane Portfolio Thumbnail',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinay Bhadane — Full-Stack Developer & Software Engineer',
    description: 'Futuristic portfolio of Vinay Bhadane. Explore innovative web applications, blockchain projects, and modern UI designs.',
    creator: '@vinaybhadane', // update if you have twitter
    images: ['/images/profile.jpg'],
  },
  alternates: {
    canonical: 'https://vinayportfolio-dev.vercel.app',
  },
  verification: {
    google: 'CR_rehzBMmYahce__vv6wZnhvpJ9-IBdML7QeesShv4',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-text font-body antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
