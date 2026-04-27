import { CalendarDays, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { WA_LINK } from "../constants";

const agenda = [
  {
    title: '"Interacción con clientes por medio de Nuvigant"',
    items: [
      "Registro y envío de documentos de clientes de manera remota.",
      "Solicitud de documentos por medio de plataforma.",
      "Envío de notificaciones a clientes en forma automática.",
    ],
  },
  {
    title: '"Automatización de Documentos — Plantillas"',
    items: [
      "Presentación de módulo.",
      "Generación de documentos de manera automática.",
      "Ejemplo práctico.",
    ],
  },
];

export default function WebinarHerramientas1Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-white/70 font-medium mb-2">Nuvigant te invita a</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Webinar: Herramientas Nuvigant Parte 1
              </h1>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-white/90">
                  <CalendarDays size={20} className="flex-shrink-0" />
                  <span>Viernes 21 de octubre, 2022</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Clock size={20} className="flex-shrink-0" />
                  <span>10:00 am (hora CDMX)</span>
                </div>
              </div>
              <div className="mt-8 space-y-6">
                {agenda.map((block) => (
                  <div key={block.title}>
                    <p className="font-semibold text-white">{block.title}</p>
                    <ul className="mt-3 space-y-1.5 ml-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/85 text-sm">
                          <ArrowRight size={14} className="mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="text-xl font-bold text-slate-900 mb-2">¿Te interesa el contenido?</h2>
              <p className="text-slate-600 mb-6">
                Este webinar ya se llevó a cabo. Si tienes interés en conocer estas funcionalidades,
                escríbenos y con gusto programamos una demostración personalizada para tu equipo.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#2ea4f2] px-6 py-3.5 font-semibold text-white shadow-md transition hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Solicitar una demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
