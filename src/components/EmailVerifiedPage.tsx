import { CheckCircle, MessageCircle } from "lucide-react";
import { WA_LINK } from "../constants";

export default function EmailVerifiedPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-white/90" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Tu correo fue verificado exitosamente
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Si ya te dieron de alta para colaborar con alguna empresa, da clic en{" "}
            <strong>Clientes → Ir a aplicación</strong> en la parte superior derecha, y luego inicia sesión.
          </p>
          <p className="mt-4 text-base text-white/80">
            Si aún no estás dado de alta en alguna empresa y no sabes qué hacer, escríbenos por WhatsApp.
          </p>
          <div className="mt-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#4161d4] shadow-lg transition hover:shadow-xl"
            >
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
