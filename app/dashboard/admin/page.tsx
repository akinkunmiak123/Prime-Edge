'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  LogOut,
  Plus,
  Trash2,
  Eye,
  FileText,
  AlertTriangle,
  X,
  BookOpen,
  Calendar,
  Tag,
} from 'lucide-react'
import { SESSION_KEY, SESSION_VALUE } from '@/lib/auth'
import Image from 'next/image'
import logo from '../../logo.svg'

type PostMeta = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  author: string
}

export default function AdminPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<PostMeta[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteSlug, setDeleteSlug] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  // Auth check
  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY)
    if (session !== SESSION_VALUE) {
      router.replace('/dashboard')
    } else {
      fetchPosts()
    }
  }, [router])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/posts/list')
      const data = await res.json()
      setPosts(data.posts || [])
    } catch {
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY)
    router.push('/dashboard')
  }

  const handleDelete = async () => {
    if (!deleteSlug) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/posts/${deleteSlug}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.slug !== deleteSlug))
        setDeleteSlug(null)
      }
    } catch (err) {
      console.error('Delete failed:', err)
    } finally {
      setDeleting(false)
    }
  }

  const categoryColors: Record<string, string> = {
    Tax: '#2D6198',
    Business: '#59A2AF',
    VAT: '#1E4A73',
    Payroll: '#85C4CE',
    General: '#6b7280',
  }

  const renderActions = (slug: string) => (
    <div className="flex items-center justify-end gap-1">
      <Link
        href={`/blog/${slug}`}
        target="_blank"
        className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
        title="View post"
      >
        <Eye size={16} />
      </Link>
      <button
        onClick={() => setDeleteSlug(slug)}
        className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all"
        title="Delete post"
      >
        <Trash2 size={16} />
      </button>
    </div>
  )

  return (
    <div className="min-h-screen" style={{ background: '#f5f9fa' }}>
      {/* ── Admin Navbar ── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <Image src={logo} alt="Prime Edge" height={36} />
              <div className="h-6 w-px bg-gray-200 hidden sm:block" />
              <span
                className="hidden sm:inline text-sm font-bold tracking-wide"
                style={{ color: '#2D6198', fontFamily: 'var(--font-heading)' }}
              >
                Admin Dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/blog"
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                <Eye size={15} />
                <span className="hidden sm:inline">View Blog</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                <LogOut size={15} />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1
              className="text-2xl font-black text-gray-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Blog Posts
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} published
            </p>
          </div>
          <Link href="/dashboard/admin/new" className="btn-primary">
            <Plus size={16} />
            New Post
          </Link>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Posts', value: posts.length, icon: FileText },
            {
              label: 'Categories',
              value: new Set(posts.map((p) => p.category)).size,
              icon: Tag,
            },
            {
              label: 'Latest Post',
              value:
                posts.length > 0
                  ? new Date(posts[0].date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                    })
                  : '—',
              icon: Calendar,
            },
            {
              label: 'With Images',
              value: posts.filter((p) => p.image).length,
              icon: BookOpen,
            },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-5"
                style={{ border: '1px solid rgba(45,97,152,0.08)' }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon size={15} style={{ color: '#2D6198' }} />
                  <span className="text-xs text-gray-400">{stat.label}</span>
                </div>
                <div
                  className="text-2xl font-black"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#2D6198',
                  }}
                >
                  {stat.value}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Posts ── */}
        {loading ? (
          <div
            className="bg-white rounded-xl p-12 text-center"
            style={{ border: '1px solid rgba(45,97,152,0.08)' }}
          >
            <div
              className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mx-auto"
              style={{ borderColor: '#2D6198', borderTopColor: 'transparent' }}
            />
            <p className="text-gray-400 text-sm mt-3">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div
            className="bg-white rounded-xl p-10 sm:p-16 text-center"
            style={{ border: '1px solid rgba(45,97,152,0.08)' }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{ background: '#eaf3f4' }}
            >
              <FileText size={28} style={{ color: '#2D6198' }} />
            </div>
            <h3
              className="font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              No posts yet
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Create your first blog post to get started.
            </p>
            <Link href="/dashboard/admin/new" className="btn-primary">
              <Plus size={15} />
              Create First Post
            </Link>
          </div>
        ) : (
          <>
            {/* ── Desktop table (md and up) ── */}
            <div
              className="hidden md:block bg-white rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(45,97,152,0.08)' }}
            >
              <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-100">
                <div className="col-span-5">Title</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-2">Author</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>

              {posts.map((post, index) => {
                const color =
                  categoryColors[post.category] || categoryColors.General
                return (
                  <div
                    key={post.slug}
                    className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors"
                    style={{
                      borderBottom:
                        index < posts.length - 1 ? '1px solid #f3f4f6' : 'none',
                    }}
                  >
                    <div className="col-span-5 flex items-center gap-3 min-w-0">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt=""
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: '#eaf3f4' }}
                        >
                          <FileText size={14} style={{ color: '#2D6198' }} />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-sm truncate">
                          {post.title}
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                          /blog/{post.slug}
                        </p>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${color}15`, color }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <div className="col-span-2 text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>

                    <div className="col-span-2 text-sm text-gray-500 truncate">
                      {post.author}
                    </div>

                    <div className="col-span-1">{renderActions(post.slug)}</div>
                  </div>
                )
              })}
            </div>

            {/* ── Mobile cards (below md) ── */}
            <div className="md:hidden space-y-3">
              {posts.map((post) => {
                const color =
                  categoryColors[post.category] || categoryColors.General
                return (
                  <div
                    key={post.slug}
                    className="bg-white rounded-xl p-4"
                    style={{ border: '1px solid rgba(45,97,152,0.08)' }}
                  >
                    <div className="flex items-start gap-3">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt=""
                          className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                        />
                      ) : (
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: '#eaf3f4' }}
                        >
                          <FileText size={18} style={{ color: '#2D6198' }} />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-gray-400 text-xs truncate mt-1">
                          /blog/{post.slug}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-100">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 min-w-0">
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: `${color}15`, color }}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="text-xs text-gray-400 truncate">
                          {post.author}
                        </span>
                      </div>
                      {renderActions(post.slug)}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>

      {/* ── Delete Confirmation Modal ── */}
      {deleteSlug && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setDeleteSlug(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 z-10">
            <button
              onClick={() => setDeleteSlug(null)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={16} className="text-gray-400" />
            </button>

            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
              style={{ background: '#fef2f2' }}
            >
              <AlertTriangle size={24} style={{ color: '#dc2626' }} />
            </div>

            <h3
              className="text-xl text-gray-900 text-center mb-2"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              Delete Post?
            </h3>
            <p className="text-gray-500 text-sm text-center mb-2">
              You are about to permanently delete:
            </p>
            <p className="font-semibold text-gray-900 text-sm text-center mb-6 px-4">
              &ldquo;{posts.find((p) => p.slug === deleteSlug)?.title}&rdquo;
            </p>
            <p className="text-red-500 text-xs text-center mb-7">
              This action cannot be undone.
            </p>

            <div className="flex flex-col-reverse sm:flex-row gap-3">
              <button
                onClick={() => setDeleteSlug(null)}
                className="btn-outline flex-1 justify-center"
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 justify-center flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm text-white transition-all"
                style={{
                  background: deleting ? '#fca5a5' : '#dc2626',
                  border: '2px solid transparent',
                }}
              >
                {deleting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={15} />
                    Delete Post
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
