import { CalendarCheck } from "lucide-react";
import { URL_SCHEDULE_DEMO } from "../constants";

export default function ExclusiveClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="pt-28 pb-20 lg:pt-36 lg:pb-28"
        style={{
          background:
            "linear-gradient(135deg, #474ab6 0%, #9271f6 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              ¡Hola!
            </h1>
            <div className="mt-4 w-10 h-1 rounded-full bg-[#09e1c0]" />
            <p className="mt-6 text-xl font-semibold text-[#d4ccff] leading-relaxed">
              Estás intentando acceder a una sección exclusiva para clientes,
              pero ¡no te preocupes! Da clic en agendar una demo para que te
              brindemos más información.
            </p>
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#09e1c0] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#09e1c0]/40 hover:shadow-xl hover:opacity-95 transition-all"
            >
              <CalendarCheck size={18} />
              Agendar una demo
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 rounded-3xl bg-white/10 flex items-center justify-center">
              <CalendarCheck size={96} className="text-white/40" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
