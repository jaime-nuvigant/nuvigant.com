import Link from "next/link";
import { Video, Calendar, Clock, HelpCircle, ArrowRight, CheckCircle } from "lucide-react";
import { EMAIL_MAIN } from "@/constants";

const faqs = [
  {
    icon: Video,
    question: "¿Cómo hacen las demos?",
    answer: "Las demos las hacemos por medio de una videoconferencia. Llena la forma de arriba y nos pondremos en contacto para compartirte la liga a esta videoconferencia.",
  },
  {
    icon: HelpCircle,
    question: "¿Qué necesito para la demo?",
    answer: "Una conexión a internet y un navegador. Las conferencias las hacemos por lo general con Google Hangouts, para esto necesitarás también tener el navegador Google Chrome. Si prefieres, podemos hacer la videoconferencia por medio de Zoom, sólo indícalo cuando nos pongamos en contacto.",
  },
  {
    icon: CheckCircle,
    question: "¿Qué pasos siguen después de la demo?",
    answer: "Ya hicimos la demo y quedaste convencido de que Nuvigant es para ti. Lo que sigue es que nos lo hagas saber para poder comenzar. Puedes revisar nuestra línea de tiempo de implementación.",
  },
  {
    icon: Calendar,
    question: "¿Cuándo es la demo?",
    answer: "Cuando tú la agendes. Después de que llenes la forma de arriba, podrás agendar la demo en el momento que más te convenga.",
  },
  {
    icon: HelpCircle,
    question: "¿Tiene algún costo hacer la demo?",
    answer: "Para nada, lo único que hacemos es mostrarte la aplicación y esto no genera ningún tipo de compromiso.",
  },
  {
    icon: Clock,
    question: "¿Cuánto tiempo dura?",
    answer: "Nosotros agendamos una hora y media para las demos, pero por lo general no duran más de 40 minutos. Después de esto, la duración depende de las preguntas que puedas tener.",
  },
];

export default function ScheduleDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero with form ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                ¿Quieres ver a Nuvigant en acción?
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                La mejor manera de hacer esto es a través de una demo. Nos conectaremos contigo, te mostraremos todo lo
                que necesitas ver de la aplicación y responderemos todas tus dudas.
              </p>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Solicitar una Demo</h2>
              <p className="text-slate-500 text-sm mb-6">Nos pondremos en contacto contigo muy pronto.</p>

              <form
                action={`mailto:${EMAIL_MAIN}`}
                method="get"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Tu empresa"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@empresa.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="+52 55 0000 0000"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    rows={3}
                    placeholder="Cuéntanos brevemente sobre tu empresa y qué te gustaría ver en la demo..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 text-white font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
                >
                  Solicitar Demo
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-slate-500">Relacionadas a las demos que hacemos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map(({ icon: Icon, question, answer }) => (
              <div
                key={question}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 hover:shadow-md transition-all border-t-4 border-t-[#8147ed]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                    <Icon size={20} style={{ color: "#8147ed" }} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-2">{question}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: Ver implementación ──────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-xl text-slate-600 mb-6">
            ¿Ya quedaste convencido? Revisa nuestra línea de tiempo de implementación.
          </p>
          <Link
            href="/onboarding-timeline-v1/"
            className="inline-flex items-center gap-2 text-white font-bold text-base px-9 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
          >
            Ver Proceso de Implementación
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <blockquote className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed mb-4">
            "Me gusta mucho la manera en que puedo personalizar la plataforma de acuerdo a lo que necesitamos"
          </blockquote>
          <p className="text-slate-500 font-semibold">— Mariana G.</p>
        </div>
      </section>
    </div>
  );
}
