import Link from "next/link";
import { Video, Calendar, Clock, HelpCircle, ArrowRight, CheckCircle } from "lucide-react";
import ScheduleDemoHero from "@/components/ScheduleDemoHero";

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
      <ScheduleDemoHero />

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
