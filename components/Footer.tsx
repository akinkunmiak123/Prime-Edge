'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Pencil } from 'lucide-react'
import logo from '../app/logo.svg'

const services = [
  { label: 'Bookkeeping', href: '/services#bookkeeping' },
  { label: 'Account Preparation & Filing', href: '/services#accounts' },
  { label: 'Payroll Services', href: '/services#payroll' },
  { label: 'Tax Planning & Filing', href: '/services#tax' },
  { label: 'VAT Registration & Filing', href: '/services#vat' },
  { label: 'Business Advisory', href: '/services#advisory' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Business Lifecycle', href: '/lifecycle' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const areasWeCover = [
  {
    label: 'Payroll Services Cheltenham',
    href: '/services/payroll-cheltenham',
  },
  { label: 'Bookkeeping Cheltenham', href: '/services/bookkeeping-cheltenham' },
  {
    label: 'Tax Accountant Cheltenham',
    href: '/services/tax-accountant-cheltenham',
  },
  {
    label: 'Small Business Accountant Cheltenham',
    href: '/services/small-business-accountant-cheltenham',
  },
  {
    label: 'Startup Accountant Cheltenham',
    href: '/services/startup-accountant-cheltenham',
  },
  {
    label: 'Accountant for Contractors Gloucestershire',
    href: '/services/contractor-accountant-gloucestershire',
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0d0d0d' }} className="text-white">
      {/* ── Top CTA Banner ── */}
      <div style={{ background: '#9B097A' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="font-bold text-2xl text-white mb-1"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Ready to take control of your finances?
              </h3>
              <p className="text-white/80 text-sm">
                Book a discovery call with our expert team today.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 flex-wrap justify-center">
              <Link href="/contact" className="btn-white">
                Get Started
              </Link>
              <a
                href="tel:01244565227"
                className="btn-outline"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 — Brand */}
            <div className="lg:col-span-1">
              <div className="mb-0 max-w-[120px] sm:max-w-[150px] md:max-w-[220px]">
                <Image
                  src={logo}
                  alt="Prime Edge Accountants"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Trusted accounting and financial advisory services for
                individuals and businesses across Gloucestershire and beyond.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/company/prime-edge-chartered-certified-accountants/',
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/primeedgeaccountants',
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Facebook',
                    href: 'https://www.facebook.com/share/1B2DmLE8PA/',
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'X / Twitter',
                    href: 'https://x.com/primeedgeaccts',
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all text-white/60 hover:text-white hover:bg-[#9B097A]"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — Services */}
            <div>
              <h4
                className="font-bold text-sm text-white mb-5 tracking-wide uppercase"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors group-hover:bg-white"
                        style={{ background: '#9B097A' }}
                      />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Quick Links */}
            <div>
              <h4
                className="font-bold text-sm text-white mb-5 tracking-wide uppercase"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors group-hover:bg-white"
                        style={{ background: '#9B097A' }}
                      />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4
                className="font-bold text-sm text-white mb-5 tracking-wide uppercase"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:01244565227"
                    className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors"
                  >
                    <Phone
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: '#59A2AF' }}
                    />
                    <span>01244 565 227</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@primeedgeaccountants.co.uk"
                    className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors"
                  >
                    <Mail
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: '#59A2AF' }}
                    />
                    <span>info@primeedgeaccountants.co.uk</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/447570229041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors"
                  >
                    <Pencil
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: '#59A2AF' }}
                    />
                    <span>+44 7570229041</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-white/60 text-sm">
                    <MapPin
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: '#59A2AF' }}
                    />
                    <span>
                      Based in Gloucestershire
                      <br />
                      Serving clients across England and Wales.
                    </span>
                  </div>
                </li>
              </ul>

              {/* Availability Box */}
              <div
                className="mt-6 p-4 rounded-lg"
                style={{
                  background: 'rgba(155,9,122,0.15)',
                  border: '1px solid rgba(155,9,122,0.3)',
                }}
              >
                <p className="text-white/70 text-xs leading-relaxed">
                  <span className="text-white font-semibold block mb-1">
                    Response Hours
                  </span>
                  Mon – Fri: 9:00am – 5:30pm
                  <br />
                  <span className="text-white/50">
                    We typically reply within a few hours
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Areas We Cover ── */}
      <div className="py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/40 text-xs font-semibold tracking-wide uppercase mb-3">
            Areas We Cover
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {areasWeCover.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-white/50 text-xs hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
                {i < areasWeCover.length - 1 && (
                  <span className="text-white/20 ml-2">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Prime Edge Certified Accountants. All
            rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="/privacy-policy"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('pe_cookie_consent')
                window.location.reload()
              }}
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
