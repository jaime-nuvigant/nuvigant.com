import { ArrowRight, Bell, PlayCircle, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #2ea4f2 0%, #51d2e9 70%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
          Plataforma notarial impulsada por IA
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
          La gestión {" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)",
            }}
          >
            inteligente
          </span>{" "}
          para tu notaría
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Automatiza tus procesos notariales, prevén el lavado de dinero,
          controla facturación y potencia tu despacho con inteligencia
          artificial — todo en una sola plataforma.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            style={{
              background:
                "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)",
            }}
          >
            Comenzar gratis
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-slate-700 font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            <PlayCircle size={18} className="text-[#2ea4f2]" />
            Ver cómo funciona
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-slate-400">
          Más de{" "}
          <span className="font-semibold text-slate-600">200 notarías</span> ya
          usan Nuvigant para administrase
        </p>

        {/* Hero visual mockup */}
        <div className="mt-16 max-w-5xl mx-auto relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-white z-10 pointer-events-none" />
          <div
            className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)",
            }}
          >
            {/* Mock browser bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-white/80 border-b border-slate-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 ml-4 bg-slate-100 rounded-md h-5 max-w-xs text-xs text-slate-400 flex items-center px-3">
                app.nuvigant.com
              </div>
              {/* Notification bell */}
              <div className="relative ml-auto">
                <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-500">
                  <Bell size={15} />
                </button>
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center leading-none">
                  3
                </span>
              </div>
            </div>

            {/* Mock dashboard — person profile */}
            <div className="p-5 space-y-4">
              {/* Person header */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
                >
                  RC
                </div>
                <div className="text-left min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">
                    Aureliano Buendía Iguarán
                  </p>
                  <p className="text-xs text-slate-400 truncate">
                    BUIA24392UF3 
                  </p>
                </div>
                <span className="ml-auto shrink-0 inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Activo
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: "Total Acumulado",
                    value: "$4,820,500",
                    sub: "+12% este mes",
                    color: "#056dfe",
                    bg: "#eff6ff",
                  },
                  {
                    label: "Operaciones en la Notaría",
                    value: "4",
                    sub: "Escrituras activas",
                    color: "#2ea4f2",
                    bg: "#f0f9ff",
                  },
                  {
                    label: "Total Facturado",
                    value: "$847,200",
                    sub: "Facturas emitidas",
                    color: "#51d2e9",
                    bg: "#ecfeff",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-3.5 shadow-sm border border-slate-100 text-left"
                    style={{ background: stat.bg }}
                  >
                    <div
                      className="text-lg font-bold mb-0.5 tabular-nums"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-600 leading-tight mb-1">
                      {stat.label}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                      <TrendingUp size={10} style={{ color: stat.color }} />
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Operaciones table */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-700">
                    Operaciones en las que participa
                  </span>
                  <span className="text-[10px] text-[#2ea4f2] font-medium cursor-pointer">
                    Ver todas →
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50">
                        {[
                          "Escritura No.",
                          "Total Presupuestado",
                          "Saldo",
                          "Tipo Operación",
                          "Disponible Gastos",
                          "Impuestos x Pagar",
                        ].map((h) => (
                          <th
                            key={h}
                            className="px-3 py-2 text-[9px] font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          num: "42,318",
                          presupuesto: "$1,250,000",
                          saldo: "$980,400",
                          tipo: "Compraventa",
                          disponible: "$45,200",
                          impuestos: "$62,500",
                          tipoColor: "#056dfe",
                          tipoBg: "#eff6ff",
                        },
                        {
                          num: "42,319",
                          presupuesto: "$320,000",
                          saldo: "$310,000",
                          tipo: "Constitución Sociedad",
                          disponible: "$12,800",
                          impuestos: "$16,000",
                          tipoColor: "#7c3aed",
                          tipoBg: "#f5f3ff",
                        },
                        {
                          num: "42,320",
                          presupuesto: "$85,000",
                          saldo: "$85,000",
                          tipo: "Poder Notarial",
                          disponible: "$4,100",
                          impuestos: "$4,250",
                          tipoColor: "#0891b2",
                          tipoBg: "#ecfeff",
                        },
                        {
                          num: "42,321",
                          presupuesto: "$2,100,000",
                          saldo: "$1,540,000",
                          tipo: "Compraventa",
                          disponible: "$88,000",
                          impuestos: "$105,000",
                          tipoColor: "#056dfe",
                          tipoBg: "#eff6ff",
                        },
                      ].map((row, i) => (
                        <tr
                          key={row.num}
                          className={
                            i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                          }
                        >
                          <td className="px-3 py-2 text-[10px] font-semibold text-slate-700 whitespace-nowrap">
                            #{row.num}
                          </td>
                          <td className="px-3 py-2 text-[10px] text-slate-600 tabular-nums whitespace-nowrap">
                            {row.presupuesto}
                          </td>
                          <td className="px-3 py-2 text-[10px] text-slate-600 tabular-nums whitespace-nowrap">
                            {row.saldo}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            <span
                              className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                color: row.tipoColor,
                                background: row.tipoBg,
                              }}
                            >
                              {row.tipo}
                            </span>
                          </td>
                          <td className="px-3 py-2 text-[10px] text-emerald-600 font-medium tabular-nums whitespace-nowrap">
                            {row.disponible}
                          </td>
                          <td className="px-3 py-2 text-[10px] text-red-500 font-medium tabular-nums whitespace-nowrap">
                            {row.impuestos}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
