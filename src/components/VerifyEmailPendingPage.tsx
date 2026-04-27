import { Mail } from "lucide-react";

export default function VerifyEmailPendingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Mail size={64} className="text-white/90" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            ¡Te enviamos un correo!
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Te hemos enviado un correo a la cuenta que usaste para crear tu usuario.
            Por favor revisa tu bandeja de entrada y da clic en el enlace para verificar
            tu dirección de correo electrónico.
          </p>
          <p className="mt-4 text-base text-white/80">
            Si no encuentras el correo, revisa tu carpeta de spam o correo no deseado.
          </p>
        </div>
      </section>
    </div>
  );
}
