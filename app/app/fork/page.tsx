import Link from 'next/link'

export default function ForkPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background - Same as Page 1 */}
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
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Select Your Role
        </h1>
        <p className="text-base md:text-lg text-[#8892b0] mb-12">
          Choose how you want to access Helix Academy
        </p>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Admin Card */}
          <Link
            href="/admin/login"
            className="block p-8 bg-[#112240] border border-[#233554] rounded-xl hover:bg-[#0a192f] hover:border-[#3d5a80] transition-all duration-200 group"
          >
            <div className="text-3xl mb-4">👨‍🏫</div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#64ffda] transition">Admin</h2>
            <p className="text-sm text-[#8892b0]">Create and manage mock tests</p>
          </Link>

          {/* Student Card */}
          <Link
            href="/student/login"
            className="block p-8 bg-[#112240] border border-[#233554] rounded-xl hover:bg-[#0a192f] hover:border-[#3d5a80] transition-all duration-200 group"
          >
            <div className="text-3xl mb-4">👨‍🎓</div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#64ffda] transition">Student</h2>
            <p className="text-sm text-[#8892b0]">Attempt mock tests</p>
          </Link>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-[#586279] hover:text-[#8892b0] text-sm font-medium transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-[#586279] text-xs md:text-sm font-medium tracking-wide">
        Driven By Knowledge; Built for Success
      </footer>
    </main>
  )
}
