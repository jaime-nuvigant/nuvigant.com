import ScheduleDemoForm from "@/components/ScheduleDemoForm";

const TITLE = "¿Quieres ver a Nuvigant en acción?";

const DESCRIPTION =
  "La mejor manera de hacer esto es a través de una demo. Nos conectaremos contigo, te mostraremos todo lo que necesitas ver de la aplicación y responderemos todas tus dudas.";

const headingClassName =
  "text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6";

export type ScheduleDemoHeroProps = {
  /** Use `h2` when the page already has a primary `h1` (e.g. contact). */
  titleAs?: "h1" | "h2";
};

export default function ScheduleDemoHero({ titleAs = "h1" }: ScheduleDemoHeroProps) {
  const TitleTag = titleAs;

  return (
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
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <TitleTag className={headingClassName}>{TITLE}</TitleTag>
            <p className="text-lg text-slate-500 leading-relaxed">{DESCRIPTION}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <ScheduleDemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
