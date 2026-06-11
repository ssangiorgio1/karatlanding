"use client";

const departments = [
  { name: "Capital",        img: "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2025/08/07/9800890c69ec4266b79e0ad5bc32f655_Mendoza_vista_3_%281%29_%281%29.jpg" },
  { name: "Godoy Cruz",     img: "https://www.godoycruz.gob.ar/wp-content/uploads/2024/06/Centro-C%C3%ADvico-GodoyCruz4.jpg" },
  { name: "Guaymallén",    img: "https://www.guaymallen.gob.ar/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-09-at-8.21.20-PM-scaled.jpeg" },
  { name: "Las Heras",      img: "https://mendozafacil.com.ar/wp-content/uploads/2023/09/1_11zon-1-1024x683.webp" },
  { name: "Luján de Cuyo",  img: "https://media.losandes.com.ar/p/6b02baaa90aa68d88193bcda55ea9eeb/adjuntos/368/imagenes/100/051/0100051407/1000x0/smart/la-remodelacion-del-centro-lujan.jpg" },
  { name: "Maipú",          img: "https://www.maipu.gob.ar/wp-content/uploads/2021/10/Plaza-Maipu-1-1024x731.jpeg" },
];

export default function CoverageArea() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background: mosaic 3x2 */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 z-0">
        {departments.map((dept, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={dept.img}
              alt={dept.name}
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-primary-dark/80" />
            <div className="absolute inset-0 border border-white/5" />
            <div className="absolute bottom-3 left-4">
              <span className="text-white/20 font-heading text-sm tracking-widest uppercase">
                {dept.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Blue top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent z-20" />

      {/* Content — centered glass panel */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-28">
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Zona de Cobertura</span>
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-heading text-white leading-none tracking-wide mb-2">
            TRABAJAMOS EN TODO
          </h2>
          <h3 className="text-5xl sm:text-6xl font-heading text-accent leading-none mb-12">
            GRAN MENDOZA
          </h3>

          {/* Glass info card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 w-full max-w-3xl">
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6 text-center">
              Departamentos que cubrimos
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
              {departments.map((dept) => (
                <div key={dept.name} className="flex flex-col items-center space-y-1.5 group">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <svg className="w-4 h-4 text-accent group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs font-semibold text-center leading-tight">{dept.name}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mb-8 text-center">
              <div>
                <div className="text-3xl font-heading text-accent">24/7</div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mt-1">Disponibilidad</p>
              </div>
              <div>
                <div className="text-3xl font-heading text-accent">&lt;2hs</div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mt-1">Respuesta</p>
              </div>
              <div>
                <div className="text-3xl font-heading text-accent">100%</div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mt-1">Cobertura</p>
              </div>
            </div>

            <a
              href="#contacto"
              className="group flex items-center justify-center space-x-2 w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-full transition-all duration-300 hover:scale-105 tracking-wide text-sm shadow-xl shadow-accent/25"
            >
              <span>CONSULTAR COBERTURA</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
