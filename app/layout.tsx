import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export const metadata: Metadata = {
  title: {
    template: '%s | Prime Edge Accountants',
    default: 'Prime Edge Chartered Certified Accountants | Cheltenham, UK',
  },
  description:
    'Prime Edge Chartered Certified Accountants – Expert accountants in Cheltenham providing tailored tax, accounting, bookkeeping, payroll, and business advisory services.',
  keywords: [
    'accountants cheltenham',
    'chartered certified accountants uk',
    'tax advice cheltenham',
    'bookkeeping gloucestershire',
    'payroll services uk',
    'business advisory cheltenham',
    'self assessment tax return',
    'VAT registration uk',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.primeedgeaccountants.co.uk',
    siteName: 'Prime Edge Accountants',
    title: 'Prime Edge Chartered Certified Accountants',
    description:
      'Expert accountants in Cheltenham providing tailored tax, accounting, bookkeeping, payroll, and business advisory services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Edge Chartered Certified Accountants',
    description:
      'Expert accountants in Cheltenham providing tailored tax, accounting, bookkeeping, payroll, and business advisory services.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
