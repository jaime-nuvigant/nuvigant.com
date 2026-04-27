import { MessageCircle, Mail } from "lucide-react";
import { WA_LINK, EMAIL_CONTACT } from "../constants";

export default function FormPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            ¿En qué te podemos ayudar?
          </h1>
          <p className="mt-5 text-lg text-white/90">
            Contáctanos directamente y con gusto te atendemos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#4161d4] shadow-lg transition hover:shadow-xl"
            >
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/60 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail size={18} />
              {EMAIL_CONTACT}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
