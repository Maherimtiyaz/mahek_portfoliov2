import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'Mahek Fatima — Backend Engineer',
  description: 'Backend engineer specializing in Python, FastAPI, and PostgreSQL. Building scalable APIs, real-time systems, and secure authentication. Open to remote opportunities.',
  keywords: ['backend engineer','Python','FastAPI','PostgreSQL','REST API','WebSockets','JWT','Docker','remote internship'],
  authors: [{ name: 'Mahek Fatima' }],
  openGraph: {
    title: 'Mahek Fatima — Backend Engineer',
    description: 'Building scalable APIs and real-time systems with Python & FastAPI.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', creator: '@itzmaherimtiyaz' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}` }} />
      </head>
      <body>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[90] opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
