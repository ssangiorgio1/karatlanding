export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Contacto Inicial",
      description: "Llamanos, envianos un WhatsApp o completá el formulario. Te respondemos en menos de 24hs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Visita Técnica",
      description: "Coordinamos una visita sin cargo a tu obra para evaluar el trabajo y entender tus necesidades.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Presupuesto Detallado",
      description: "Te entregamos un presupuesto claro y detallado, con costos discriminados y plazos de ejecución.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Ejecución del Trabajo",
      description: "Una vez aprobado, comenzamos la obra con profesionales matriculados, cumpliendo plazos acordados.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Certificación y Garantía",
      description: "Entregamos certificaciones correspondientes y documentación de garantía escrita del trabajo realizado.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/8 border border-accent/15 rounded-full px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent font-bold text-xs uppercase tracking-widest">El proceso</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-heading text-slate-900 tracking-wide mb-4">
            CÓMO TRABAJAMOS
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Un proceso simple y transparente, desde el primer contacto hasta la entrega final
          </p>
        </div>

        {/* Steps — connected horizontal flow */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/60 to-accent/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="group relative flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200 border-2 border-accent/20 group-hover:border-accent group-hover:shadow-xl group-hover:shadow-accent/15 flex items-center justify-center text-accent font-heading text-3xl mb-4 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-slate-300 group-hover:text-accent mb-3 transition-colors duration-300">
                  {step.icon}
                </div>

                <h3 className="font-bold text-slate-800 mb-2 group-hover:text-accent transition-colors duration-300 text-sm sm:text-base">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed px-2">
                  {step.description}
                </p>

                {/* Mobile arrow connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4 mb-2">
                    <svg className="w-5 h-5 text-accent/40" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern-light" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-heading text-white tracking-wide mb-3">
              ¿LISTO PARA COMENZAR TU PROYECTO?
            </h3>
            <p className="text-white/50 mb-8 text-lg">
              Contactanos hoy y recibí un presupuesto sin cargo en menos de 24 horas
            </p>
            <a
              href="#contacto"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-accent/30 tracking-wide"
            >
              INICIAR MI PROYECTO AHORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
