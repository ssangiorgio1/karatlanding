export default function TrustBadges() {
  const badges = [
    {
      stat: "100%",
      title: "Profesionales Matriculados",
      description: "Todos certificados y habilitados",
      color: "success",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      stat: "$0",
      title: "Presupuesto Sin Cargo",
      description: "Visitamos y presupuestamos gratis",
      color: "accent",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      stat: "<24hs",
      title: "Atención Rápida",
      description: "Respondemos tu consulta rápido",
      color: "accent",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      stat: "100%",
      title: "Garantía Escrita",
      description: "Todos los trabajos garantizados",
      color: "success",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-white py-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-200/80 hover:shadow-xl hover:shadow-slate-300/60 hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                badge.color === "success"
                  ? "bg-success/10 text-success group-hover:bg-success group-hover:text-white"
                  : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
              }`}>
                {badge.icon}
              </div>

              <div className={`text-4xl sm:text-5xl font-heading mb-1 ${
                badge.color === "success" ? "text-success" : "text-accent"
              }`}>
                {badge.stat}
              </div>
              <h3 className="text-slate-800 font-bold text-sm mb-1">{badge.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
