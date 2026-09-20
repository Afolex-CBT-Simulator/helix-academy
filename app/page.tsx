export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Gradient - Soft Navy to Powder Blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#e6f1ff]" />
      
      {/* Subtle Dot Pattern - Very Low Opacity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.02
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo - Playfair Display Serif Font */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-3"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Helix Academy
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-[#8892b0] mb-16 font-medium tracking-wide">
          Helix Online Tutorial [H•O•T]
        </p>

        {/* CTA Button */}
        <a
          href="/fork"
          className="inline-block bg-[#112240] hover:bg-[#0a192f] border border-[#233554] text-white font-semibold py-4 px-12 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          Enter
        </a>
      </div>

      {/* Footer - Centered, Small Text */}
      <footer className="absolute bottom-8 text-[#586279] text-xs md:text-sm font-medium tracking-wide">
        Driven By Knowledge; Built for Success
      </footer>
    </main>
  )
}
