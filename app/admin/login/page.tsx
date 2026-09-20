'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode === 'Helix Simulator') {
      router.push('/admin/dashboard')
    } else {
      setError('Incorrect passcode. Please try again.')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#e6f1ff]" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.02
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-[#112240] border border-[#233554] rounded-2xl p-10 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="24" r="12" stroke="#64ffda" strokeWidth="2" fill="none"/>
              <path d="M16 52C16 43.163 23.163 36 32 36C40.837 36 48 43.163 48 52" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <circle cx="32" cy="24" r="6" fill="#64ffda" opacity="0.2"/>
            </svg>
          </div>

          <h1 
            className="text-3xl font-bold text-white mb-2 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Admin Login
          </h1>
          <p className="text-[#8892b0] text-center mb-8 text-sm">
            Enter your passcode to access the dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="passcode" className="block text-[#ccd6f6] text-sm font-medium mb-2">
                Passcode
              </label>
              <div className="relative">
                <input
                  id="passcode"
                  type={showPassword ? 'text' : 'password'}
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value)
                    setError('')
                  }}
                  className="w-full px-4 py-3 pr-12 bg-[#0a192f] border border-[#233554] rounded-lg text-white placeholder-[#586279] focus:outline-none focus:border-[#3d5a80] focus:ring-1 focus:ring-[#3d5a80] transition"
                  placeholder="Enter passcode"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#586279] hover:text-[#8892b0] transition"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-red-400 text-sm font-medium">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#112240] hover:bg-[#0a192f] border border-[#233554] text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Login
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              href="/fork"
              className="text-[#586279] hover:text-[#8892b0] text-sm font-medium transition"
            >
              ← Back to Role Selection
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-[#586279] text-xs md:text-sm font-medium tracking-wide">
        Driven By Knowledge; Built for Success
      </footer>
    </main>
  )
}
