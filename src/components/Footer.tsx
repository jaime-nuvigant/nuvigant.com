import { Mail } from "lucide-react";
import { EMAIL_MAIN } from "../constants";

const links = {
  Producto: ["Características", "Calculadora ISR", "Integraciones", "Novedades"],
  Empresa: ["Nosotros", "Blog", "Carreras", "Prensa"],
  Legal: ["Privacidad", "Términos de uso", "Política de cookies", "NOM-151"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51d2e9] to-[#056dfe] flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Nuvi<span className="text-[#2ea4f2]">gant</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              La plataforma de gestión notarial con inteligencia artificial para
              México.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                {/* X (formerly Twitter) */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-400"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={`mailto:${EMAIL_MAIN}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Mail size={15} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Nuvigant. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-600">
            Hecho con ♥ en México 
          </p>
        </div>
      </div>
    </footer>
  );
}
