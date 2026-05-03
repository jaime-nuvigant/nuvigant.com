---
title: "CFDI 4.0 Para Notarios Públicos: 5 Cosas que Debes Saber"
date: "2021-12-07"
author:
  name: "Equipo Nuvigant"
  avatar: "https://ui-avatars.com/api/?name=Equipo+Nuvigant&background=056dfe&color=fff&size=128"
  bio: "Software administrativo en la nube con inteligencia artificial para fedatarios públicos."
  twitter: "https://twitter.com/nuvigant"
  linkedin: "https://linkedin.com/company/nuvigant"
tags: ["Fiscal", "Notarios", "Corredores Públicos"]
excerpt: "El CFDI 4.0 trae cambios importantes para notarios y corredores públicos. Te explicamos las 5 cosas más relevantes: gastos de terceros, complemento de pagos, cancelación y más."
coverImage: "/images/blog/cfdi-4-notarios-publicos.jpg"
published: true
category: "industry"
subcategory: "fedatarios"
---

Ya hasta se puede decir que extrañábamos que el SAT nos hiciera algún cambio en la jugada de facturación y la introducción del CFDI 4.0, aunque no más complicada que las anteriores actualizaciones, nos va a forzar a hacer algunos cambios en nuestra manera de facturar. Desde el nodo de gastos de terceros hasta los cambios al complemento de pagos, en este artículo les listamos 5 cosas que debes de saber sobre esta nueva versión si eres un notario público o corredor público.

<div class="video-container"><iframe src="https://www.youtube.com/embed/pYM072pSsx0" title="CFDI 4.0 Para Notarios Públicos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

### 1. Cuándo entró en vigor

