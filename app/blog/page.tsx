import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getAllCategories, formatDate } from '@/lib/posts'
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Accounting insights, tax tips, and business advice from the Prime Edge team.',
}

const categoryColors: Record<string, string> = {
  Tax: '#6f068d',
  Business: '#170df2',
  VAT: '#748ec4',
  Payroll: '#520568',
  General: '#6b7280',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #6f068d 0%, #520568 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: '#748ec4' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8" style={{ background: '#748ec4' }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                Insights & Advice
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Our Blog
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Tax tips, business advice, and financial insights from the Prime
              Edge team — written in plain English.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          BLOG CONTENT
      ════════════════════════════════ */}
      <section className="py-16 lg:py-24" style={{ background: '#f8f7ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition-all"
                style={{
                  background: cat === 'All' ? '#6f068d' : 'white',
                  color: cat === 'All' ? 'white' : '#6b7280',
                  border: '1px solid',
                  borderColor: cat === 'All' ? '#6f068d' : '#e5e7eb',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {posts.length === 0 ? (
            /* Empty state */
            <div className="text-center py-20">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: '#f0eef8' }}
              >
                <BookOpen size={28} style={{ color: '#6f068d' }} />
              </div>
              <h3
                className="font-bold text-gray-900 text-xl mb-2"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                No posts yet
              </h3>
              <p className="text-gray-500 text-sm">
                Check back soon for insights and advice from our team.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => {
                const color =
                  categoryColors[post.category] || categoryColors.General

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="blog-card bg-white rounded-xl overflow-hidden flex flex-col"
                    style={{ border: '1px solid rgba(111,6,141,0.08)' }}
                  >
                    {/* Image / placeholder */}
                    {post.image ? (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="h-48 flex items-center justify-center"
                        style={{
                          background:
                            'linear-gradient(135deg, #f0eef8, #e8e4f5)',
                        }}
                      >
                        <BookOpen
                          size={36}
                          style={{ color: '#6f068d', opacity: 0.25 }}
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Category + date */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            background: `${color}15`,
                            color: color,
                          }}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={11} />
                          {formatDate(post.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        className="font-bold text-gray-900 text-base mb-2 leading-snug"
                        style={{ fontFamily: 'Merriweather, serif' }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <User size={11} />
                          {post.author}
                        </span>
                        <span
                          className="text-xs font-semibold flex items-center gap-1"
                          style={{ color: '#6f068d' }}
                        >
                          Read more <ChevronRight size={13} />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
