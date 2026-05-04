---
title: "Solo Terreno: Cálculo de ISR Enajenación de Inmuebles"
date: "2022-07-27"
author:
  name: "Equipo Nuvigant"
  avatar: "https://ui-avatars.com/api/?name=Equipo+Nuvigant&background=056dfe&color=fff&size=128"
  bio: "Software administrativo en la nube con inteligencia artificial para fedatarios públicos."
  twitter: "https://twitter.com/nuvigant"
  linkedin: "https://linkedin.com/company/nuvigant"
tags: ["ISR", "Enajenación", "Terreno", "Venta de Inmuebles", "Fiscal", "Cálculo ISR"]
excerpt: "Aprende a calcular el ISR cuando se vende solo terreno: desde la actualización del precio hasta el impuesto final, con un ejemplo paso a paso."
coverImage: "/images/blog/solo-terreno-calculo-isr-enajenacion-inmuebles.jpg"
published: true
category: "industry"
subcategory: "isr"
---

En los dos artículos anteriores vimos [cómo transformar una suma de dinero de una fecha a otra para tomar en cuenta la inflación](/blog/industry/isr/inflacion-isr-por-enajenacion-de-inmuebles) y [también cómo depreciar un inmueble con los años transcurridos](/blog/industry/isr/isr-enajenacion-inmuebles-depreciacion-de-un-inmueble). En este artículo vamos a realizar el primer cálculo completo para cuando se está vendiendo solo terreno. Haremos este cálculo primero ya que es el más sencillo y es conocido, sencillamente, como Cálculo de ISR: Solo Terreno.

<div class="video-container"><iframe src="https://www.youtube.com/embed/WnWGorEly_c" title="Solo Terreno: Cálculo de ISR Enajenación de Inmuebles" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## ¿Qué información necesitamos?

Para cálculo de ISR solo terreno se necesitan los siguientes valores (debajo de ellos encontrarás el valor que usaremos para este ejemplo):

- **Precio de adquisición**: $10,000.00 MXN
- **Precio de enajenación**: $20,000.00 MXN
- **Fecha de adquisición**: 03/08/2012
- **Fecha de enajenación**: 22/05/2022
- **Cantidad de enajenantes y su porcentaje de participación**: Enajenante que participa al 100% (este porcentaje sólo puede cambiar cuando hay más de 1 enajenante, pero veremos este caso más adelante)

## Paso 1: Ajuste del precio del terreno

Primero que nada, para hacer el cálculo solo terreno, va a ser necesario hacer el ajuste del precio del terreno. Esto ya lo hicimos en [este artículo (clic para ir a ver)](/blog/industry/isr/inflacion-isr-por-enajenacion-de-inmuebles) y vimos que el valor que quedó fue:

- **$15,275.00 MXN**

## Paso 2: Calcular la ganancia

El siguiente paso sería calcular la ganancia. Este paso es muy sencillo ya cuando tenemos todos los valores de la transacción actualizados. Lo único que se tiene que hacer es restarle al precio de venta todas las deducciones actualizadas.

- $20,000.00 – $15,275.00 = **$4,725.00**

Esto quiere decir que de esta operación se obtuvo una ganancia de $4,725.00. Este es un valor muy importante porque es en verdad cuánto dinero ingresó el enajenante y es el dinero al que se le aplicará el impuesto. Con esto en mente, podemos seguir con el cálculo de ISR solo terreno.

![Solo-Terreno:-Cálculo-de-ISR-Enajenación-de-Inmuebles](/images/blog/solo-terreno-calculo-isr-enajenacion-inmuebles-body.jpg)

## Paso 3: Calcular la utilidad anual

Ahora lo que seguiría sería calcular la utilidad anual obtenida por el enajenante. Esto es bastante sencillo también y se hace de la siguiente manera:

- Cantidad de años completos transcurridos: **9**
- Dividir ganancia entre años = $4,725.00 / 9 = **$525.00**

## Paso 4: Calcular el ISR con la tabla de tarifas

Una vez obtenida la ganancia anual del enajenante podemos finalmente calcular el ISR: Solo Terreno que deberá pagar el mismo. Para esto necesitaremos consultar la tabla de tarifas del ISR. Esta tabla la puedes encontrar en nuestra página dando clic aquí o la puedes encontrar la de este año (2022) en la página oficial del Diario Oficial de la Federación dando [clic aquí](https://dof.gob.mx/nota_detalle.php?codigo=5640505&fecha=12/01/2022#gsc.tab=0).

Como vemos que la ganancia anual es de $525.00, esta cae en el primer escalón de la tabla:

| Límite inferior | Límite Superior | Cuota Fija | % excedente |
| --- | --- | --- | --- |
| $0.01 | $7,735.00 | $0.00 | 1.92% |

- Multiplicar por el porcentaje excedente: $524.99 × 0.0192 = **$10.08**
- Con esto ya obtuvimos el impuesto que se debe de pagar por cada año.

## Paso 5: Impuesto total

Ahora para encontrar el impuesto que se debe de pagar en total vamos a necesitar multiplicar el impuesto a pagar anual por la cantidad de años (9):

- $10.08 × 9 = **$90.72** (se debe redondear) = **$91.00**

Con esto concluimos el cálculo. El resultado final de ISR que se debe de pagar es de **$91.00**.

## Conclusión

Felicidades, con esto concluimos de hacer el cálculo de ISR: solo terreno. Ahora vamos a hacer el cálculo de siguiente nivel: Terreno y Construcción. Te invitamos a realizar el cálculo con tus propios datos en nuestra herramienta gratuita: [clic aquí para ir a la herramienta de cálculo](https://isr.nuvigant.com/calculo-isr).
