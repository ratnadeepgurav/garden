import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: "PreRnaGroup | Premium Landscaping & Gardening Services",
  description:
    'Professional landscaping, gardening, and maintenance services. Expert garden design, green wall installation, and maintenance support.',
  icons: {
    icon: [
      // {
      //   url: '/icon-light-32x32.png',
      //   media: '(prefers-color-scheme: light)',
      // },
      // {
      //   url: '/icon-dark-32x32.png',
      //   media: '(prefers-color-scheme: dark)',
      // },
      {
        url: '/images/logo-icon.png',
        type: 'image/svg+xml',
      },
    ],
    // apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1B4332',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
