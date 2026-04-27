import { ShieldCheck, BarChart3, TrendingUp, ArrowRight } from "lucide-react";
import { URL_SCHEDULE_DEMO } from "../constants";

const features = [
  {
    icon: ShieldCheck,
    title: "Protección Anti Lavado",
    desc: "Duerme tranquil@ sabiendo que estás cumpliendo con las obligaciones antilavado en todo momento.",
  },
  {
    icon: BarChart3,
    title: "Reportes Personalizados",
    desc: "Visualiza tu información como sea que tú requieras. Construye tus propios reportes en segundos.",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Seguimiento Exitoso",
    desc: "Realiza negociaciones exitosas generando cotizaciones automáticas y personalizadas.",
  },
];

export default function FinanceAgenciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Controla tus proyectos, flujo y clientes en un solo lugar
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Nuestra plataforma en la nube te permite administrarte de una manera sencilla
            siempre cumpliendo con las leyes antilavado de manera automática.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Lo que necesitas en un solo lugar</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Nuvigant se adapta a tu empresa. Contamos con módulos que puedes usar de
              manera independiente para cumplir tus objetivos.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, featured }) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center gap-4 rounded-2xl p-8 ${
                  featured
                    ? "bg-white shadow-md border-t-4 border-t-[#056dfe] border-slate-100"
                    : "bg-white shadow-sm border border-slate-100"
                }`}
              >
                <Icon size={36} className="text-[#4161d4]" />
                <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Ver Más <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">
              Conoce a Tu Cliente
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Mantén la información de tus clientes centralizada y sin mayor esfuerzo
              podrás saber exactamente qué tipo de operaciones has realizado con cada uno
              de tus clientes. Tanto para prevención de lavado de dinero como para dar un
              buen servicio, esto se vuelve muy útil.
            </p>
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Ver más <ArrowRight size={16} />
            </a>
          </div>
          <div className="rounded-2xl bg-slate-100 h-64 flex items-center justify-center">
            <ShieldCheck size={64} className="text-slate-300" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-2xl bg-slate-100 h-64 flex items-center justify-center">
            <BarChart3 size={64} className="text-slate-300" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">
              Saca provecho de tu información
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Teniendo tu información operativa en nuestra plataforma te permitirá
              analizarla y generar los reportes que tú necesites con unos tantos clicks.
              Empezar a administrarte con un enfoque basado en datos.
            </p>
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Ver más <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#53a0fd] to-[#4161d4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white leading-tight">
            Administrarte y protegerte contra el lavado de dinero no tiene que ser difícil.
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Nuestra aplicación se distingue por ser gráfica y fácil de gestionar. Sin
            necesidad de que tú mantengas servidores ni redes, tendrás acceso a tu
            información en donde sea que te encuentres y desde cualquier dispositivo.
          </p>
        </div>
      </section>
    </div>
  );
}
