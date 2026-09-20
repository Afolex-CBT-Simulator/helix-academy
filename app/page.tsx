export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Gradient + Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e3a5f] to-[#e0f2fe] opacity-90" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Helix Academy
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#bfdbfe] mb-12 font-medium">
          Helix Online Tutorial [H•O•T]
        </p>

        {/* CTA Button */}
        <a
          href="/fork"
          className="inline-block bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold py-3 px-10 rounded-lg transition shadow-lg"
        >
          Enter
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-[#94a3b8] text-sm">
        Driven By Knowledge; Built for Success
      </footer>
    </main>
  )
}
