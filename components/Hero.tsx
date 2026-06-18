export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/40 to-primary-dark/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 via-transparent to-primary-dark/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        >
          <source src="/videos/Panorama_ciudad_de_Mendoza_202606101150.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construcción profesional"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Subtle dot overlay */}
      <div className="absolute inset-0 z-[5] dot-pattern-light" />

      {/* Centered content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-10 text-center py-40">
        {/* Label pill */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in-down">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-white/80 font-semibold text-sm tracking-widest uppercase">Mendoza, Argentina</span>
        </div>

        <h1 className="text-7xl sm:text-8xl lg:text-[9rem] font-heading text-white leading-none tracking-wide mb-6 animate-fade-in-up">
          TU OBRA EN
          <br />
          MANOS DE
          <br />
          <span className="text-accent">PROFESIONALES</span>
        </h1>

        <p className="text-xl text-white mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Electricidad • Plomería • Arquitectura • Climatización • Carpintería • Mendoza
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center space-x-3 bg-accent hover:bg-accent-dark text-white font-bold text-sm px-10 py-5 rounded-full tracking-wide transition-all duration-300 hover:scale-105 shadow-2xl shadow-accent/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>SOLICITAR PRESUPUESTO GRATIS</span>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-bold text-sm px-10 py-5 rounded-full tracking-wide transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>VER TRABAJOS</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col items-center space-y-2 text-white/30">
            <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom separator — fills to white (TrustBadges bg) */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-16 sm:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
          <path d="M0,96 C480,20 960,20 1440,96 L1440,96 L0,96 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
