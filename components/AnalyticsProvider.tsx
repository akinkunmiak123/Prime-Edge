'use client'

import { useState, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import CookieConsent, { getCookieConsent } from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function AnalyticsProvider() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const stored = getCookieConsent()
    return stored?.analytics === true
  })

  return (
    <>
      {/* Cookie consent banner */}
      <CookieConsent
        onConsentChange={(analytics) => setAnalyticsEnabled(analytics)}
      />

      {/* Google Analytics — only loads after consent */}
      <Suspense fallback={null}>
        <GoogleAnalytics enabled={analyticsEnabled} />
      </Suspense>

      {/* Vercel Analytics — privacy friendly, minimal data */}
      <Analytics />
    </>
  )
}
