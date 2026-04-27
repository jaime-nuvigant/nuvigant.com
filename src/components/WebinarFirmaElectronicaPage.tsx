import { Video, ArrowRight } from "lucide-react";

const agenda = [
  {
    title: "¿Qué es la Firma Electrónica Avanzada?",
    desc: "Una breve introducción. Platicaremos un poquito de su historia y sobre cómo funciona (de una manera no muy técnica).",
  },
  {
    title: "Sobre una Constitución de Sociedad",
    desc: "Platicaremos sobre nuestra experiencia participando en la constitución de una sociedad utilizando esta tecnología.",
  },
  {
    title: "Un Ejemplo Práctico",
    desc: "Firmaremos un documento utilizando la Firma Electrónica Avanzada por medio de nuestro CRM: Nuvigant.",
  },
  {
    title: "Retos de la Firma Electrónica Avanzada",
    desc: "Hablaremos sobre algunas de las razones por las cuales la Firma Electrónica Avanzada no ha sido completamente adoptada y por qué creemos nosotros que eso cambiará.",
  },
  {
    title: "¿Cuándo y dónde?",
    desc: "El webinar fue el día 18 de Marzo a las 11:00 a.m. (hora CdMx). El webinar se realizó por Zoom y fue grabado para que tengas acceso a él cuando tú quieras.",
  },
  {
    title: "¿Cuál es el costo?",
    desc: "Ninguno, puedes ver el webinar de manera gratuita.",
  },
];

const speakers = [
  {
    name: "Luis Cárdenas",
    bio: "Luis es egresado de la Escuela Libre de Derecho y es actualmente el Notario #270 de Sinaloa. Ha trabajado extensamente con la firma electrónica avanzada y es el actual director general de la empresa Weesign que se especializa en la firma de documentos con esta tecnología. Actualmente él utiliza la firma electrónica avanzada en su operación notarial.",
  },
  {
    name: "Jaime Calderón Mátar",
    bio: "Después de trabajar en desarrollo de software en Estados Unidos y Alemania, Jaime regresó a México para cofundar las aplicaciones NotaríaMásMás y Nuvigant. Ambos softwares que le ayudan a los abogados y fedatarios a controlar sus despachos de una manera muy amigable y gráfica. Estos softwares cuentan con la posibilidad de usar la firma electrónica avanzada.",
  },
];

export default function WebinarFirmaElectronicaPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="py-8 lg:py-0">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Firma Electrónica Avanzada: una firma más poderosa que la autógrafa
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Participa en este webinar en donde veremos algunos ejemplos prácticos sobre
              firmar documentos con la{" "}
              <strong className="text-slate-700">Firma Electrónica Avanzada</strong> y platicaremos con el Notario
              Luis Cárdenas sobre su experiencia usándola en su labor notarial.
            </p>
            <a
              href="mailto:contacto@nuvigant.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl text-white px-7 py-3.5 font-semibold shadow-lg hover:shadow-xl transition"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
            >
              Contáctanos <ArrowRight size={16} />
            </a>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 space-y-4">
            <p className="font-semibold text-lg text-slate-800">Regístrate al webinar llenando esta forma.</p>
            <div className="space-y-2 text-slate-500 text-sm">
              <p><strong className="text-slate-700">Fecha:</strong> Jueves 18 de Marzo</p>
              <p><strong className="text-slate-700">Hora:</strong> 11:00 A.M. (hora CdMx)</p>
              <p><strong className="text-slate-700">Dónde:</strong> Zoom (inscríbete para recibir la liga)</p>
              <p><strong className="text-slate-700">Duración:</strong> 45 min</p>
              <p><strong className="text-slate-700">Costo:</strong> Sin Costo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            El mundo legal está cambiando
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            La firma electrónica avanzada ofrece en México la posibilidad de firmar
            documentos con mayor validez legal que cualquier otro tipo de firma. Participa
            en nuestro webinar donde hablaremos sobre el tema.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Lo que veremos</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {agenda.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
                <h3 className="font-bold text-slate-800 text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="mailto:contacto@nuvigant.com"
              className="inline-flex items-center gap-2 rounded-xl text-white px-7 py-3.5 font-semibold shadow-lg hover:shadow-xl transition"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
            >
              Ponte en contacto
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Los expositores</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {speakers.map(({ name, bio }) => (
              <div key={name} className="flex flex-col gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}>
                  <Video size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Llena el formulario para inscribirte en el webinar
          </h2>
          <p className="text-slate-500 mb-6 italic">
            Firma Electrónica Avanzada: una Firma más Poderosa que la Autógrafa
          </p>
          <a
            href="mailto:contacto@nuvigant.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#056dfe] px-8 py-3.5 font-bold text-white shadow-lg hover:bg-[#0459d4] transition-colors"
          >
            Inscribirme
          </a>
        </div>
      </section>
    </div>
  );
}
