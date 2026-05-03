import { ExternalLink, ArrowRight } from "lucide-react";

export default function NotariamasmasNuvigantPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Favor de leer esto para entrar al sistema Notaría++
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Estamos pasando por un cambio de imagen. Por favor lee las siguientes
            opciones y selecciona la que sea para ti.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-12 grid sm:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-8 flex flex-col gap-6">
            <p className="text-white text-lg leading-relaxed">
              Si has estado trabajando con la aplicación y quieres entrar al sistema
              da clic en este botón.
            </p>
            <a
              href="https://app.nuvigant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7cda24] px-6 py-3.5 font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={16} />
              Ir a Aplicación Notaría++
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 flex flex-col gap-6">
            <p className="text-white text-lg leading-relaxed">
              Lee un poco más sobre este cambio de imagen.
            </p>
            <a
              href="/client-news/cambio-notaria-nuvigant"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e09900] px-6 py-3.5 font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
            >
              <ArrowRight size={16} />
              Leer sobre el cambio de imagen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
