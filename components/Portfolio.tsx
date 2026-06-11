"use client";

import { useState } from "react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Instalación Eléctrica Residencial",
      category: "electrico",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      description: "Sistema eléctrico completo para vivienda de 150m²",
      tags: ["Eléctrico", "Residencial"]
    },
    {
      id: 2,
      title: "Remodelación Integral de Local Comercial",
      category: "integral",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      description: "Obra completa: plomería, electricidad y carpintería",
      tags: ["Integral", "Comercial"]
    },
    {
      id: 3,
      title: "Sistema de Gas y Calefacción",
      category: "gas",
      image: "https://eldiariociudad.com/images/noticias/8673.jpg",
      description: "Instalación completa de gas natural y radiadores",
      tags: ["Gas", "Plomería"]
    },
    {
      id: 4,
      title: "Ampliación de Vivienda",
      category: "arquitectura",
      image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80",
      description: "Diseño y construcción de segundo piso",
      tags: ["Arquitectura", "Construcción"]
    },
    {
      id: 5,
      title: "Muebles de Cocina a Medida",
      category: "carpinteria",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      description: "Carpintería completa en madera de primera calidad",
      tags: ["Carpintería", "Residencial"]
    },
    {
      id: 6,
      title: "Renovación de Baños",
      category: "integral",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      description: "Plomería, revestimientos y sanitarios modernos",
      tags: ["Plomería", "Integral"]
    },
    {
      id: 7,
      title: "Pintura y Revestimientos Exteriores",
      category: "pintura",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
      description: "Impermeabilización y pintura de fachada completa",
      tags: ["Pintura", "Exterior"]
    },
    {
      id: 8,
      title: "Domótica y Automatización",
      category: "electrico",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      description: "Sistema inteligente de iluminación y climatización",
      tags: ["Eléctrico", "Domótica"]
    },
    {
      id: 9,
      title: "Construcción de Deck y Pérgola",
      category: "carpinteria",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      description: "Espacio exterior con deck de madera y pérgola",
      tags: ["Carpintería", "Exterior"]
    },
    {
      id: 10,
      title: "Instalación de Aire Acondicionado Split",
      category: "aire",
      image: "https://www.caloryfrio.com/images/articulos/aire-domestico/instalar-aire-acondicionado.webp",
      description: "Instalación completa de equipos split en oficinas",
      tags: ["Aire Acondicionado", "Comercial"]
    },
    {
      id: 11,
      title: "Sistema de Climatización Central",
      category: "aire",
      image: "https://www.climatizacioncentral.com/wp-content/uploads/2022/08/mantenimeinto-aire-acondicionado.jpg",
      description: "Climatización VRV para edificio corporativo",
      tags: ["Aire Acondicionado", "VRV"]
    },
    {
      id: 12,
      title: "Service y Mantenimiento de Equipos",
      category: "aire",
      image: "https://aireacondicionadospanama.com/wp-content/uploads/2025/02/servicio-carga-gas-refrigerante-de-aire-acondicionado-panama.webp",
      description: "Mantenimiento preventivo y carga de gas refrigerante",
      tags: ["Aire Acondicionado", "Mantenimiento"]
    }
  ];

  const categories = [
    { id: "todos", name: "Todos los Trabajos" },
    { id: "electrico", name: "Eléctrico" },
    { id: "gas", name: "Plomería y Gas" },
    { id: "aire", name: "Aire Acondicionado" },
    { id: "arquitectura", name: "Arquitectura" },
    { id: "carpinteria", name: "Carpintería" },
    { id: "pintura", name: "Pintura" },
    { id: "integral", name: "Integral" }
  ];

  const filteredProjects = selectedCategory === "todos"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/8 border border-accent/15 rounded-full px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-heading text-slate-900 tracking-wide mb-4">
            NUESTROS TRABAJOS
          </h2>
          <p className="text-slate-500 text-lg">
            Más de <span className="text-accent font-bold">150 proyectos</span> completados con éxito.
          </p>
        </div>

        {/* Category filter — pill style */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-accent text-white shadow-lg shadow-accent/25 scale-105"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-md shadow-slate-200/80 hover:shadow-xl hover:shadow-slate-300/60 hover:-translate-y-1.5 transition-all duration-400 bg-white border border-slate-100"
            >
              {/* Image with overlay caption */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                {/* Tags top-right */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/25">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Title inside image at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-accent-light transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs mt-1">{project.description}</p>
                </div>
              </div>

              {/* CTA row */}
              <div className="px-5 py-4 flex items-center justify-between border-t border-slate-100">
                <button className="text-accent font-semibold text-sm flex items-center space-x-1.5 group-hover:space-x-3 transition-all duration-300">
                  <span>Ver detalles</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a
                  href="#contacto"
                  className="text-xs font-semibold text-slate-400 hover:text-accent transition-colors px-3 py-1.5 rounded-full hover:bg-accent/8"
                >
                  Solicitar similar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-slate-50 rounded-3xl p-12 border border-slate-200">
          <h3 className="text-4xl font-heading text-slate-900 tracking-wide mb-3">
            ¿QUERÉS QUE TU PROYECTO SEA EL PRÓXIMO?
          </h3>
          <p className="text-slate-500 mb-8 text-lg">
            Contactanos y recibí un presupuesto personalizado sin compromiso
          </p>
          <a
            href="#contacto"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/25 tracking-wide"
          >
            COMENZAR MI PROYECTO
          </a>
        </div>
      </div>
    </section>
  );
}
