---
title: "Cálculo de ISR: Solo Construcción"
date: "2022-08-12"
author:
  name: "Equipo Nuvigant"
  avatar: "https://ui-avatars.com/api/?name=Equipo+Nuvigant&background=056dfe&color=fff&size=128"
  bio: "Software administrativo en la nube con inteligencia artificial para fedatarios públicos."
  twitter: "https://twitter.com/nuvigant"
  linkedin: "https://linkedin.com/company/nuvigant"
tags: ["ISR", "Enajenación", "Construcción", "Fiscal"]
excerpt: "El cálculo de ISR por enajenación de solo una construcción incluye la depreciación del inmueble. Aprende paso a paso cómo realizarlo con un ejemplo práctico."
coverImage: "/images/blog/solo-construccion-calculo-isr.jpg"
published: true
category: "industry"
subcategory: "isr"
---

[En el artículo anterior](https://nuvigant.com/blog/industry/isr/solo-terreno-calculo-isr-enajenacion-inmuebles) vimos cómo realizar el cálculo de ISR por enajenación de inmuebles cuando solo se vende un terreno. En este artículo realizaremos otro cálculo sencillo, pero esta vez simularemos que lo que se vende es una construcción. Este cálculo es conocido como **Cálculo de ISR: Solo Construcción**.

## ¿Qué información necesitamos?

Para el cálculo de solo construcción se necesitan los siguientes valores (son los mismos que usamos en el ejemplo anterior):

- **Precio de adquisición**: $10,000.00 MXN
- **Precio de enajenación**: $20,000.00 MXN
- **Fecha de adquisición**: 03/08/2012
- **Fecha de enajenación**: 22/05/2022
- **Enajenantes**: 1 al 100%

## Paso 1: Calcular la depreciación

La diferencia clave entre el cálculo de solo terreno y el de solo construcción es la **depreciación**. Los inmuebles construidos pierden valor con el tiempo.

- Años transcurridos entre adquisición y enajenación: **9 años**
- Porcentaje de depreciación: 9 × 3% = **27%**
- Valor actual del inmueble: 100% – 27% = **73%**
- Valor depreciado: $10,000 × 73% = **$7,300 MXN**

## Paso 2: Ajustar por inflación

Tomamos el valor depreciado ($7,300) y lo actualizamos por la inflación. El proceso es el mismo que explicamos en [este artículo](https://nuvigant.com/blog/industry/isr/inflacion-isr-por-enajenacion-de-inmuebles), pero utilizando el valor depreciado como base.

**Resultado: $7,300 actualizados = $11,150.75 MXN**

Como vemos, en el cálculo de solo construcción, la depreciación baja mucho el precio de adquisición efectivo.

## Paso 3: Calcular la ganancia

![Cálculo-de-ISR:-Solo-Construcción](/images/blog/solo-construccion-calculo-isr-body.jpg)

Restamos al precio de venta el valor actualizado:

- $20,000.00 – $11,150.75 = **$8,849.25 MXN de ganancia**

## Paso 4: Calcular la ganancia anual

- Años completos transcurridos: 9
- Ganancia anual: $8,849.25 / 9 = **$983.25 MXN**

## Paso 5: Calcular el ISR

Consultamos la tabla de tarifas del ISR del [Diario Oficial de la Federación](https://dof.gob.mx/nota_detalle.php?codigo=5640505&fecha=12/01/2022#gsc.tab=0). Con $983.25 de ganancia anual, quedamos en el primer escalón:

| Límite inferior | Límite Superior | Cuota Fija | % excedente |
| --- | --- | --- | --- |
| $0.01 | $7,735.00 | $0.00 | 1.92% |

- $983.24 × 1.92% = **$18.88 MXN** (ISR anual)
- ISR total: $18.88 × 9 años = **$170 MXN**

Como podemos ver, gracias a la depreciación el ISR de una construcción termina siendo más elevado que el de un terreno (casi el doble en este caso). Esto es importante tenerlo en cuenta al asesorar a clientes en la venta de inmuebles.

## Herramienta de cálculo gratuita

Te invitamos a conocer y utilizar nuestra [herramienta gratuita de cálculo de ISR](https://isr.nuvigant.com/calculo-isr) por enajenación de bienes inmuebles:

- Sin costo
- Siempre actualizada con los índices de [BANXICO](https://www.banxico.org.mx/)
- Genera un PDF explicando paso a paso cómo se realizó el cálculo
