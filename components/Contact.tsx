"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por tu consulta! Te contactaremos a la brevedad.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/8 border border-accent/15 rounded-full px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Contacto</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-heading text-slate-900 tracking-wide mb-4">
            CONTACTANOS
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Estamos listos para ayudarte. Elegí la forma que prefieras para comunicarte con nosotros.
          </p>
        </div>

        {/* Card container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/40 border border-slate-200">

          {/* Info panel — blue accent background */}
          <div className="lg:col-span-2 bg-gradient-to-br from-accent to-accent-dark p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern-light" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">Información de Contacto</h3>
              <p className="text-white/60 text-sm mb-10">
                Elegí el medio que prefieras. Te respondemos rápido y con la mejor onda.
              </p>

              <div className="space-y-4 mb-10">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-success/20 border border-success/30 flex items-center justify-center text-success flex-shrink-0 group-hover:bg-success group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">WhatsApp</div>
                    <div className="text-white/60 text-xs">+54 9 11 2345-6789</div>
                    <div className="text-success-light text-xs font-semibold mt-0.5">Respuesta inmediata</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+541123456789"
                  className="group flex items-center space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white group-hover:text-accent transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Teléfono</div>
                    <div className="text-white/60 text-xs">+54 11 2345-6789</div>
                    <div className="text-white/40 text-xs font-semibold mt-0.5">Lun a Vie 8-18hs</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contacto@karat.com.ar"
                  className="group flex items-center space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white group-hover:text-accent transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Email</div>
                    <div className="text-white/60 text-xs">contacto@karat.com.ar</div>
                    <div className="text-white/40 text-xs font-semibold mt-0.5">Respuesta en 24hs</div>
                  </div>
                </a>
              </div>

              {/* Service hours */}
              <div className="bg-white/10 rounded-2xl p-5">
                <h4 className="font-bold text-sm mb-4 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Horarios de Atención</span>
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Lunes a Viernes:</span>
                    <span className="font-semibold">8:00 - 18:00hs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Sábados:</span>
                    <span className="font-semibold">9:00 - 13:00hs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Domingos:</span>
                    <span className="text-white/30">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form panel — white */}
          <div className="lg:col-span-3 bg-white p-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Envíanos tu Consulta</h3>
            <p className="text-slate-400 text-sm mb-8">Completá el formulario y te respondemos a la brevedad.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
                    placeholder="juan@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
                    placeholder="11 2345-6789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Servicio de Interés *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
                >
                  <option value="">Seleccionar servicio...</option>
                  <option value="electrico">Instalaciones Eléctricas</option>
                  <option value="plomeria">Plomería y Gas</option>
                  <option value="arquitectura">Arquitectura y Construcción</option>
                  <option value="carpinteria">Carpintería</option>
                  <option value="pintura">Pintura</option>
                  <option value="integral">Servicio Integral</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all resize-none"
                  placeholder="Contanos sobre tu proyecto o consulta..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-full transition-all duration-300 hover:scale-[1.02] tracking-wide text-sm shadow-lg shadow-accent/25"
              >
                ENVIAR CONSULTA
              </button>

              <p className="text-xs text-slate-400 text-center">
                * Campos obligatorios. Te responderemos a la brevedad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
