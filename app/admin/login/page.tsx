'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')
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
        <div className="bg-[#112240] border border-[#233554] rounded-2xl p-8 shadow-2xl">
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
              <input
                id="passcode"
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value)
                  setError('')
                }}
                className="w-full px-4 py-3 bg-[#0a192f] border border-[#233554] rounded-lg text-white placeholder-[#586279] focus:outline-none focus:border-[#3d5a80] transition"
                placeholder="Enter passcode"
                autoComplete="off"
              />
              {error && (
                <p className="mt-2 text-red-400 text-sm font-medium">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#112240] hover:bg-[#0a192f] border border-[#233554] text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
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
