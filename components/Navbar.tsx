'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../app/logo.svg'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/lifecycle', label: 'Business Lifecycle' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // ── SCROLL BEHAVIOUR (commented out — awaiting client confirmation) ──
  // When enabled: navbar shrinks from h-20 to h-16 on scroll,
  // gets a frosted glass background + subtle shadow.
  // To enable: uncomment the useEffect below AND the scrolled checks further down.
  //
  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 20)
  //   window.addEventListener('scroll', handleScroll, { passive: true })
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{
          background: 'rgba(255,255,255,1)',

          // ── SCROLL SHADOW + BORDER (commented out — awaiting client confirmation) ──
          // When enabled: adds a soft shadow and bottom border when user scrolls down.
          // To enable: uncomment below AND uncomment the scroll useEffect above.
          //
          // ...(scrolled && {
          //   background: 'rgba(255,255,255,0.97)',
          //   backdropFilter: 'blur(12px)',
          //   boxShadow: '0 1px 12px rgba(0,0,0,0.08)',
          //   borderBottom: '1px solid #f3f4f6',
          // }),
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between h-20"

            // ── SCROLL HEIGHT SHRINK (commented out — awaiting client confirmation) ──
            // When enabled: navbar shrinks height from h-20 → h-16 on scroll.
            // Replace the className above with this when ready:
            // className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}
          >
            {/* Logo */}
            <Link href="/" className="hidden lg:flex items-center group">
              <Image
                src={logo}
                alt="Prime Edge Accountants logo"
                className="h-auto lg:h-27 w-auto"
                priority
              />
            </Link>

            {/* Mobile Logo */}
            <Link href="/" className="flex lg:hidden items-center group">
              <Image
                src={logo}
                alt="Prime Edge Accountants logo"
                width={100}
                height={90}
                className="h-26 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={pathname === link.href ? { color: '#9B097A' } : {}}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ background: '#9B097A' }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:01244565227"
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
              >
                <Phone size={14} style={{ color: '#9B097A' }} />
                <span>01244 565 227</span>
              </a>
              <Link href="/book" className="btn-primary !py-2.5 !px-5 !text-sm">
                Book Free Call
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X size={22} style={{ color: '#9B097A' }} />
              ) : (
                <Menu size={22} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <Image
              src={logo}
              alt="Prime Edge Accountants logo"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 px-4 py-5 flex flex-col gap-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-all"
                style={
                  pathname === link.href
                    ? { background: '#9B097A', color: 'white' }
                    : { color: '#2a2a2a' }
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="px-5 py-5 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:01244565227"
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <Phone size={14} style={{ color: '#9B097A' }} />
              <span>01244 565 227</span>
            </a>
            <Link href="/book" className="btn-primary justify-center">
              Book Free Discovery Call
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  )
}
