import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs, formatDate } from '@/lib/posts'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  Tax: '#2D6198',
  Business: '#59A2AF',
  VAT: '#1E4A73',
  Payroll: '#85C4CE',
  General: '#6b7280',
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatInlineMarkdown(text: string) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" style="color: #2D6198; text-decoration: underline">$1</a>',
    )
}

function markdownToHtml(content: string) {
  const lines = content.replace(/\r\n/g, '\n').split('\n')
  let output = ''
  let listType: 'ul' | 'ol' | null = null
  let listOpen = false

  const closeList = () => {
    if (listOpen) {
      output += `</${listType}>`
      listOpen = false
      listType = null
    }
  }

  const flushParagraph = (paragraph: string) => {
    if (!paragraph.trim()) return
    output += `<p>${formatInlineMarkdown(paragraph.trim())}</p>`
  }

  let paragraph = ''

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) {
      flushParagraph(paragraph)
      paragraph = ''
      closeList()
      continue
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/)
    const blockquoteMatch = line.match(/^>\s+(.*)$/)
    const unorderedMatch = line.match(/^[-*+]\s+(.*)$/)
    const orderedMatch = line.match(/^\d+\.\s+(.*)$/)

    if (headingMatch) {
      flushParagraph(paragraph)
      paragraph = ''
      closeList()
      const level = headingMatch[1].length
      output += `<h${level}>${formatInlineMarkdown(headingMatch[2])}</h${level}>`
      continue
    }

    if (blockquoteMatch) {
      flushParagraph(paragraph)
      paragraph = ''
      closeList()
      output += `<blockquote style="border-left: 4px solid #2D6198; padding-left: 1rem; font-style: italic; color: #4b5563">${formatInlineMarkdown(blockquoteMatch[1])}</blockquote>`
      continue
    }

    if (unorderedMatch) {
      flushParagraph(paragraph)
      paragraph = ''
      if (listType !== 'ul') {
        closeList()
        listType = 'ul'
        output += '<ul class="list-disc ml-6 space-y-2">'
        listOpen = true
      }
      output += `<li>${formatInlineMarkdown(unorderedMatch[1])}</li>`
      continue
    }

    if (orderedMatch) {
      flushParagraph(paragraph)
      paragraph = ''
      if (listType !== 'ol') {
        closeList()
        listType = 'ol'
        output += '<ol class="list-decimal ml-6 space-y-2">'
        listOpen = true
      }
      output += `<li>${formatInlineMarkdown(orderedMatch[1])}</li>`
      continue
    }

    paragraph += `${paragraph ? ' ' : ''}${line}`
  }

  flushParagraph(paragraph)
  closeList()
  return output
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const color = categoryColors[post.category] || categoryColors.General

  return (
    <>
      {/* ════════════════════════════════
          POST HERO
      ════════════════════════════════ */}
      <section
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #2D6198 0%, #1E4A73 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: '#59A2AF' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Blog
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Tag size={14} />
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          POST CONTENT
      ════════════════════════════════ */}
      <section className="py-16" style={{ background: '#f5f9fa' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2 overflow-visible">
              {/* Featured image */}
              {post.image && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {/* Post content */}
              <div
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-8 prose-p:leading-8 prose-p:mb-6 prose-li:mb-3 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-a:underline hover:prose-a:no-underline"
                style={
                  {
                    '--tw-prose-headings': '#0d0d0d',
                    '--tw-prose-body': '#4b5563',
                    '--tw-prose-links': '#2D6198',
                    '--tw-prose-bold': '#0d0d0d',
                    '--tw-prose-code-bg': 'rgba(45, 97, 152, 0.1)',
                    '--tw-prose-code': '#2D6198',
                    '--tw-prose-bullets': '#2D6198',
                    '--tw-prose-counters': '#2D6198',
                    '--tw-prose-hr': '#e5e7eb',
                    '--tw-prose-quote-borders': '#2D6198',
                  } as React.CSSProperties
                }
                dangerouslySetInnerHTML={{
                  __html: markdownToHtml(post.content),
                }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA card */}
                <div
                  className="rounded-xl p-6 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #2D6198, #1E4A73)',
                  }}
                >
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    Need help with this?
                  </h3>
                  <p className="text-white/75 text-sm mb-5 leading-relaxed">
                    Our team is here to help. Book a discovery call and we
                    will talk through your situation.
                  </p>
                  <Link
                    href="/book"
                    className="btn-white text-sm w-full justify-center"
                  >
                    Book A Call
                  </Link>
                </div>

                {/* Category badge */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(45,97,152,0.08)',
                  }}
                >
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Category
                  </p>
                  <span
                    className="text-sm font-semibold px-4 py-2 rounded-full"
                    style={{
                      background: `${color}15`,
                      color: color,
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Back to blog */}
                <Link
                  href="/blog"
                  className="btn-outline w-full justify-center text-sm"
                >
                  <ArrowLeft size={15} />
                  All Posts
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
