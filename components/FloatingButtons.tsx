'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [waChatOpen, setWaChatOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowWhatsApp(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Hide floating buttons when body overflow is hidden (mobile menu open)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setMobileMenuOpen(document.body.style.overflow === 'hidden')
    })
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style'],
    })
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whatsappNumber = '447XXXXXXXXX'
  const whatsappMessage = encodeURIComponent(
    'Hello, I would like to enquire about your accounting services.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  // Don't render floating buttons when mobile menu is open
  if (mobileMenuOpen) return null
 const pathname = usePathname()
 if (pathname.startsWith('/dashboard')) return null
  return (
    <>
      {/* ── Scroll To Top ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 left-6 z-40 transition-all duration-300 pointer-events-auto"
        style={{
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop
            ? 'translateY(0) scale(1)'
            : 'translateY(16px) scale(0.8)',
          pointerEvents: showScrollTop ? 'auto' : 'none',
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #2D6198, #2D6198)',
            boxShadow: '0 4px 20px rgba(45,97,152,0.4)',
          }}
        >
          <ArrowUp size={18} className="text-white" />
        </div>
      </button>

      {/* ── WhatsApp Widget ── */}
      <div
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        style={{
          opacity: showWhatsApp ? 1 : 0,
          transform: showWhatsApp ? 'translateY(0)' : 'translateY(16px)',
          pointerEvents: 'none', // ✅ always none on wrapper
        }}
      >
        {/* Chat popup card */}
        <div
          className="transition-all duration-300 origin-bottom-right"
          style={{
            opacity: waChatOpen ? 1 : 0,
            transform: waChatOpen
              ? 'scale(1) translateY(0)'
              : 'scale(0.85) translateY(8px)',
            pointerEvents: waChatOpen ? 'auto' : 'none',
          }}
        >
          <div
            className="w-72 rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(0,0,0,0.08)' }}
          >
            {/* Card header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ background: '#25D366' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.25)' }}
                >
                  PE
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Prime Edge</p>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#90EE90' }}
                    />
                    <p className="text-white/80 text-xs">
                      Typically replies instantly
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setWaChatOpen(false)}
                className="text-white/70 hover:text-white transition-colors text-lg leading-none"
              >
                ×
              </button>
            </div>

            {/* Card body */}
            <div className="bg-white px-5 py-5">
              <div
                className="rounded-xl rounded-tl-none px-4 py-3 mb-5 text-sm text-gray-700 leading-relaxed shadow-sm"
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #dcfce7',
                  maxWidth: '85%',
                }}
              >
                👋 Hello! I&apos;m from Prime Edge Accountants.
                <br />
                <br />
                How can we help you today? We are happy to answer any questions
                about our services.
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                style={{ background: '#25D366' }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Start WhatsApp Chat
              </a>

              <p className="text-center text-xs text-gray-400 mt-3">
                You will be redirected to WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp bubble button */}
        <button
          onClick={() => setWaChatOpen(!waChatOpen)}
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 relative"
          style={{
            pointerEvents: showWhatsApp ? 'auto' : 'none', // ✅ moved here from wrapper
            background: '#25D366',
            boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
          }}
        >
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: '#25D366' }}
          />
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7 relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>
    </>
  )
}