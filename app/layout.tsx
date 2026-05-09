import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vinaybhadane.dev'), // Replace with actual domain if different
  title: 'Vinay Bhadane — Full-Stack Developer & Software Engineer',
  description: 'Portfolio of Vinay Bhadane. Discover my futuristic digital experiences built with Next.js, React, Node.js, and Blockchain technologies. Explore my projects, skills, and resume.',
  keywords: ['Vinay Bhadane', 'Full Stack Developer', 'Software Engineer', 'React Developer', 'Next.js Expert', 'Web Developer Nashik', 'Blockchain Developer', 'Creative Developer', 'Frontend Engineer', 'Portfolio'],
  authors: [{ name: 'Vinay Bhadane', url: 'https://vinaybhadane.dev' }],
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
    title: 'Vinay Bhadane — Full-Stack Developer & Software Engineer',
    description: 'Futuristic portfolio of Vinay Bhadane. Explore innovative web applications, blockchain projects, and modern UI designs.',
    url: 'https://vinaybhadane.dev',
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
    canonical: 'https://vinaybhadane.dev',
  },
  // Add this inside once you have Google Search Console verification code:
  // verification: {
  //   google: 'your-google-verification-code',
  // },
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
