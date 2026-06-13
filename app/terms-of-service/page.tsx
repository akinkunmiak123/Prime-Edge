import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Prime Edge Chartered Certified Accountants. Please read these terms carefully before engaging our services.',
}

const sections = [
  {
    title: '1. About Us',
    content: `Prime Edge Chartered Certified Accountants ("Prime Edge", "we", "us", or "our") is a firm of Chartered Certified Accountants regulated by the Association of Chartered Certified Accountants (ACCA). Our registered address is 62 Symphony Road, Cheltenham, GL51 6GJ, England.

By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.`,
  },
  {
    title: '2. Our Services',
    content: `Prime Edge provides a range of accounting, tax, payroll, bookkeeping, and business advisory services to individuals and businesses in the United Kingdom. A full description of our services is available on our website at primeedgeaccountants.co.uk/services.

The specific scope of services provided to each client will be agreed in a separate Letter of Engagement, which forms the basis of our professional relationship. These Terms of Service apply in addition to any Letter of Engagement unless expressly stated otherwise.`,
  },
  {
    title: '3. Engagement and Client Responsibilities',
    content: `To engage our services, you will be required to complete our onboarding process, including providing identification documents in accordance with our Anti-Money Laundering (AML) obligations.

As a client, you are responsible for:

Providing us with accurate, complete, and timely information and documents necessary for us to carry out our work.

Notifying us promptly of any changes to your circumstances that may affect our services.

Reviewing and approving all documents, returns, and accounts prepared on your behalf before submission to HMRC, Companies House, or any other authority.

Ensuring that all information you provide to us is truthful and not misleading.

We accept no liability for errors, penalties, or losses arising from inaccurate, incomplete, or late information provided by you.`,
  },
  {
    title: '4. Fees and Payment',
    content: `Our fees are agreed in advance and set out in your Letter of Engagement or as quoted on our website for specific services. All fees are quoted exclusive of VAT unless stated otherwise.

Payment is due within 14 days of the date of invoice unless alternative arrangements have been agreed in writing.

We reserve the right to suspend or terminate our services if payment is not received by the due date. We may charge interest on overdue invoices at a rate of 8% per annum above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.

We reserve the right to review and amend our fees annually, with reasonable notice provided to clients.`,
  },
  {
    title: '5. Confidentiality',
    content: `We treat all client information as strictly confidential. We will not disclose your personal or financial information to any third party without your consent, except where required by law, regulation, or our professional body (ACCA), or where necessary to provide our services (for example, filing returns with HMRC on your behalf).

Our confidentiality obligations are consistent with our duties as ACCA-regulated accountants and the requirements of the UK GDPR. Please refer to our Privacy Policy for full details of how we handle your personal data.`,
  },
  {
    title: '6. Intellectual Property',
    content: `All content on our website, including text, graphics, logos, and images, is the property of Prime Edge Chartered Certified Accountants and is protected by UK copyright law. You may not reproduce, distribute, or use any content from our website without our prior written consent.

Working papers, reports, and documents prepared by us remain our intellectual property until all fees have been paid in full, at which point ownership of the deliverables passes to you.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `Our liability to you in connection with the services we provide is limited to the fees paid by you to us in the twelve months preceding the event giving rise to the claim.

We are not liable for any indirect, consequential, or special losses, including loss of profit, loss of revenue, or loss of goodwill, however arising.

Nothing in these terms limits our liability for death or personal injury caused by our negligence, fraud, or fraudulent misrepresentation, or any other liability that cannot be excluded by law.

We hold professional indemnity insurance in accordance with the requirements of ACCA.`,
  },
  {
    title: '8. Anti-Money Laundering',
    content: `As a regulated accounting firm, we are required by law to comply with the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017.

This means we are legally required to verify the identity of all clients before providing services and to report any suspicious activity to the National Crime Agency (NCA). We are unable to warn clients if such a report has been made, as this could constitute "tipping off" under the Proceeds of Crime Act 2002.

By engaging our services, you consent to us carrying out the necessary identity verification checks.`,
  },
  {
    title: '9. Termination',
    content: `Either party may terminate our engagement by giving reasonable written notice. What constitutes reasonable notice will depend on the nature and complexity of the work being undertaken.

We reserve the right to terminate our engagement immediately and without notice if:

You provide false or misleading information.

You fail to pay our fees by the due date after reasonable notice.

Continuing the engagement would cause us to breach our professional obligations or the law.

Upon termination, you will be responsible for all fees incurred up to the date of termination. We will provide you with all documents and records that belong to you, subject to payment of any outstanding fees.`,
  },
  {
    title: '10. Complaints',
    content: `We are committed to providing a high quality service to all our clients. If you are unhappy with any aspect of our service, please contact us in the first instance by emailing info@primeedgeaccountants.co.uk or calling 01244 565 227.

We will acknowledge your complaint within five business days and aim to resolve it within 28 days.

If you are not satisfied with our response, you may refer your complaint to the ACCA, which regulates our firm. Details of ACCA's complaints procedure are available at accaglobal.com.`,
  },
  {
    title: '11. Website Use',
    content: `Our website is provided for general information purposes only. Nothing on our website constitutes professional accounting, tax, or financial advice. You should not rely on any information on our website without first obtaining appropriate professional advice.

We make no representations or warranties about the accuracy or completeness of the information on our website. We reserve the right to update, modify, or remove content from our website at any time without notice.

We are not responsible for the content of any third-party websites linked from our website.`,
  },
  {
    title: '12. Governing Law',
    content: `These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: '13. Changes to These Terms',
    content: `We reserve the right to update these Terms of Service at any time. Any changes will be posted on this page with an updated effective date. Continued use of our website or services after any changes constitutes your acceptance of the revised terms.

We will notify existing clients of any material changes to these terms by email where we hold your contact details.`,
  },
  {
    title: '14. Contact Us',
    content: `If you have any questions about these Terms of Service, please contact us:

Prime Edge Chartered Certified Accountants
62 Symphony Road, Cheltenham, GL51 6GJ

Email: info@primeedgeaccountants.co.uk
Phone: 01244 565 227
Website: primeedgeaccountants.co.uk`,
  },
]

export default function TermsOfServicePage() {
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
            Terms of Service
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
              These Terms of Service govern your use of the Prime Edge Chartered
              Certified Accountants website and the professional services we
              provide. Please read them carefully before engaging our services
              or using our website.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              These terms should be read alongside our{' '}
              <Link
                href="/privacy-policy"
                className="font-semibold underline"
                style={{ color: '#9B097A' }}
              >
                Privacy Policy
              </Link>
              . If you have any questions, please contact us before proceeding.
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
              href="/privacy-policy"
              className="text-sm font-semibold"
              style={{ color: '#9B097A' }}
            >
              ← View Privacy Policy
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
