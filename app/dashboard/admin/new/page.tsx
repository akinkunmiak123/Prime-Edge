'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import TiptapLink from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import {
  ArrowLeft,
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Minus,
  Undo,
  Redo,
  Upload,
  X,
  Save,
  LogOut,
  AlertCircle,
  CheckCircle,
} from 'lucide-react'
import { SESSION_KEY, SESSION_VALUE } from '@/lib/auth'
import logo from '../../../logo.svg'
import NextImage from 'next/image'

const CATEGORIES = ['Tax', 'Business', 'VAT', 'Payroll', 'General']

const focusStyle = (e: React.FocusEvent<HTMLElement>) => {
  e.target.style.borderColor = '#2D6198'
  e.target.style.boxShadow = '0 0 0 3px rgba(45,97,152,0.12)'
}
const blurStyle = (e: React.FocusEvent<HTMLElement>) => {
  e.target.style.borderColor = '#e5e7eb'
  e.target.style.boxShadow = 'none'
}

export default function NewPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('General')
  const [excerpt, setExcerpt] = useState('')
  const [author, setAuthor] = useState('Prime Edge Team')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [featuredImage, setFeaturedImage] = useState('')
  const [imageUploading, setImageUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  // Auth check
  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY)
    if (session !== SESSION_VALUE) {
      router.replace('/dashboard')
    }
  }, [router])

  // TipTap editor
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
      TiptapLink.configure({ openOnClick: false }),
      Placeholder.configure({
        placeholder: 'Start writing your blog post here...',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'min-h-[320px] sm:min-h-[400px] outline-none',
      },
    },
  })

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY)
    router.push('/dashboard')
  }

  const getHtmlContent = useCallback(() => {
    if (!editor) return ''
    return editor.getText() !== '' ? editor.getHTML() : ''
  }, [editor])

  // Upload featured image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setImageUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.url) {
        setFeaturedImage(data.url)
      } else {
        setStatus({ type: 'error', message: data.error || 'Upload failed' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Image upload failed' })
    } finally {
      setImageUploading(false)
    }
  }

  // Save post
  const handleSave = async () => {
    if (!title.trim()) {
      setStatus({ type: 'error', message: 'Please enter a post title.' })
      return
    }

    const htmlContent = getHtmlContent()
    if (!htmlContent || editor?.getText().trim() === '') {
      setStatus({ type: 'error', message: 'Please write some content.' })
      return
    }

    setSaving(true)
    setStatus(null)

    const TurndownService = (await import('turndown')).default
    const td = new TurndownService({
      headingStyle: 'atx',
      bulletListMarker: '-',
    })
    const markdownContent = td.turndown(htmlContent)

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          date,
          category,
          excerpt,
          author,
          image: featuredImage,
          content: markdownContent,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Post published successfully! Redirecting...',
        })
        setTimeout(() => {
          router.push('/dashboard/admin')
        }, 1500)
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to save post.',
        })
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again.',
      })
    } finally {
      setSaving(false)
    }
  }

  const spinner = (
    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
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
  )

  const toolbar = [
    {
      icon: Bold,
      action: () => editor?.chain().focus().toggleBold().run(),
      active: editor?.isActive('bold'),
      title: 'Bold',
    },
    {
      icon: Italic,
      action: () => editor?.chain().focus().toggleItalic().run(),
      active: editor?.isActive('italic'),
      title: 'Italic',
    },
    {
      icon: Heading2,
      action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
      active: editor?.isActive('heading', { level: 2 }),
      title: 'Heading 2',
    },
    {
      icon: Heading3,
      action: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
      active: editor?.isActive('heading', { level: 3 }),
      title: 'Heading 3',
    },
    {
      icon: List,
      action: () => editor?.chain().focus().toggleBulletList().run(),
      active: editor?.isActive('bulletList'),
      title: 'Bullet List',
    },
    {
      icon: ListOrdered,
      action: () => editor?.chain().focus().toggleOrderedList().run(),
      active: editor?.isActive('orderedList'),
      title: 'Numbered List',
    },
    {
      icon: Minus,
      action: () => editor?.chain().focus().setHorizontalRule().run(),
      active: false,
      title: 'Divider',
    },
    {
      icon: Undo,
      action: () => editor?.chain().focus().undo().run(),
      active: false,
      title: 'Undo',
    },
    {
      icon: Redo,
      action: () => editor?.chain().focus().redo().run(),
      active: false,
      title: 'Redo',
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: '#f5f9fa' }}>
      {/* ── Admin Navbar ── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <NextImage src={logo} alt="Prime Edge" height={32} />
              <div className="h-6 w-px bg-gray-200 hidden sm:block" />
              <Link
                href="/dashboard/admin"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft size={15} />
                <span className="hidden sm:inline">Back to Posts</span>
                <span className="sm:hidden">Posts</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSave}
                disabled={saving}
                className="btn-primary !py-2 !px-4 !text-sm hidden lg:inline-flex"
                style={{ opacity: saving ? 0.7 : 1 }}
              >
                {saving ? (
                  <>
                    {spinner}
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={15} />
                    Publish Post
                  </>
                )}
              </button>
              <button
                onClick={handleLogout}
                className="p-2 flex items-center gap-2 text-sm text-gray-400 hover:text-red-600 transition-colors"
                title="Sign out"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <h1
          className="text-2xl text-gray-900 mb-6 sm:mb-8"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
        >
          New Blog Post
        </h1>

        {/* Status message */}
        {status && (
          <div
            className="flex items-center gap-3 px-5 py-4 rounded-xl mb-6 text-sm font-medium"
            style={{
              background: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
              border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
              color: status.type === 'success' ? '#16a34a' : '#dc2626',
            }}
          >
            {status.type === 'success' ? (
              <CheckCircle size={16} className="flex-shrink-0" />
            ) : (
              <AlertCircle size={16} className="flex-shrink-0" />
            )}
            {status.message}
          </div>
        )}

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
          {/* ── Main editor column ── */}
          <div className="space-y-5 min-w-0">
            {/* Title */}
            <div
              className="bg-white rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(45,97,152,0.08)' }}
            >
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title..."
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-lg sm:text-xl text-gray-900 outline-none placeholder-gray-300"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              />
            </div>

            {/* Editor */}
            <div
              className="bg-white rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(45,97,152,0.08)' }}
            >
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-1 px-3 sm:px-4 py-3 border-b border-gray-100">
                {toolbar.map(({ icon: Icon, action, active, title }) => (
                  <button
                    key={title}
                    type="button"
                    onClick={action}
                    title={title}
                    className="p-2 rounded-lg text-sm transition-all"
                    style={{
                      background: active ? '#eaf3f4' : 'transparent',
                      color: active ? '#2D6198' : '#6b7280',
                    }}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>

              {/* Editor content area */}
              <EditorContent editor={editor} />
            </div>
          </div>

          {/* ── Sidebar settings column ── */}
          <div className="space-y-5">
            {/* Publish settings */}
            <div
              className="bg-white rounded-xl p-5"
              style={{ border: '1px solid rgba(45,97,152,0.08)' }}
            >
              <h3
                className="text-gray-900 mb-4 text-sm"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Publish Settings
              </h3>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Publish Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 text-gray-700 outline-none transition-all"
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 text-gray-700 outline-none transition-all bg-white"
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Author
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 text-gray-700 outline-none transition-all"
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>
            </div>

            {/* Featured image */}
            <div
              className="bg-white rounded-xl p-5"
              style={{ border: '1px solid rgba(45,97,152,0.08)' }}
            >
              <h3
                className="text-gray-900 mb-4 text-sm"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Featured Image
              </h3>

              {featuredImage ? (
                <div className="relative">
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setFeaturedImage('')}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-red-50 transition-colors"
                    title="Remove image"
                  >
                    <X size={14} className="text-gray-500" />
                  </button>
                </div>
              ) : (
                <label className="block cursor-pointer">
                  <div
                    className="border-2 border-dashed rounded-xl p-6 text-center transition-all hover:border-primary"
                    style={{ borderColor: '#e5e7eb' }}
                  >
                    {imageUploading ? (
                      <div
                        className="flex flex-col items-center gap-2"
                        style={{ color: '#2D6198' }}
                      >
                        {spinner}
                        <p className="text-xs text-gray-400">Uploading...</p>
                      </div>
                    ) : (
                      <>
                        <Upload
                          size={20}
                          className="mx-auto mb-2 text-gray-300"
                        />
                        <p className="text-xs font-semibold text-gray-500">
                          Click to upload image
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          JPG, PNG, WebP — max 5MB
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={imageUploading}
                  />
                </label>
              )}
            </div>

            {/* Excerpt */}
            <div
              className="bg-white rounded-xl p-5"
              style={{ border: '1px solid rgba(45,97,152,0.08)' }}
            >
              <h3
                className="text-gray-900 mb-4 text-sm"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Excerpt
              </h3>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                maxLength={200}
                placeholder="A short summary shown on the blog listing page..."
                rows={4}
                className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 text-gray-700 outline-none resize-none transition-all leading-relaxed"
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
              <p className="text-xs text-gray-400 mt-2">
                {excerpt.length}/200 characters
              </p>
            </div>

            {/* Publish button — mobile / tablet */}
            <button
              onClick={handleSave}
              disabled={saving}
              className="btn-primary w-full justify-center lg:hidden"
              style={{ opacity: saving ? 0.7 : 1 }}
            >
              <Save size={16} />
              {saving ? 'Publishing...' : 'Publish Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
