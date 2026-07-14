'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  X,
  Cookie,
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart2,
} from 'lucide-react'

type ConsentState = {
  necessary: boolean
  analytics: boolean
}

const CONSENT_KEY = 'pe_cookie_consent'

export function getCookieConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function hasAnalyticsConsent(): boolean {
  const consent = getCookieConsent()
  return consent?.analytics === true
}

export default function CookieConsent({
  onConsentChange,
}: {
  onConsentChange?: (analytics: boolean) => void
}) {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
  })

  useEffect(() => {
    const stored = getCookieConsent()
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    } else {
      onConsentChange?.(stored.analytics)
    }
  }, [])

  const saveConsent = (analyticsAccepted: boolean) => {
    const newConsent: ConsentState = {
      necessary: true,
      analytics: analyticsAccepted,
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent))
    setConsent(newConsent)
    setVisible(false)
    onConsentChange?.(analyticsAccepted)
  }

  const acceptAll = () => saveConsent(true)
  const rejectAll = () => saveConsent(false)
  const saveCustom = () => saveConsent(consent.analytics)

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-end justify-center sm:justify-end pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 pointer-events-auto"
        style={{ background: 'rgba(0,0,0,0.3)' }}
        onClick={rejectAll}
      />

      {/* Banner */}
      <div
        className="relative pointer-events-auto w-full sm:w-[440px] sm:m-5 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden"
        style={{
          background: 'white',
          border: '1px solid rgba(45,97,152,0.12)',
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{
            background: 'linear-gradient(135deg, #2D6198, #1E4A73)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.2)' }}
            >
              <Cookie size={18} className="text-white" />
            </div>
            <div>
              <p
                className="font-bold text-white text-sm"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Cookie Preferences
              </p>
              <p className="text-white/70 text-xs">Prime Edge Accountants</p>
            </div>
          </div>
          <button
            onClick={rejectAll}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Close and reject all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We use cookies to enhance your browsing experience and analyse how
            our site is used. Strictly necessary cookies are always active. You
            can choose whether to accept analytics cookies below.
          </p>

          {/* Toggle details */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 text-xs font-semibold mb-4 transition-colors"
            style={{ color: '#2D6198' }}
          >
            {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {showDetails ? 'Hide cookie details' : 'Manage cookie preferences'}
          </button>

          {/* Cookie categories */}
          {showDetails && (
            <div className="space-y-3 mb-5">
              {/* Necessary */}
              <div
                className="rounded-xl p-4 flex items-start justify-between gap-4"
                style={{
                  background: '#f5f9fa',
                  border: '1px solid rgba(45,97,152,0.08)',
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#eaf3f4' }}
                  >
                    <Shield size={14} style={{ color: '#2D6198' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs mb-0.5">
                      Strictly Necessary
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Essential for the website to function. Includes session
                      management and security. Cannot be disabled.
                    </p>
                  </div>
                </div>
                {/* Always on toggle */}
                <div
                  className="flex-shrink-0 w-10 h-6 rounded-full flex items-center px-1 cursor-not-allowed"
                  style={{ background: '#2D6198' }}
                >
                  <div className="w-4 h-4 rounded-full bg-white ml-auto" />
                </div>
              </div>

              {/* Analytics */}
              <div
                className="rounded-xl p-4 flex items-start justify-between gap-4"
                style={{
                  background: '#f5f9fa',
                  border: `1px solid ${consent.analytics ? 'rgba(45,97,152,0.2)' : 'rgba(45,97,152,0.08)'}`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#eaf3f4' }}
                  >
                    <BarChart2 size={14} style={{ color: '#2D6198' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs mb-0.5">
                      Analytics Cookies
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Google Analytics 4 and Vercel Analytics — help us
                      understand how visitors use our site. No personal data is
                      shared with advertisers.
                    </p>
                  </div>
                </div>
                {/* Toggle */}
                <button
                  onClick={() =>
                    setConsent((c) => ({ ...c, analytics: !c.analytics }))
                  }
                  className="flex-shrink-0 w-10 h-6 rounded-full flex items-center px-1 transition-all"
                  style={{
                    background: consent.analytics ? '#2D6198' : '#d1d5db',
                  }}
                  aria-label="Toggle analytics cookies"
                >
                  <div
                    className="w-4 h-4 rounded-full bg-white transition-transform duration-200"
                    style={{
                      transform: consent.analytics
                        ? 'translateX(16px)'
                        : 'translateX(0)',
                    }}
                  />
                </button>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={acceptAll}
              className="btn-primary flex-1 justify-center !py-2.5 !text-sm"
            >
              Accept All
            </button>
            {showDetails ? (
              <button
                onClick={saveCustom}
                className="btn-outline flex-1 justify-center !py-2.5 !text-sm"
              >
                Save Preferences
              </button>
            ) : (
              <button
                onClick={rejectAll}
                className="btn-outline flex-1 justify-center !py-2.5 !text-sm"
              >
                Reject All
              </button>
            )}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            By using our site you agree to our{' '}
            <Link
              href="/privacy-policy"
              className="underline hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            . You can change your preferences at any time.
          </p>
        </div>
      </div>
    </div>
  )
}
