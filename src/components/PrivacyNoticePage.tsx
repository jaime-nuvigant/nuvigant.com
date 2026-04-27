import { EMAIL_CONTACT } from "@/constants";

export default function PrivacyNoticePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-20 text-center">
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
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Política de Privacidad
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Cuidamos mucho tu información. Aquí encuentras nuestro aviso de privacidad.
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 text-sm mb-8">
              <strong>Nuvigant, S. Mas Mas, Sociedad Civil</strong> — Última actualización: 9 de mayo de 2025
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              En cumplimiento con lo dispuesto por los artículos 8, 15, 16, 17 y demás relativos de la{" "}
              <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong> (en adelante, la{" "}
              <strong>"Ley"</strong>), y con la finalidad de garantizar el derecho a la privacidad y la protección de los
              datos personales, <strong>Nuvigant, S. Mas Mas, Sociedad Civil</strong> (en adelante, <strong>"la Empresa"</strong> o{" "}
              <strong>"Nuvigant"</strong>), hace de su conocimiento el presente{" "}
              <strong>Aviso de Privacidad</strong>.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Responsable del tratamiento de datos personales</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La Empresa, en su calidad de responsable, es quien recaba, resguarda y da tratamiento a los datos personales
              obtenidos de manera directa, indirecta o a través de medios electrónicos, garantizando su confidencialidad y
              su uso adecuado, conforme a los principios de licitud, consentimiento, información, calidad, finalidad,
              lealtad, proporcionalidad y responsabilidad previstos en la Ley.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Datos personales que se recaban</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Los datos personales que podrán ser recabados y sujetos a tratamiento incluyen, de manera enunciativa pero
              no limitativa, los siguientes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li><strong>Datos de identificación:</strong> nombre completo, empresa o notaría a la que pertenece, domicilio, teléfono fijo y/o móvil, dirección de correo electrónico.</li>
              <li><strong>Datos fiscales:</strong> Registro Federal de Contribuyentes (RFC).</li>
              <li><strong>Datos financieros y patrimoniales:</strong> número de cuenta bancaria, datos de tarjeta de crédito o débito (únicamente con fines de procesamiento de pagos).</li>
              <li><strong>Documentación oficial</strong> que acredite su identidad y capacidad legal.</li>
              <li><strong>Información técnica:</strong> dirección IP, ubicación geográfica, tipo y versión del navegador, sistema operativo, y características del dispositivo.</li>
              <li><strong>Datos de navegación:</strong> páginas consultadas, tiempo de visita, vínculos accedidos y estadísticas del uso de la plataforma.</li>
              <li><strong>Información proporcionada por el usuario</strong>, incluyendo bases de datos y documentos requeridos para la migración y uso efectivo del sistema.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Tratamiento de datos personales sensibles</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Derivado de la naturaleza de nuestros servicios, y en cumplimiento con la legislación aplicable, le informamos
              que en algunos casos podremos recabar y tratar <strong>datos personales sensibles</strong>, como lo son datos
              patrimoniales, financieros, de identificación jurídica, o cualquier otra información contenida en instrumentos
              notariales o documentos públicos o privados de carácter confidencial. Estos datos serán tratados con las más
              altas medidas de seguridad, confidencialidad y profesionalismo.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Finalidades del tratamiento</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Los datos personales que se recaban serán utilizados para las siguientes finalidades primarias:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Brindar soporte técnico y atención personalizada.</li>
              <li>Crear, administrar y dar mantenimiento a cuentas de usuario dentro del sistema.</li>
              <li>Gestionar el acceso a los servicios de la plataforma.</li>
              <li>Emitir comprobantes fiscales, estados de cuenta y recordatorios de pago.</li>
              <li>Procesar pagos electrónicos de manera segura.</li>
              <li>Atender requerimientos legales de autoridades competentes.</li>
              <li>Realizar análisis estadísticos para la mejora continua de la plataforma y sus funcionalidades.</li>
              <li>Garantizar la seguridad e integridad de la información almacenada en la plataforma.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              Asimismo, los datos podrán ser utilizados para <strong>fines secundarios</strong>, tales como el envío de
              comunicaciones comerciales, boletines informativos, invitaciones a eventos, y encuestas de satisfacción,
              siempre que exista el consentimiento expreso del titular.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Uso de herramientas de inteligencia artificial</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La Empresa le informa que algunos de los servicios ofrecidos pueden incorporar tecnologías basadas en{" "}
              <strong>inteligencia artificial (IA)</strong>. En dichos casos, parte de la información recabada podrá ser
              utilizada —de forma anonimizada y desasociada de la identidad del titular— para fines de entrenamiento,
              validación, mejora y perfeccionamiento de los modelos de IA. Si usted desea limitar el uso de su información
              para tales fines, podrá ejercer ese derecho mediante solicitud dirigida al correo:{" "}
              <a href={`mailto:${EMAIL_CONTACT}`} className="text-[#056dfe] hover:underline font-medium">{EMAIL_CONTACT}</a>
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Transferencia y almacenamiento de datos</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Sus datos personales podrán ser almacenados y tratados en servidores ubicados dentro o fuera del territorio
              nacional, en países que garanticen un nivel adecuado de protección conforme a la legislación mexicana.
              Estas transferencias se realizarán únicamente cuando sean necesarias para la adecuada prestación del
              servicio, y en todo momento bajo medidas contractuales, técnicas y administrativas que salvaguarden su integridad.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. Conservación de los datos</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Los datos personales serán conservados durante el tiempo que resulte necesario para cumplir con las
              finalidades señaladas en este Aviso de Privacidad, y posteriormente durante los plazos establecidos por las
              disposiciones fiscales, civiles, mercantiles o de cualquier otra naturaleza que resulten aplicables.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">8. Medidas de seguridad</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La Empresa ha implementado mecanismos de seguridad, tanto físicos como digitales, orientados a proteger
              los datos personales bajo su resguardo contra accesos no autorizados, alteraciones, pérdida, destrucción o
              uso indebido. Estas medidas incluyen cifrado de datos, controles de acceso, autenticación de usuarios,
              respaldos periódicos y auditorías de seguridad.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">9. Responsabilidad del usuario de la plataforma</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Las notarías, despachos o profesionales que hacen uso de la plataforma Nuvigant como usuarios del sistema,
              son responsables de obtener el consentimiento expreso de los titulares de los datos personales que carguen
              o gestionen dentro del sistema. La Empresa actúa únicamente como encargado del tratamiento, en términos de
              lo dispuesto por la Ley.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">10. Derechos ARCO y revocación del consentimiento</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Usted podrá ejercer en cualquier momento sus derechos de{" "}
              <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong>, así como revocar el consentimiento
              otorgado para el tratamiento de sus datos personales, mediante solicitud por escrito enviada al correo:{" "}
              <a href="mailto:privacidad@nuvigant.com" className="text-[#056dfe] hover:underline font-medium">privacidad@nuvigant.com</a>
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">11. Limitación del uso o divulgación de sus datos</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Si desea limitar el uso o divulgación de sus datos personales para fines no esenciales o publicitarios,
              puede hacerlo en cualquier momento mediante comunicación por escrito a:{" "}
              <a href={`mailto:${EMAIL_CONTACT}`} className="text-[#056dfe] hover:underline font-medium">{EMAIL_CONTACT}</a>
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">12. Cambios al aviso de privacidad</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              La Empresa se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al
              presente Aviso de Privacidad. Cualquier cambio será notificado a través de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Correo electrónico proporcionado por el titular.</li>
              <li>Publicación en nuestro sitio web: <a href="https://www.nuvigant.com" className="text-[#056dfe] hover:underline">www.nuvigant.com</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">13. Uso de cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              El sitio web de la Empresa utiliza <strong>cookies y tecnologías similares</strong> para mejorar la
              experiencia del usuario, analizar tendencias y administrar el sitio. Al continuar navegando, usted consiente
              el uso de estas tecnologías. Puede consultar nuestra Política de Cookies en el sitio web.
            </p>

            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-slate-700 text-sm leading-relaxed">
                Para cualquier duda relacionada con el presente Aviso de Privacidad o el tratamiento de sus datos,
                puede contactar a nuestro Responsable de Protección de Datos Personales en el correo:{" "}
                <a href="mailto:privacidad@nuvigant.com" className="text-[#056dfe] hover:underline font-semibold">
                  privacidad@nuvigant.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
