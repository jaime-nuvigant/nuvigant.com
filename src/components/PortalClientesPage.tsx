import { FileText, FileSpreadsheet, FolderKanban, IdCard, ShieldCheck } from "lucide-react";

const tiles = [
  {
    title: "Expedientes",
    description: "Centraliza documentos, hitos y seguimiento por trámite en un solo lugar.",
    icon: FolderKanban,
  },
  {
    title: "Facturas",
    description: "Consulta y comparte comprobantes emitidos con mayor orden y trazabilidad.",
    icon: FileText,
  },
  {
    title: "Plantillas",
    description: "Estandariza formatos para reducir tiempos de captura y revisión.",
    icon: FileSpreadsheet,
  },
  {
    title: "Datos generales",
    description: "Mantén información base de clientes actualizada para todo el equipo.",
    icon: IdCard,
  },
  {
    title: "Beneficiario controlador",
    description: "Documenta y consulta información clave de cumplimiento de forma accesible.",
    icon: ShieldCheck,
  },
];

export default function PortalClientesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-16 lg:pt-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Portal de clientes</h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Un espacio para dar visibilidad al avance de trámites y facilitar el intercambio de información con
            clientes de manera segura y ordenada.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <article key={tile.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon size={24} className="text-[#056dfe]" />
                  <h2 className="mt-4 text-xl font-bold text-slate-900">{tile.title}</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">{tile.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
