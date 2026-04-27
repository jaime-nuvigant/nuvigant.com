import Link from "next/link";
import { Shield, FileText, Zap, ArrowRight } from "lucide-react";
import { URL_SCHEDULE_DEMO } from "@/constants";

export default function ESignaturePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28 text-center">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #2ea4f2 0%, #51d2e9 70%, transparent 100%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Firma Electrónica Avanzada
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Nuvigant te permite administrar, firmar y solicitar firmas de documentos desde cualquier lugar, en cuestión de minutos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/e-siganature/fiel/"
              className="group inline-flex items-center gap-2 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
            >
              Ver FIEL eFirma
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={URL_SCHEDULE_DEMO}
              className="inline-flex items-center gap-2 text-slate-700 font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              Agendar Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features Grid ──────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Todo lo que necesitas para firmar
            </h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              Facilita los procesos de firma de tus clientes con una solución segura, legal y rápida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Seguridad",
                desc: "La llave privada de tu eFirma nunca se comparte con nosotros. Un error común en otros servicios de firma electrónica.",
                color: "#056dfe",
                bg: "#eff6ff",
              },
              {
                icon: FileText,
                title: "Legal",
                desc: "Nuestra solución ha sido auditada por expertos en la materia. Cumple con la Ley de Firma Electrónica Avanzada.",
                color: "#2ea4f2",
                bg: "#f0f9ff",
              },
              {
                icon: Zap,
                title: "Rápida",
                desc: "Reduce procesos que antes tomaban semanas a minutos. Olvídate de pedir firmas por paquetería.",
                color: "#51d2e9",
                bg: "#ecfeff",
              },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: bg }}
                >
                  <Icon size={28} style={{ color }} strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Block: ¿Tiene validez? ──────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                ¿Tiene validez la eFirma?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Por supuesto. Siempre y cuando un documento no necesite ser firmado ante notario o exista una ley que expresamente lo prohíba, puedes usar la eFirma.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Una firma realizada con la FIEL no es repudiable ni falsificable, mientras que las autógrafas sí lo son.
              </p>
              <a
                href="http://www.diputados.gob.mx/LeyesBiblio/pdf/LFEA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Ver Ley de Firma Electrónica
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 flex items-center justify-center min-h-[320px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Shield size={40} style={{ color: "#056dfe" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">Firma con valor legal</p>
                <p className="text-slate-500 text-sm mt-2">Respaldada por la Ley Federal de Firma Electrónica Avanzada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Block: Mejor con todo lo demás ─────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-10 flex items-center justify-center min-h-[320px] order-last lg:order-first">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Zap size={40} style={{ color: "#2ea4f2" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">Integrada con tu operación</p>
                <p className="text-slate-500 text-sm mt-2">La eFirma trabaja junto con los demás módulos de Nuvigant</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Robusta por sí sola, mejor con todo lo demás
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Nuvigant te ofrece varias herramientas que te pueden ayudar a administrarte de una manera amigable y sencilla. Puedes utilizar nuestra plataforma únicamente para firmar, si así lo deseas, pero le sacarás mucho más provecho si conoces las otras herramientas que se integran con la eFirma directamente.
              </p>
              <Link
                href={URL_SCHEDULE_DEMO}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Agenda una Demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-24 text-center"
        style={{ background: "linear-gradient(135deg, #53a0fd 0%, #4161d4 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Empieza a reducir tus tiempos.
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Empezar a trabajar en la nube usando la eFirma es más fácil de lo que crees. Sólo ponte en contacto con nosotros.
          </p>
          <Link
            href="/e-siganature/fiel/fiel-pricing/"
            className="inline-flex items-center gap-2 bg-white text-[#3D72E7] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
          >
            Ver Precios
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
