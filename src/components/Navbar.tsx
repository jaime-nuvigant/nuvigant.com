"use client";

import { useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Características", href: "/#features" },
  { label: "Calculadora ISR", href: "/#isr" },
  { label: "Precios", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <Image
            src="/images/nuvigant-letter-logo.png"
            alt="Nuvigant"
            width={450}
            height={100}
            className="h-8 sm:h-9 w-auto max-w-[min(200px,55vw)] object-contain object-left group-hover:opacity-90 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#056dfe] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.nuvigant.com/operation/catalogue"
            className="text-sm font-medium text-slate-600 hover:text-[#056dfe] transition-colors px-4 py-2"
          >
            Iniciar sesión
          </a>
          <Link
            href="#contact"
            className="text-sm font-semibold text-white bg-[#056dfe] hover:bg-[#0459d4] px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            Solicitar demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#056dfe] transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center text-sm font-semibold text-white bg-[#056dfe] hover:bg-[#0459d4] px-5 py-2.5 rounded-lg transition-all"
          >
            Solicitar demo
          </Link>
        </div>
      )}
    </header>
  );
}
