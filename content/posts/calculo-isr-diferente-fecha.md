---
title: "Cálculo ISR: Diferente Fecha"
date: "2022-08-29"
author:
  name: "Equipo Nuvigant"
  avatar: "https://ui-avatars.com/api/?name=Equipo+Nuvigant&background=056dfe&color=fff&size=128"
  bio: "Software administrativo en la nube con inteligencia artificial para fedatarios públicos."
  twitter: "https://twitter.com/nuvigant"
  linkedin: "https://linkedin.com/company/nuvigant"
tags: ["ISR", "Enajenación", "Terreno", "Construcción"]
excerpt: "El cálculo de ISR de diferente fecha ocurre cuando el terreno y la construcción fueron adquiridos en fechas distintas. Es uno de los más complejos; aquí te lo explicamos paso a paso."
coverImage: "/images/blog/calculo-isr-diferente-fecha.jpg"
published: true
category: "industry"
subcategory: "isr"
---

[A lo largo de esta guía de cálculo de ISR por enajenación de inmuebles](https://nuvigant.com/isr-enajenacion-inmuebles-manual) hemos visto diversas variaciones. Ahora hablaremos sobre una un poco más complicada: el **Cálculo de ISR: Diferente Fecha**. Este cálculo se denomina así porque la venta del terreno se hace en fecha distinta a la venta de la construcción. En estos casos los cálculos se hacen completamente por separado y al final se juntan para obtener la cantidad que cada enajenante debe pagar. Si no sabes cómo funciona el cálculo base, te recomendamos revisar primero los artículos de [solo terreno](https://nuvigant.com/blog/industry/isr/solo-terreno-calculo-isr-enajenacion-inmuebles) y [solo construcción](https://nuvigant.com/blog/industry/isr/solo-construccion-calculo-isr).

<div class="video-container"><iframe src="https://www.youtube.com/embed/y7Rv2QW4nM4" title="Cálculo ISR: Diferente Fecha" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## ¿Qué información se utiliza en el cálculo de diferente fecha?

Los datos deben estar separados por terreno y construcción:

**Precio de adquisición**
- Terreno: $10,000.00 MXN
- Construcción: $20,000.00 MXN

**Precio de enajenación**
- Terreno: $25,000.00 MXN
- Construcción: $45,000.00 MXN

Si únicamente tienes el precio total de la venta, es necesario separarlo. [Clic aquí para ver cómo hacerlo](https://nuvigant.com/blog/industry/isr/isr-enajenacion-separar-precio-de-venta-terreno-y-construccion).

**Fechas de adquisición** (separadas por ser diferente fecha)
- Terreno: 25/10/2010
- Construcción: 08/04/2016

**Fecha de enajenación**: 22/07/2022  
**Enajenantes**: 1 participante al 100%

## Cálculo del terreno

Primero hay que hacer los cálculos del terreno (puedes ver un ejemplo de solo terreno dando clic [aquí](https://nuvigant.com/blog/industry/isr/solo-terreno-calculo-isr-enajenacion-inmuebles)):

![Cálculo-ISR:-Diferente-Fecha](/images/blog/calculo-isr-diferente-fecha-body.jpg)

1. **Precio actualizado** — tomamos el INPC de ambas fechas (fuente: [Banco de México](https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadro&idCuadro=CP154&locale=es)):
   - Adquisición (25/10/2010): INPC 73.9689
   - Enajenación (22/07/2022): INPC 122.0440
   - Factor INPC: 122.0440 / 73.9689 = **1.6499** (verifica con [la calculadora del INEGI](https://www.inegi.org.mx/app/indicesdeprecios/calculadorainflacion.aspx))
   - Años transcurridos: 11 → factor en el anexo 9 de la miscelánea fiscal: **1.57**
   - Se toma el mayor (1.6499): $10,000.00 × 1.6499 = **$16,499.00 MXN**

2. **Ganancias del terreno**:
   - Utilidad Gravable: $25,000 – $16,499.00 = **$8,501.00 MXN**
   - Ganancia anual: $8,501 / 11 años = **$772.82 MXN**

## Cálculo de la construcción

Después se realizan los cálculos de la construcción (puedes ver un ejemplo de solo construcción dando clic [aquí](https://nuvigant.com/blog/industry/isr/solo-construccion-calculo-isr)):

1. **Depreciación**:
   - Años: 6 → porcentaje: 6 × 3% = 18%
   - Valor actual: 100% – 18% = 82%
   - Valor depreciado: $20,000 × 82% = **$16,400 MXN**

2. **Precio actualizado**:
   - Adquisición (08/04/2016): INPC 89.6253
   - Enajenación (22/07/2022): INPC 122.0440
   - Factor INPC: 1.3617
   - Años: 6 → factor miscelánea: 1.32 → se toma el mayor (1.3617)
   - Precio actualizado: $16,400 × 1.3617 = **$22,331.88 MXN**

3. **Ganancias de la construcción**:
   - Utilidad Gravable: $45,000 – $22,331.88 = **$22,668.12 MXN**
   - Ganancia anual: $22,668.12 / 6 años = **$3,778.02 MXN**

## Suma de resultados

Los valores del terreno y la construcción se suman antes de los cálculos finales:

- **Utilidad Gravable total**: $8,501.00 + $22,668.12 = **$31,169.12 MXN**
- **Ganancia anual total**: $772.82 + $3,778.02 = **$4,550.84 MXN**

## ISR a pagar

Consultamos la tabla de tarifas del ISR del [Diario Oficial de la Federación](https://dof.gob.mx/nota_detalle.php?codigo=5640505&fecha=12/01/2022#gsc.tab=0). Con $4,550.84 MXN de ganancia anual quedamos en el primer rango:

| Límite inferior | Límite Superior | Cuota Fija | % excedente |
| --- | --- | --- | --- |
| $0.01 | $7,735.00 | $0.00 | 1.92% |

- $4,550.84 – $0.01 = $4,550.83 MXN
- $4,550.83 × 1.92% = $87.38 MXN
- Factor: $87.38 / $4,550.83 = 0.0192
- ISR Terreno: $772.82 × 11 × 0.0192 = **$163.22 MXN**
- ISR Construcción: $3,778.02 × 6 × 0.0192 = **$435.23 MXN**
- **ISR Total: $163.22 + $435.23 = $598.45 MXN**

Te invitamos a intentar realizar este cálculo en nuestra [herramienta gratuita de cálculo de ISR](https://isr.nuvigant.com/calculo-isr).
