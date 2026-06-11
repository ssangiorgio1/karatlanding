"use client";

interface ServicesBannerProps {
  id?: string;
}

export default function ServicesBanner({ id }: ServicesBannerProps) {
  const services = [
    {
      title: "Instalaciones Eléctricas",
      description: "Sistemas eléctricos completos, tableros, puesta a tierra y domótica. Profesionales matriculados con todas las certificaciones necesarias. Trabajamos con los mejores materiales del mercado.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ["Tableros eléctricos", "Domótica", "Certificaciones", "Emergencias 24/7"],
      color: "yellow",
    },
    {
      title: "Plomería y Gas",
      description: "Instalaciones sanitarias, gas natural, termotanques y calderas. Certificaciones de gas obligatorias. Reparaciones de urgencia con atención inmediata.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: ["Instalaciones de gas", "Cloacas", "Termotanques", "Certificación"],
      color: "blue",
    },
    {
      title: "Aire Acondicionado",
      description: "Instalación, mantenimiento y reparación de equipos de aire acondicionado. Split, central, VRV. Carga de gas, limpieza de filtros y service preventivo. Todas las marcas.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      features: ["Instalación split", "Mantenimiento", "Carga de gas", "Todas las marcas"],
      color: "cyan",
    },
    {
      title: "Arquitectura y Construcción",
      description: "Diseño arquitectónico, planos, ampliaciones y remodelaciones integrales. Dirección de obra profesional. Desde el proyecto hasta la llave en mano.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ["Planos y diseño", "Ampliaciones", "Dirección de obra", "Habilitaciones"],
      color: "orange",
    },
    {
      title: "Carpintería",
      description: "Muebles a medida, aberturas, deck, pérgolas y revestimientos. Trabajamos con maderas de primera calidad. Diseños personalizados según tu necesidad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      features: ["Muebles a medida", "Aberturas", "Deck y pérgolas", "Revestimientos"],
      color: "amber",
    },
    {
      title: "Pintura y Revestimientos",
      description: "Pintura interior y exterior, impermeabilización, tratamiento de humedades. Revestimientos texturados y venecianos. Asesoramiento en colores y terminaciones.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ["Pintura latex", "Impermeabilización", "Humedades", "Revestimientos"],
      color: "pink",
    },
    {
      title: "Servicio Integral",
      description: "Refacciones completas llave en mano. Coordinamos todos los oficios para que no tengas que preocuparte por nada. Un solo responsable para toda tu obra.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ["Llave en mano", "Coordinación total", "Un solo contacto", "Garantía integral"],
      color: "green",
    }
  ];

  const iconColors: Record<string, string> = {
    yellow: "bg-yellow-50 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white",
    blue:   "bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    cyan:   "bg-cyan-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white",
    orange: "bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
    amber:  "bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white",
    pink:   "bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white",
    green:  "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
  };

  return (
    <section id={id ?? "servicios"} className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/8 border border-accent/15 rounded-full px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Nuestros Servicios</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-heading text-slate-900 tracking-wide mb-4">
            TODO LO QUE NECESITÁS
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Profesionales especializados en cada área.{" "}
            <span className="text-accent font-bold">7 servicios</span> bajo un solo techo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md shadow-slate-200/60 hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-1.5 transition-all duration-400 border border-slate-100 relative overflow-hidden"
            >
              {/* Subtle background number */}
              <div className="absolute top-4 right-6 text-6xl font-heading text-slate-50 select-none group-hover:text-accent/5 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${iconColors[service.color]}`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs">
                    <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-slate-500">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center space-x-2 text-accent text-sm font-bold hover:space-x-3 transition-all duration-300"
              >
                <span>Solicitar Presupuesto</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-accent to-accent-dark rounded-2xl p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">¿No encontraste lo que buscabas?</h3>
              <p className="text-white/70">Consultanos por cualquier servicio de construcción o mantenimiento</p>
            </div>
            <a
              href="#contacto"
              className="flex-shrink-0 bg-white text-accent font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl tracking-wide whitespace-nowrap"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
