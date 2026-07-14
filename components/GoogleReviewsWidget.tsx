'use client'

import Script from 'next/script'

/* ── Elfsight Google Reviews widget ──
   Connected to: Prime Edge Chartered Certified Accountants
   Free tier — no Google billing required. */

export default function GoogleReviewsWidget() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-61cc81b3-aeea-4a7e-90b4-d50ed46023f0"
        data-elfsight-app-lazy
      />
    </>
  )
}
