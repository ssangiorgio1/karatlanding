interface WhyUsProps {
  id?: string;
}

export default function WhyUs({ id }: WhyUsProps) {
  const reasons = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Equipo Multidisciplinario",
      description: "No necesitás buscar diferentes contratistas. Tenemos todos los profesionales que tu obra necesita trabajando en equipo."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Matriculados y Certificados",
      description: "Todos nuestros profesionales cuentan con matrícula vigente y habilitaciones correspondientes. Trabajos legales y seguros."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Experiencia Comprobable",
      description: "Años de experiencia en obras residenciales, comerciales e industriales. Podemos brindarte referencias de trabajos anteriores."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Garantía de Trabajos",
      description: "Todos nuestros trabajos incluyen garantía escrita. Respaldamos la calidad de cada servicio que realizamos."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Presupuestos Transparentes",
      description: "Presupuestos detallados sin costos ocultos. Visitamos tu obra, evaluamos y te damos un precio justo y claro."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Atención Personalizada",
      description: "Te acompañamos desde la consulta inicial hasta la finalización del trabajo. Comunicación directa y constante."
    }
  ];

  return (
    <section id={id ?? "nosotros"} className="py-28 bg-primary-dark relative overflow-hidden">
      {/* Subtle dot background */}
      <div className="absolute inset-0 dot-pattern-light" />

      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Por qué elegirnos</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-heading text-white tracking-wide mb-4">
            ¿POR QUÉ ELEGIRNOS?
          </h2>
          <p className="text-white/40 text-xl max-w-3xl mx-auto">
            Más que un servicio, somos tu{" "}
            <span className="text-accent-light font-semibold">socio de confianza</span>{" "}
            para cualquier proyecto de construcción y mantenimiento.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/5 hover:bg-white/10 border border-white/8 hover:border-accent/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="text-4xl font-heading text-white/10 group-hover:text-accent/20 transition-colors w-10 leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center mb-3 transition-all duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{reason.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "100%", label: "Profesionales Certificados", color: "text-accent" },
            { value: "6+", label: "Especialidades", color: "text-accent" },
            { value: "24hs", label: "Tiempo de Respuesta", color: "text-success" },
            { value: "100%", label: "Garantía de Trabajos", color: "text-success" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-8 text-center hover:bg-white/8 transition-colors">
              <div className={`text-5xl font-heading mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-white/35 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
