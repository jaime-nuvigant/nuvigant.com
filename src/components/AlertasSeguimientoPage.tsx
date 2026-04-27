import { Mail, MessageCircle } from "lucide-react";
import { EMAIL_CONTACT, WA_DISPLAY, WA_LINK } from "../constants";

export default function AlertasSeguimientoPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 lg:pt-36">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Alertas de seguimiento</h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Recibe avisos oportunos para dar continuidad a trámites, hitos documentales y pendientes de clientes
          sin depender de recordatorios manuales.
        </p>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-7">
          <h2 className="text-2xl font-bold text-slate-900">¿Cómo funciona?</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Configuramos alertas clave por etapa para que tu equipo tenga visibilidad de tareas próximas y acciones
            vencidas. Esto reduce retrasos y mejora la experiencia del cliente final.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-7">
          <h2 className="text-2xl font-bold text-slate-900">Compatibilidad con Notaría++</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            La solución está diseñada para trabajar en conjunto con flujos operativos de Notaría++, facilitando una
            adopción gradual sin interrumpir procesos actuales.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-bold text-slate-900">Contacto</h2>
          <p className="mt-4 text-slate-700">Escríbenos para revisar tu caso y definir la configuración inicial.</p>
          <div className="mt-5 flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#056dfe] px-5 py-3 font-semibold text-white transition hover:bg-[#0458cb]"
            >
              <MessageCircle size={18} />
              WhatsApp {WA_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Mail size={18} />
              {EMAIL_CONTACT}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
