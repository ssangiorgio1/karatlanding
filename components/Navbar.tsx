"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/8 py-3"
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isScrolled ? "bg-accent" : "bg-white/20 backdrop-blur-sm border border-white/30"
            }`}>
              <span className={`text-xl font-heading font-bold ${isScrolled ? "text-white" : "text-white"}`}>A</span>
            </div>
            <div>
              <span className={`text-xl font-heading tracking-wider transition-colors ${isScrolled ? "text-primary-dark" : "text-white"}`}>
                APEX
              </span>
              <p className={`text-xs tracking-widest font-semibold transition-colors ${isScrolled ? "text-accent" : "text-white/60"}`}>
                OBRAS & SERVICIOS
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/10 ${
                  isScrolled
                    ? "text-slate-600 hover:text-accent hover:bg-accent/8"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-4 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/30"
            >
              Presupuesto Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-slate-600 hover:text-accent" : "text-white/80 hover:text-white"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-slate-600 hover:text-accent hover:bg-accent/8 font-semibold transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-2 px-4 py-3 bg-accent text-white font-bold text-center rounded-xl hover:bg-accent-dark transition-colors duration-300 text-sm tracking-wide"
            >
              Presupuesto Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
