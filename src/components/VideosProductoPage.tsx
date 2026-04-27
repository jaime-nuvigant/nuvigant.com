const videos = [
  {
    id: "pEIn8zervgU",
    title: "Presupuestos",
    description:
      "Con los presupuestos puedes tener un mejor control sobre los montos de cada operación y además saber cuánto es de honorarios o de gastos.",
  },
  {
    id: "n3Xq5tzIbTY",
    title: "Configuración de Conceptos Presupuestos",
    description:
      "Con la configuración de los conceptos presupuestos puedes personalizar totalmente los conceptos que necesitas y su forma de calcularse.",
  },
  {
    id: "YcIrmEI2k0Y",
    title: "Control de Ingresos",
    description:
      "Este control te permite observar mejor tus ingresos, los cuales te permiten estar al tanto del saldo de los clientes en las operaciones.",
  },
  {
    id: "rqi7JiEYcos",
    title: "Control de Egresos",
    description:
      "Cuando manejamos los egresos podemos acceder al control de los gastos a terceros, si ya realizaron o si hubo necesidad de financiarlos.",
  },
  {
    id: "YV5F0PIsdXg",
    title: "Facturación",
    description:
      "Realizar facturas es algo que generalmente todas las empresas manejan; aquí te mostramos las ventajas de realizarlas en nuestra plataforma.",
  },
  {
    id: "HRR66mUqDkI",
    title: "Complemento de Notario",
    description:
      "Descubre las ventajas de realizar facturas con complemento de notario dentro de nuestra plataforma.",
  },
  {
    id: "mx9Kx702FoU",
    title: "Seguimiento",
    description:
      "Tener definido el seguimiento en cada proyecto es muy útil para el control de los tiempos del proceso y la entrega de estos.",
  },
  {
    id: "JF6rrRPz5ek",
    title: "Documentos Automatizados",
    description:
      "Esta función sirve para poder vaciar la información a nuestros formatos de escrituras de una manera más fácil y práctica.",
  },
];

export default function VideosProductoPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Descubre más acerca de nuestra plataforma
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
            Aquí puedes ver de una manera general los distintos módulos con los que cuenta la
            aplicación y cómo los puedes utilizar en tu empresa.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {videos.map((video) => (
              <div key={video.id} className="flex flex-col gap-4">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{video.title}</h2>
                  <p className="mt-2 text-slate-600 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
