---
title: "Deducibles en el Cálculo de ISR por venta de inmuebles"
date: "2022-09-02"
author:
  name: "Equipo Nuvigant"
  avatar: "https://ui-avatars.com/api/?name=Equipo+Nuvigant&background=056dfe&color=fff&size=128"
  bio: "Software administrativo en la nube con inteligencia artificial para fedatarios públicos."
  twitter: "https://twitter.com/nuvigant"
  linkedin: "https://linkedin.com/company/nuvigant"
tags: ["ISR", "Deducibles", "Deducciones", "Enajenación", "Venta de Inmuebles"]
excerpt: "Las deducciones en el cálculo de ISR por venta de inmuebles pueden reducir significativamente el impuesto a pagar. Aprende qué factores tomar en cuenta y cómo calcularlas."
coverImage: "/images/blog/deducibles-calculo-isr-por-venta-de-inmuebles.jpg"
published: true
category: "industry"
subcategory: "isr"
---

A lo largo de los artículos anteriores hemos visto cómo realizar el cálculo de ISR por enajenación de inmuebles en las diferentes variaciones: cuando se vende [solo terreno](https://nuvigant.com/blog/industry/isr/solo-terreno-calculo-isr-enajenacion-inmuebles), [solo construcción](https://nuvigant.com/blog/industry/isr/solo-construccion-calculo-isr) y la combinación de ellos con [ochenta veinte misma fecha](https://nuvigant.com/blog/industry/isr/ochenta-veinte-misma-fecha-calculo-de-isr) o [diferente fecha](https://nuvigant.com/blog/industry/isr/calculo-isr-diferente-fecha). En este artículo veremos que dentro de cualquiera de ellos se pueden agregar deducibles o deducciones, que indican que aparte del costo del inmueble se realizó alguna mejora o inversión, y por ello se toma en cuenta al momento de hacer el cálculo del ISR.

<div class="video-container"><iframe src="https://www.youtube.com/embed/jmtuJf7TTDk" title="Deducibles en el Cálculo de ISR por venta de inmuebles" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


## Factores a considerar en las deducciones

Al agregar deducciones en el cálculo de ISR, existen diferentes factores que determinarán cómo se calcula el total de deducibles:

1. Fecha en que se realizó
2. Monto
3. ¿Es de terreno o construcción?
4. ¿Es depreciable o no?

Los dos últimos factores van relacionados: generalmente los deducibles de terreno son no depreciables, mientras que las deducciones de construcción sí lo son. Cuando el inmueble es terreno se permite escoger si la deducción es depreciable o no; cuando es construcción, la deducción automáticamente es depreciable.

Para los ejemplos siguientes usaremos estos valores:

- **Fecha de enajenación**: 01/09/2022
- **Fecha de deducción**: 10/02/2016
- **Monto de deducción**: $10,000

![Deducibles-en-el-Cálculo-de-ISR-por-venta-de-inmuebles](/images/blog/deducibles-calculo-isr-por-venta-de-inmuebles-body.jpg)

## Deducción no depreciable

Para obtener el total de deducciones hay que tomar en cuenta cómo afecta la inflación al precio. Se consultan los valores directamente de la página del [Banco de México](https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadro&idCuadro=CP154&locale=es).

- Fecha de deducción (10/02/2016): INPC 89.7778
- Fecha de enajenación (01/09/2022): INPC 122.9480
- INPC enajenación / INPC deducción: 122.9480 / 89.7778 = **1.3695** (puedes verificar con [la calculadora del INEGI](https://www.inegi.org.mx/app/indicesdeprecios/calculadorainflacion.aspx))

Después se toma el ajuste de inflación: las fechas tienen una diferencia de **6 años**. Se busca ese factor en el anexo 9 de la miscelánea fiscal: **1.32**.

Se comparan ambos (1.3695 vs 1.32) y se toma el mayor. Total de Deducciones por Gastos: **$10,000.00 × 1.3695 = $13,695.00 MXN**

## Deducción depreciable

Cuando las deducciones son depreciables se realizan los mismos cálculos anteriores, salvo que primero hay que calcular la depreciación.

1. Diferencia de años entre las fechas: 6 años
2. Porcentaje de depreciación: 6 × 3% = **18%**
3. Valor actual del inmueble: 100% – 18% = **82%**
4. Valor depreciado: $10,000 × 82% = **$8,200.00 MXN**

Ya con el valor depreciado, se realizan los mismos cálculos que en el proceso anterior:

- INPC: 1.3695
- Ajuste inflación: 1.32
- Total de Deducciones por Gastos: **$8,200 × 1.3695 = $11,229.90 MXN**

## Suma al precio actualizado

Una vez obtenido el Total de Deducciones por Gastos, se suma al precio actualizado correspondiente (terreno o construcción) para obtener el Total de Deducciones Actualizadas, que se usará para calcular la utilidad gravable final.

Te invitamos a conocer y utilizar nuestra [herramienta gratuita de cálculo de ISR](https://isr.nuvigant.com/calculo-isr) por enajenación de bienes inmuebles. No tiene ningún costo, siempre se mantiene actualizada con los índices de [BANXICO](https://www.banxico.org.mx/) y genera un PDF que explica paso a paso cómo se realizó el cálculo.
