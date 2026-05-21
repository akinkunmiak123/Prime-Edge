'use client'

import { useEffect } from 'react'

type Props = {
  url: string
}

export default function CalendlyEmbed({ url }: Props) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={`${url}?hide_gdpr_banner=1&primary_color=6f068d`}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
