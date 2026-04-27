import { EMAIL_CONTACT } from "@/constants";

export default function TermsConditionsPage() {
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
            Términos y Condiciones
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Aquí encuentras los términos y condiciones generales de nuestra plataforma. Si tu empresa lo necesita, podemos
            platicar para generar un SLA (Service Level Agreement) personalizado.
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 text-sm mb-8">
              <strong>Última actualización:</strong> 06/10/2020
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              La siguiente "Licencia de uso de Software" rige el uso del Software y los servicios proporcionados por la
              sociedad S Mas Mas, S.C. (y sus subsidiarias), titular de la marca Nuvigant ("En adelante Nuvigant"), los
              cuales se conceden bajo licencia, no se venden.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Definiciones</h2>
            <p className="text-slate-600 leading-relaxed mb-2">Los siguientes términos tendrán siempre el significado que se define a continuación:</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li><strong>Suscriptor:</strong> Persona física o moral que paga por el servicio.</li>
              <li><strong>Suscripción:</strong> El derecho de uso del servicio contratado a Nuvigant, mediante la cual los usuarios autorizados tendrán acceso.</li>
              <li><strong>Usuario autorizado:</strong> Toda persona física que utiliza el servicio.</li>
              <li><strong>Servicio:</strong> Consiste en acceder a nuestro sitio web mediante varios tipos de suscripciones, funciones así como los módulos a elección que están a disposición del suscriptor para utilizar nuestro Software, que le permitirá gestionar y administrar datos para su negocio, este servicio incluye actualizaciones constantes y nuevas funciones que se irán desarrollando.</li>
              <li><strong>Administrador:</strong> El suscriptor persona física y/o uno o varios usuarios designados por el suscriptor que cuentan con las autorizaciones y permisos correspondientes para acceder a todas las funcionalidades del servicio contratado.</li>
              <li><strong>Información confidencial:</strong> Cualquier tipo de información para mantener una ventaja competitiva o económica frente a terceros y respecto de la cual ha preservado su confidencialidad y el acceso restringido a la misma.</li>
              <li><strong>Contenido:</strong> Toda información que un suscriptor, administrador o usuario autorizado ingresa y/o sube en el sistema para uso del servicio.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Condiciones generales</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Este es un acuerdo legal entre usted y Nuvigant e incorpora la <a href="/privacy-notice/" className="text-[#056dfe] hover:underline">política de privacidad</a>. Al registrarse como suscriptor o usuario autorizado del servicio acepta estar sujeto a los términos de este contrato.</li>
              <li>Los términos de este contrato regirán cualquier actualización del software proporcionada por Nuvigant que sustituya y/o complemente el Software original.</li>
              <li>Esta licencia no le permite otorgar licencias ni distribuir el Software.</li>
              <li>Tampoco podrá integrar ni utilizar el servicio contratado con cualquier programa de software de conexión "plug-in".</li>
              <li>El suscriptor reconoce y acepta que Nuvigant puede utilizar o integrar proveedores externos y/o socios de almacenamiento y tecnología relacionados necesarios para ejecutar el servicio.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Licencia limitada y uso del servicio</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Al suscriptor se le otorga una licencia no exclusiva, intransferible, limitada para acceder y utilizar el servicio en el periodo de tiempo conforme a la suscripción contratada, pudiéndose renovar de manera automática.</li>
              <li>Los usuarios autorizados acuerdan no reproducir, duplicar, copiar, arrendar, vender, revender y/o explotar el acceso o uso del servicio o cualquier elemento de diseño visual sin el permiso expreso y por escrito de Nuvigant.</li>
              <li>Los usuarios autorizados acuerdan no modificar, aplicar ingeniería inversa, descompilar, adaptar o alterar de cualquier otro modo el servicio.</li>
              <li>Los usuarios autorizados aceptan que no utilizarán el servicio de ninguna manera que pueda infringir los derechos de autor o los derechos de propiedad intelectual o de cualquier manera que sea ilegal, ofensiva, amenazante, calumniosa, difamatoria, pornográfica, obscena o en violación de los términos de este contrato.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Acceso al servicio</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Solo pueden acceder y utilizar el servicio los usuarios autorizados, los cuales deberán proporcionar su nombre completo, una dirección de correo electrónico válida y cualquier otra información que el servicio solicite.</li>
              <li>A cada usuario autorizado se le proporcionará un identificador único para acceder y utilizar el servicio. El nombre de usuario solo será utilizado por el usuario autorizado a quien se le asigna, y no podrá ser compartido ni utilizado por ninguna otra persona.</li>
              <li>El usuario autorizado es completamente responsable de mantener la confidencialidad de su contraseña y cuenta.</li>
              <li>Está estrictamente prohibido todo acceso y uso del servicio a través de medios mecánicos, programáticos, robóticos, con secuencias de comandos o cualquier otro medio automatizado.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Módulos y funciones adicionales</h2>
            <p className="text-slate-600 leading-relaxed mb-4">El servicio prestado por Nuvigant se conforma de varios módulos:</p>
            <ul className="space-y-3 text-slate-600 mb-6">
              <li><strong>Módulo de facturación (CFDI):</strong> Nuvigant facilita el timbrado y generación de facturación electrónica mediante una alianza estratégica con la sociedad Novatech Digital S.A. de C.V. El suscriptor al utilizar este módulo quedará sujeto a los términos y condiciones del proveedor del servicio.</li>
              <li><strong>Módulo de servicios de certificación de firma electrónica avanzada:</strong> Nuvigant facilita firmar documentos mediante firma electrónica avanzada gracias a una alianza estratégica con MIFIEL (SERVICIOS DE CRIPTOCARTERAS DIGITALES COINMX S. DE R.L. DE C.V.). El suscriptor al utilizar estos servicios quedará sujeto a los términos y condiciones del proveedor del servicio.</li>
              <li><strong>Módulo de Prevención de Lavado de Dinero:</strong> Nuvigant realiza una búsqueda en diferentes listados negros como parte de servicio para prevención de lavado de dinero, incluyendo el Departamento del Tesoro de Estados Unidos (OFAC).</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Seguridad y acceso</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Nuvigant es responsable de proporcionar un método seguro de autenticación y acceder a su servicio, proporcionando mecanismos que:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Permitan la gestión de contraseñas de usuarios.</li>
              <li>Transmitan contraseñas en un formato seguro.</li>
              <li>Protejan las contraseñas ingresadas. Nuvigant NO tiene acceso a estas contraseñas.</li>
              <li>Cumplan con los estándares de la industria para la seguridad de la información.</li>
              <li>Verifiquen que sus proveedores externos mantengan los estándares de la industria para la seguridad y privacidad.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. Mantenimiento y mejoras a la plataforma</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Nuvigant se reserva el derecho de modificar o descontinuar, temporal o permanentemente, cualquier característica asociada con el servicio.</li>
              <li>Nuvigant proporcionará con anticipación un aviso o notificación respecto de cualquier situación que materialmente reduzca la funcionalidad del servicio.</li>
              <li>Nuvigant se esforzará por limitar las suspensiones operativas planificadas para minimizar la interrupción del servicio.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">8. Soporte técnico y capacitaciones</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Nuvigant ofrece soporte técnico y la capacitación disponible para los usuarios autorizados con suscripciones activas mediante chat, centro de ayuda, teléfono, correo electrónico o ticket de soporte electrónico.</li>
              <li>El horario de atención a clientes es de lunes a viernes de 9:30 a.m. a 7:00 p.m. (UTC-5).</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">9. Respaldo y almacenamiento de información</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Al utilizar el servicio de Nuvigant su contenido se almacena de forma segura y encriptada. La información es respaldada cada segundo, semana y mes.</li>
              <li>Los respaldos de cada segundo son guardados durante una semana. Los respaldos semanales durante tres meses y los respaldos mensuales durante tres años.</li>
              <li>Nuvigant almacena todo el contenido mediante la suscripción a un servicio de almacenamiento con Microsoft Azure.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">10. Propiedad Intelectual</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              El suscriptor reconoce y acepta que la titularidad y derechos de autor con respecto al sitio web, el servicio
              y el Software son propiedad de Nuvigant. El Software se encuentra protegido por leyes sobre derechos de autor
              y por disposiciones de tratados internacionales. Serán propiedad del suscriptor, cualquier contenido cargado
              o publicado en el servicio.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">11. Pagos, reembolsos y cambios de suscripción</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>Los suscriptores podrán pagar vía transferencia bancaria o tarjeta de crédito o débito. Todas las tarifas son susceptibles de cambio sin previo aviso y serán más el IVA.</li>
              <li>A los suscriptores mensuales se les cobrará por adelantado cada 30 días. A los suscriptores anuales se les cobrará anualmente en la fecha de aniversario.</li>
              <li>Todos los cargos son finales y no reembolsables, incluidos los pagos realizados por los suscriptores anuales, las tarifas de instalación, migración de datos, capacitaciones y otros cargos por servicios profesionales.</li>
              <li>No hay cargos por cancelar una suscripción de manera anticipada.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">12. Cancelación y rescisión</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>El suscriptor y los administradores son los únicos responsables de cancelar las suscripciones contactando a Nuvigant.</li>
              <li>Al cancelar o finalizar una suscripción, el contenido se pone a disposición del administrador. Luego de un período de 15 días, todo el contenido asociado se eliminará irrevocablemente del servicio.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">13. Limitación de responsabilidad</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nuvigant no será responsable de ningún daño especial, indirecto, incidental o consecuente de ningún tipo
              relacionado con este contrato. La responsabilidad máxima de Nuvigant se limitará a la cantidad total que el
              suscriptor ha pagado por el servicio.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">14. Jurisdicción y competencia</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Para la interpretación, cumplimiento y ejecución del presente contrato, serán aplicables las leyes vigentes y
              relacionadas de los Estados Unidos Mexicanos y competentes los tribunales del Estado de Chihuahua, salvo que
              por ministerio de ley pudiese corresponder un fuero distinto.
            </p>

            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-slate-700 text-sm leading-relaxed">
                Para cualquier duda relacionada con estos Términos y Condiciones, puede contactarnos en:{" "}
                <a href={`mailto:${EMAIL_CONTACT}`} className="text-[#056dfe] hover:underline font-semibold">
                  {EMAIL_CONTACT}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