El complemento entró en vigor el primero de enero del 2022. Al momento de escribir este artículo, el SAT ha permitido seguir facturando con la versión 3.3 hasta el 31 de abril del 2022. En mi opinión muy personal, esta fecha se puede extender, ya que han salido varias complicaciones al hacer estos CFDIs. El SAT liberó la ficha técnica en diciembre del 2021, puedes consultarlo dando [clic aquí](https://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm) (Anexo 20 del SAT: formato de factura electrónica y material técnico vigente).

### 2. Elemento vs Complemento de Gastos de Terceros

Antes se mencionó que la relación de gastos de terceros sería por medio de un complemento. Ahora el SAT ha definido que será por medio de un elemento, que deberá ir relacionado al concepto que se factura. Ej. se deberá de crear un concepto por cada impuesto (ISAI, Certificados, etc.) o gastos, agregando en cada uno de estos conceptos los datos del cliente por quien pagaste en el elemento "ACuentaTerceros".

Este será probablemente el cambio más grande que necesites implementar en tu facturación si eres notario público o corredor público. Será un cambio relativamente sencillo de implementar si cuentas con un sistema integral de notaría, como lo es [Nuvigant](https://nuvigant.com/fedatarios/sistema-notarias) ([clic para ver más](https://nuvigant.com/fedatarios/sistema-notarias)). De lo contrario, necesitarás volver a capturar el presupuesto en cada factura al igual que la información de a cuenta de quién pagaste cada concepto.

#### Un ejemplo práctico

Vas a pagar una traslación de dominio a municipio. Deberás generar un CFDI 4.0 donde, aparte de tus honorarios, añadas el concepto de traslación de dominio. Este concepto en el CFDI deberá incluir la información (como el RFC y nombre, régimen fiscal y domicilio) del contribuyente por el cual pagaste este impuesto. En verdad el único campo adicional que necesitarás capturar para todos tus clientes será su régimen fiscal. Algo que probablemente te estés preguntando:

#### ¿Qué pasa si el cliente requiere su factura, pero aún no terminas de realizar todos los pagos de impuestos?

Pues como sabemos, no siempre es posible presupuestar desde el principio exactamente lo que se va a pagar de impuestos. Entonces, a menos de que haya algún cambio al CFDI, lo más coherente sería hacer algo parecido a como en un inicio se hacía el complemento de notarios. Le haces al cliente su factura SIN datos de "ACuentaTerceros" y al finalizar el trámite le generas una factura con conceptos-impuestos-derechos que realmente se hayan ejercido/pagado en el cfdi 4.0.

### 3. Complemento de pagos V.2.0

El cambio más fuerte a este complemento será que ahora se tendrá que desglosar cómo se está expresando cada impuesto que se desprende del pago. Es decir, el monto pagado que se registre en el complemento de pago, tendrá que reflejar el IVA y retenciones generados por este pago. Esto no te afectará en tu operación, ya que es algo que los sistemas pueden hacer automáticamente. Sólo asegúrate en tus primeras facturas que se haga como debe de ser.

![CFDI-4.0-Para-Notarios-Públicos:-5-Cosas-que-Debes-Saber](/images/blog/cfdi-4-notarios-publicos-body.jpg)

### 4. Requisitos para cancelación de un CFDI 4.0

Ahora deberás indicar por qué estás cancelando tu CFDI y el SAT publicó un listado de opciones. Una de estas opciones es la de "Comprobante emitido con errores con relación". Si la seleccionas deberás incluir el folio del CFDI que sustituye al que estás cancelando.

### 5. Actualización automática de actividad económica del contribuyente en el CFDI 4.0

Digamos que facturas como persona física en tu notaría y un día decides vender tu vehículo. A partir del CFDI 4.0 el SAT automáticamente te asignará la actividad económica a tu RFC de alguien que vende vehículos. También deberás cumplir con las obligaciones que le correspondan a esta actividad. Esto sucederá siempre que realices una factura por algún servicio/producto que vendas que no sea de tu régimen fiscal.

Los contribuyentes que estén inconformes con dicha actualización, deberán llevar a cabo un procedimiento de aclaración.

De momento el SAT ha dicho que el procedimiento será determinado por reglas de carácter general. En otras palabras, todavía no está seguro cómo será esto. Entonces mantente en contacto con tu contador si decides realizar una operación que no sea la de tu negocio principal con un cfdi 4.0.

### 6. Otros cambios del CFDI 4.0 (uno extra porque más vale que sobre a que falte)

Un cambio que muy poca gente sabía del CFDI 3.3 es que [no era necesario capturar el domicilio del receptor del CFDI](https://contadormx.com/2017/06/07/se-elimina-domicilio-del-cfdi-3-3-del-emisor-receptor/). Ahora con la versión del cfdi 4.0, se volverá a hacer requisito capturar esta información. Entonces si seguiste capturando esta información en tus facturas, no tendrás que hacer cambios para cumplir con esto.

Otra cosa que no sabemos por qué el SAT haría, es que está empezando a validar que la razón social que escribas en tu CFDI coincida letra por letra, coma por coma y mayúscula por mayúscula con lo que el SAT tiene en su base de datos. Esto es decir que si facturas a Nuvigant, SA de CV fallará si el SAT lo tiene como NUVIGANT S.A. DE C.V. Esto aplica igual para el código postal.

Pues eso es hasta el momento, lo que afectará principalmente el cambio de esta versión a los notarios públicos y corredores públicos. Den gracias que no son transportistas, porque a ellos sí les fue muy mal con esta actualización.

Cabe mencionar que si no cuentas con un sistema integral de notaría o correduría, te llevará bastante trabajo. Vas a tener que estar capturando de nuevo el presupuesto con cada una de tus facturas.

Si utilizas [Nuvigant](https://nuvigant.com/fedatarios/sistema-notarias), nuestro sistema de notarías y corredurías, el cambio será bastante transparente. Para su uso, ya capturas toda la información que necesitas, y esta actualización no tendrá ningún costo para ti.

Nosotros nomás nos encargaremos de anexar esta información de manera sencilla al momento de hacer la factura y permitir hacer cambios en el momento en caso de ser necesario. En especial en nodo de gastos de terceros del cfdi 4.0.

### Para los clientes, amigos e interesados:

Ya nos encontramos trabajando para este cambio del CFDI 4.0 para nuestros clientes. Siéntete seguro/a que podrás empezar a facturar con esta versión cuando lo necesites. Si no trabajas con nuestra aplicación y te gustaría conocer más sobre ella, ponte en contacto con nosotros ya sea por el chat (abajo a la derecha), en [contacto@nuvigant.com](mailto:contacto@nuvigant.com), o llenando una solicitud para una demo ([clic aquí](https://nuvigant.com/schedule-demo)). Contamos con todas las herramientas tecnológicas que necesitas para administrar tu notaría en la nube.

Ya por último, queremos mencionar que nosotros no somos Contadores Públicos y mucho menos fiscalistas. Nosotros somos nerds de computadoras con más de 30 años de experiencia en software para notarías públicas y corredurías. Lo que está en este artículo es lo que nosotros hemos detectado hasta este momento en base al esquema técnico del CFDI y a los cursos sobre el tema a los que hemos asistido. De igual manera, te recomendamos que vayas de la mano con tu contador o contadora en la implementación de esta nueva versión del CFDI.
