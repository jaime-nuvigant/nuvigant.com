"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, MessageCircle, BookOpen } from "lucide-react";
import { WA_LINK } from "../constants";

export default function NotRegisteredPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("email") || params.get("e") || params.get("name");
    if (raw) {
      const value = decodeURIComponent(raw).trim().slice(0, 120);
      setEmail(value);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle size={64} className="text-white/90" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            {email
              ? `¡No encontramos el correo ${email} en nuestros registros!`
              : "¡No te encontramos en nuestros registros!"}
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Puede ser que el administrador de tu oficina aún no haya registrado tu correo, o que el correo
            con el que te dieron de alta no sea el mismo con el que creaste tu cuenta.
          </p>
          <p className="mt-3 text-base text-white/80">
            Verifica el correo letra por letra con el correo que el administrador del sistema registró.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://manual.nuvigant.com/docs/como-doy-de-alta-un-nuevo-usuario/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#4161d4] shadow-lg transition hover:shadow-xl"
            >
              <BookOpen size={18} />
              Tutorial para dar de alta usuarios
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/60 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={18} />
              Ponte en contacto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
