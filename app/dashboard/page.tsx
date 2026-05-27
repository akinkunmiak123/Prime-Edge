'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react'
import { SESSION_KEY, SESSION_VALUE } from '@/lib/auth'
import logo from '../logo.svg'

export default function DashboardLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await res.json()

      if (data.success) {
        localStorage.setItem(SESSION_KEY, SESSION_VALUE)
        router.push('/dashboard/admin')
      } else {
        setError('Incorrect email or password. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const togglePassword = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowPassword((prev) => !prev)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          'linear-gradient(135deg, #6f068d 0%, #520568 50%, #0d0d0d 100%)',
      }}
    >
      {/* Decorative circles */}
      <div
        className="fixed top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: '#748ec4' }}
      />
      <div
        className="fixed bottom-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"
        style={{ background: '#170df2' }}
      />

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Top bar */}
          <div
            className="px-8 py-6 flex flex-col items-center"
            style={{ background: '#f8f7ff' }}
          >
            <Image src={logo} alt="Prime Edge" height={48} className="mb-3" />
            <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
              Admin Dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="px-8 py-8">
            <h1
              className="text-xl font-black text-gray-900 mb-1"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Sign In
            </h1>
            <p className="text-gray-400 text-sm mb-7">
              Enter your credentials to access the dashboard.
            </p>

            {error && (
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-lg mb-5 text-sm"
                style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#dc2626',
                }}
              >
                <AlertCircle size={16} className="flex-shrink-0" />
                {error}
              </div>
            )}

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@primeedge.co.uk"
                  required
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-sm border border-gray-200 focus:outline-none transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6f068d'
                    e.target.style.boxShadow = '0 0 0 3px rgba(111,6,141,0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 rounded-lg text-sm border border-gray-200 focus:outline-none transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6f068d'
                    e.target.style.boxShadow = '0 0 0 3px rgba(111,6,141,0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb'
                    e.target.style.boxShadow = 'none'
                  }}
                />
                {/* Eye toggle — larger tap target for mobile */}
                <button
                  type="button"
                  onMouseDown={togglePassword}
                  onTouchEnd={togglePassword}
                  className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3.5 text-base"
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
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
                  Signing in...
                </>
              ) : (
                <>
                  <Lock size={15} />
                  Sign In
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          Prime Edge Admin — Authorised Access Only
        </p>
      </div>
    </div>
  )
}
