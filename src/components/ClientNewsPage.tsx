import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    href: "/client-news/cambio-notaria-nuvigant",
    title: "Cambio de Notaría++ a Nuvigant",
    date: "Diciembre 2020",
    desc: "Estamos listos para presentarles la nueva y mejorada versión del sistema Notaría++ que ahora será conocida como Nuvigant. Conoce los beneficios, las nuevas funciones y cómo empezar a usar la nueva versión.",
  },
];

export default function ClientNewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Newspaper size={48} className="text-white/80" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Noticias para Clientes
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Actualizaciones importantes sobre la plataforma, cambios y mejoras que
            debes conocer.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col gap-3 rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#056dfe]/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#056dfe] uppercase tracking-wider">
                    {article.date}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-slate-300 group-hover:text-[#056dfe] transition-colors"
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">{article.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{article.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
