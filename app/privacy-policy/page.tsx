import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Prime Edge Chartered Certified Accountants. Learn how we collect, use, and protect your personal data in accordance with UK GDPR.',
}

const sections = [
  {
    title: '1. Who We Are',
    content: `Prime Edge Chartered Certified Accountants ("Prime Edge", "we", "us", or "our") is a firm of Chartered Certified Accountants based in Cheltenham, England. We are regulated by the Association of Chartered Certified Accountants (ACCA) and registered with the Information Commissioner's Office (ICO) as a data controller.

Our registered address is: 62 Symphony Road, Cheltenham, GL51 6GJ, England.

If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at info@primeedgeaccountants.co.uk.`,
  },
  {
    title: '2. What Data We Collect',
    content: `We may collect and process the following categories of personal data:

Identity Data — including your full name, title, and date of birth where relevant to our services.

Contact Data — including your email address, telephone number, and postal address.

Financial Data — including bank account details, tax reference numbers (UTR, NI), and financial records necessary to provide our accounting services.

Transaction Data — including details of payments made to or received from you.

Technical Data — including your IP address, browser type, and operating system when you visit our website.

Usage Data — including information about how you use our website and services.

Communications Data — including records of correspondence between you and Prime Edge.

We do not collect any Special Category Data unless it is strictly necessary for the provision of our services, and only with your explicit consent.`,
  },
  {
    title: '3. How We Collect Your Data',
    content: `We collect personal data through the following means:

Direct interactions — when you complete a contact form, booking request, or email us directly.

Service delivery — when you engage us as your accountant and provide financial and personal information necessary for us to act on your behalf.

Website usage — through cookies and analytics tools when you browse our website (see Section 8 on Cookies).

Third parties — such as HMRC, Companies House, or other professional advisers acting on your behalf, where we receive data in the course of providing services.`,
  },
  {
    title: '4. How We Use Your Data',
    content: `We use your personal data for the following purposes:

To provide accounting, tax, payroll, and advisory services to you as our client.

To communicate with you regarding your account, bookings, and enquiries.

To comply with our legal and regulatory obligations, including obligations to HMRC, Companies House, ACCA, and the ICO.

To send you relevant updates, deadlines, or information about changes in tax law that may affect you (you may opt out at any time).

To improve our website and services through analysis of usage data.

To process bookings and respond to enquiries submitted through our website.

We will never sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: '5. Legal Basis for Processing',
    content: `We process your personal data on the following legal bases under UK GDPR:

Contract — processing is necessary to perform our contract with you or to take steps at your request prior to entering into a contract.

Legal obligation — processing is necessary to comply with a legal obligation, including our obligations to HMRC, ACCA, and the ICO.

Legitimate interests — processing is necessary for our legitimate interests in running our business, provided these interests are not overridden by your rights and interests.

Consent — where you have given clear consent for us to process your data for a specific purpose, such as receiving our newsletter or marketing communications.`,
  },
  {
    title: '6. Data Sharing',
    content: `We may share your personal data with the following categories of third parties:

HMRC and Companies House — where required by law to file returns, accounts, or respond to enquiries on your behalf.

ACCA — in the context of our regulatory obligations as a member firm.

Cloud software providers — including Xero, QuickBooks, and similar accounting platforms used to manage your financial records. These providers are bound by data processing agreements.

IT and communication service providers — including email, website hosting, and document management services.

Professional advisers — such as solicitors or financial advisers, where required in the course of providing our services.

We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, regulatory, tax, or accounting requirements.

As a regulated accounting firm, we are required by HMRC and ACCA to retain client records for a minimum of six years from the end of the relevant tax year.

Where we process data on the basis of consent, we will retain it until you withdraw your consent or it is no longer needed.

Upon expiry of the relevant retention period, your data will be securely deleted or anonymised.`,
  },
  {
    title: '8. Cookies',
    content: `Our website uses cookies to distinguish you from other users and to improve your browsing experience. Cookies are small text files stored on your device.

We use the following types of cookies:

Strictly necessary cookies — essential for the website to function and cannot be disabled.

Analytics cookies — used to understand how visitors interact with our website. We use anonymised data and no personally identifiable information is collected without consent.

You can set your browser to refuse all or some cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of the website may become inaccessible or not function properly.`,
  },
  {
    title: '9. Your Rights',
    content: `Under UK GDPR, you have the following rights in relation to your personal data:

Right of access — you have the right to request a copy of the personal data we hold about you (Subject Access Request).

Right to rectification — you have the right to request that we correct any inaccurate or incomplete data we hold about you.

Right to erasure — you have the right to request that we delete your personal data in certain circumstances.

Right to restriction — you have the right to request that we restrict the processing of your personal data in certain circumstances.

Right to data portability — you have the right to request that we transfer your data to you or a third party in a structured, commonly used format.

Right to object — you have the right to object to the processing of your personal data where we are relying on legitimate interests as our legal basis.

Right to withdraw consent — where processing is based on consent, you have the right to withdraw that consent at any time.

To exercise any of these rights, please contact us at info@primeedgeaccountants.co.uk. We will respond to all legitimate requests within one calendar month.

If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk or by calling 0303 123 1113.`,
  },
  {
    title: '10. Data Security',
    content: `We have put in place appropriate technical and organisational security measures to prevent your personal data from being accidentally lost, used, accessed in an unauthorised way, altered, or disclosed.

We limit access to your personal data to those employees, contractors, and third parties who have a business need to know. They will only process your personal data on our instructions.

We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.`,
  },
  {
    title: '11. Third-Party Links',
    content: `Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.`,
  },
  {
    title: '12. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically to stay informed about how we protect your data.

If we make material changes to this policy, we will notify you by email where we hold your contact details.`,
  },
  {
    title: '13. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Prime Edge Chartered Certified Accountants
62 Symphony Road, Cheltenham, GL51 6GJ

Email: info@primeedgeaccountants.co.uk
Phone: 01244 565 227

You may also contact the ICO directly at ico.org.uk if you have concerns about how we handle your data.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #9B097A 0%, #74075B 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: '#59A2AF' }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/2 translate-y-1/2"
          style={{ background: '#2D6198' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8" style={{ background: '#59A2AF' }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
              Legal
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/70 text-base">
            Effective date: 1 January 2025 &nbsp;|&nbsp; Last updated: 1 January
            2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20" style={{ background: '#f5f9fa' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro card */}
          <div
            className="rounded-2xl p-7 mb-10"
            style={{
              background: 'white',
              border: '1px solid rgba(155,9,122,0.08)',
            }}
          >
            <p className="text-gray-600 leading-relaxed text-sm">
              Prime Edge Chartered Certified Accountants is committed to
              protecting your privacy and handling your personal data with
              transparency and care. This Privacy Policy explains how we
              collect, use, store, and share your personal data in accordance
              with the UK General Data Protection Regulation (UK GDPR) and the
              Data Protection Act 2018.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              Please read this policy carefully. By using our website or
              engaging our services, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </div>

          {/* Table of contents */}
          <div
            className="rounded-2xl p-7 mb-10"
            style={{
              background: 'white',
              border: '1px solid rgba(155,9,122,0.08)',
            }}
          >
            <h2
              className="font-bold text-gray-900 mb-4 text-base"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Contents
            </h2>
            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.title}>
                  <a
                    href={`#${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: '#9B097A' }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((s) => (
              <div
                key={s.title}
                id={s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="rounded-2xl p-7 scroll-mt-28"
                style={{
                  background: 'white',
                  border: '1px solid rgba(155,9,122,0.08)',
                }}
              >
                <h2
                  className="font-bold text-gray-900 text-lg mb-4"
                  style={{
                    fontFamily: 'Merriweather, serif',
                    color: '#9B097A',
                  }}
                >
                  {s.title}
                </h2>
                <div className="space-y-3">
                  {s.content.split('\n\n').map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/terms-of-service"
              className="text-sm font-semibold"
              style={{ color: '#9B097A' }}
            >
              View Terms of Service →
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
