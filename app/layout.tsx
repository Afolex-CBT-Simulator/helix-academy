import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Helix Academy - Mock 1.0',
  description: 'Master UTME with precision. Your gateway to exam readiness and academic success.',
  openGraph: {
    title: 'Helix Academy - Mock 1.0',
    description: 'Master UTME with precision. Your gateway to exam readiness and academic success.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
